import { Card, Grid, Image } from 'semantic-ui-react';
import Lyrics from './lyricComponent';

import useSWR from 'swr';
import fetch from 'unfetch';

const fetcher = (token) =>
fetch('https://api.spotify.com/v1/me/player/currently-playing', {
  headers: {'Authorization': 'Bearer ' + token}
}).then(response => response.json())


function CurrentPlay(props) {
  const { data, error } = useSWR(props.token, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return   <div>
            <Card>
              <Card.Content>
                <Image
                floated='right'
                size='large'
                src={data["item"]["album"]["images"][0]["url"]}
                />
                <Card.Header>{data["item"]["name"]}</Card.Header>
                <Card.Meta>{data["item"]["artists"][0]["name"]}</Card.Meta>
              </Card.Content>
            </Card>

          </div>
}


export default CurrentPlay;
