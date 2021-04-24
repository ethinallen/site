import React, { useEffect, useState } from "react";
import { useCurrent } from '../../net/currentPlaying'


import { Card, Grid, Image } from 'semantic-ui-react';
import Lyrics from './lyricComponent';

import useSWR from 'swr';
import fetch from 'unfetch';

const fetcher = (token) =>
fetch('https://api.spotify.com/v1/me/player/currently-playing', {
  headers: {'Authorization': 'Bearer ' + token}
}).then(response => response.json())


function CurrentPlay(props) {
  const [currentArtist, setCurrentArtist] = useState(0)
  const [currentSong, setCurrentSong] = useState(0)
  const [currentURL, setCurrentURL] = useState(0)
  const [currentLyrics, setCurrentLyrics] = useState(0)

  const currentData = useCurrent(props.token)

  useEffect(() => {
      if(currentData.data){

        setCurrentArtist(currentData.data["item"]["artists"][0]["name"]);
        setCurrentSong(currentData.data["item"]["name"]);
        setCurrentURL(currentData.data["item"]["album"]["images"][0]["url"]);
      }
  }, [currentData.data])

  if (!currentData) return <div>loading...</div>
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
