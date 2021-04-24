import React, { useEffect, useState } from "react";


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

  console.log()

  useEffect(() => {
      if(current.data){
        setCurrentArtist(current.data["item"]["artists"][0]["name"]);
        setCurrentSong(current.data["item"]["name"]);
      }
  }, [props.data])

  if(data.isLoading || data.isError){
      return(
          <>
            <h1>We are loading...</h1>
          </>
      )
  }

  console.log(data);

  return <div id="lyric-container">
          <div id="lyrics">
            {data.data.lyrics.split("\n").map((i,key) => {
            return <div key={key}>{i}</div> ;
            })}
          </div>

          </div>
}

export default Lyrics;
