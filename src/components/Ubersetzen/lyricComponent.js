import useSWR from 'swr';
import fetch from 'unfetch';

const fetcher = (artist, songTitle) =>
fetch('https://arbeiter.xyz:8888/lyrics/' + artist + '/' + songTitle)
.then(response => response.json())
.then((data) => this.setState({
  lyrics: {
    native_lyrics: data['lyrics']
  }
}))

function Lyrics(props) {
  const { data, error } = useSWR([props.artist, props.songTitle], fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>{data.lyrics}</div>
}


export default Lyrics;
