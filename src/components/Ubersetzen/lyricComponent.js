import React, { useEffect, useState } from "react";
import ReactLoading from 'react-loading';

import useSWR from 'swr';
import fetch from 'unfetch';
import { useCurrent } from '../../net/currentPlaying'

import { useLyrics } from '../../net/lyrics'

const fetcher = (artist, songTitle) =>
  fetch('https://arbeiter.xyz:8888/lyrics/' + artist + '/' + songTitle)
  .then(response => response.json())
  .then((data) => this.setState({
    lyrics: {
      native_lyrics: data['lyrics']
    }
}))

function Lyrics(props) {

  const [currentArtist, setCurrentArtist] = useState()
  const [currentSong, setCurrentSong] = useState()

  const current = useCurrent(props.token)
  const data = useLyrics(currentArtist, currentSong)

  useEffect(() => {
    if (current.data) {
      if(current.data.currently_playing_type && current.data.currently_playing_type == 'track'){
        setCurrentArtist(current.data["item"]["artists"][0]["name"]);
        setCurrentSong(current.data["item"]["name"]);
      }
    }
  }, [props.data])

  if(data.isLoading || data.isError){
      return(
        <div><ReactLoading type="cylon" color="#fff" />waiting on lyrics... </div>
      )
  }

  console.log(data);

  if (current.data == undefined || current.data.currently_playing_type != 'track') {
    return <div id="lyric-container">
              <div id="lyrics">
                Start playing a song on Spotify to begin!
              </div>
            </div>
  }

  return <div id="lyric-container">
          <div id="lyrics">
            {data.data.lyrics.split("\n").map((i,key) => {
            return <div key={key}>{i}</div> ;
            })}
          </div>

          </div>
}

export default Lyrics;
