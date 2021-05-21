import React, { useEffect, useState } from "react";

import { useCurrent } from '../../net/currentPlaying';

import { Card, Grid, Image } from 'semantic-ui-react';


function CurrentPlay(props) {
  const [currentArtist, setCurrentArtist] = useState(0)
  const [currentSong, setCurrentSong] = useState(0)
  const [currentURL, setCurrentURL] = useState(0)
  const [currentLyrics, setCurrentLyrics] = useState(0)

  const currentData = useCurrent(props.token)
  console.log(currentData);

  useEffect(() => {
      if(currentData.data && currentData.data.currently_playing_type === 'track'){
        setCurrentArtist(currentData.data["item"]["artists"][0]["name"]);
        setCurrentSong(currentData.data["item"]["name"]);
        setCurrentURL(currentData.data["item"]["album"]["images"][0]["url"]);
      }
  }, [currentData.data])

  if (!currentData) return <div>loading...</div>
  if (currentData.data === undefined || currentData.data.currently_playing_type !== 'track') return <div id="cardContainer">
            <Card>
              <Card.Content>
                <Image
                floated='right'
                size='large'
                src="https://misc-site-storage.s3.us-east-2.amazonaws.com/albumCover.jpg"
                />
                <Card.Header><a href="https://misc-site-storage.s3.us-east-2.amazonaws.com/drewEmeryResume.pdf">Seeking Employment</a></Card.Header>
                <Card.Meta><a href="https://misc-site-storage.s3.us-east-2.amazonaws.com/drewEmeryResume.pdf">Drew</a></Card.Meta>
              </Card.Content>
            </Card>
          </div>
  return   <div id="cardContainer">
            <Card>
              <Card.Content>
                <Image
                floated='right'
                size='large'
                src={currentURL}
                />
                <Card.Header>{currentSong}</Card.Header>
                <Card.Meta>{currentArtist}</Card.Meta>
              </Card.Content>
            </Card>
          </div>
}

export default CurrentPlay;
