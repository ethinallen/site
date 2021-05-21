import React, { useEffect, useState } from "react";
import ReactLoading from 'react-loading';

import { useCurrent } from '../../net/currentPlaying'
import { useLyrics } from '../../net/lyrics'

function Lyrics(props) {

  const [currentArtist, setCurrentArtist] = useState()
  const [currentSong, setCurrentSong] = useState()

  const current = useCurrent(props.token)
  const data = useLyrics(currentArtist, currentSong)

  useEffect(() => {
    if (current.data) {
      if(current.data.currently_playing_type && current.data.currently_playing_type === 'track'){
        setCurrentArtist(current.data["item"]["artists"][0]["name"]);
        setCurrentSong(current.data["item"]["name"]);
      }
    }
  }, [props.data])

  if(data.isLoading || data.isError){
      return(
        <div id="loading"><ReactLoading type="cylon" color="#fff" />waiting on lyrics... </div>
      )
  }

  console.log(data);

  if (current.data === undefined || current.data.currently_playing_type !== 'track') {
    return <div className="lyric-container">
              <div className="lyrics">
                Start playing a song on Spotify to begin!
              </div>
            </div>
  }

  return <div className="lyric-container">
          <div className="lyrics">
            {data.data.lyrics.split("\n").map((i,key) => {
            return <div key={key}>{i}</div> ;
            })}
          </div>
          <div className="lyrics">
            {data.data.lyrics.split("\n").map((i,key) => {
            return <div key={key}>{i}</div> ;
            })}
          </div>

          </div>
                  }

export default Lyrics;
