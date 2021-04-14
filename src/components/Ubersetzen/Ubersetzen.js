import React, { Component } from "react";
import { Card, Grid, Image } from 'semantic-ui-react';


import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import hash from "./hash";
import queryString from 'query-string';
import './Ubersetzen.css';

class Ubersetzen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticatedWithSpotify: false,
      serverData: {}
    };
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    if (!accessToken)
      return;
    fetch('https://api.spotify.com/v1/me', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    }).then(response => response.json())
    .then((data) => this.setState({
      user: {
        name: data.display_name
      }
    }))

    fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    }).then(response => response.json())

    .then((data) => this.setState({
      serverData: {
        imageURL: data["item"]["album"]["images"][0]["url"],
        songTitle: data["item"]["name"],
        artist: data["item"]["artists"][0]["name"]
      }
    })).then(() =>
      fetch('https://arbeiter.xyz:8888/lyrics/' + this.state.serverData.artist + '/' + this.state.serverData.songTitle)
      .then(response => response.json())
      .then((data) => this.setState({
        serverData: {
          native_lyrics: data['lyrics']
        }
      }))
    )



  }


  render() {

    return (
      <div className="Home">
          <div id="contentContainer">
          <div id="cardContainer">
            {this.state.user ?
                  <Card>
                    <Card.Content>
                      <Image
                      floated='right'
                      size='large'
                      src={this.state.serverData.imageURL}
                      />
                      <Card.Header>{this.state.serverData.songTitle}</Card.Header>
                      <Card.Meta>{this.state.serverData.artist}</Card.Meta>
                    </Card.Content>
                  </Card>


              : <div className="signInButton" onClick={() => {
                window.location = window.location.href.includes('localhost')
                  ? 'https://localhost:8888/login'
                  : 'https://arbeiter.xyz:8888/login' }
                }
                >Sign in with Spotify</div>
              }
            </div>

            <div id="lyricsContainer">
              <div id="lyric-container">
                {
                  this.state.serverData.native_lyrics ?
                  <div id="lyrics">
                  {this.state.serverData.native_lyrics.split("\n").map((i,key) => {
            return <div key={key}>{i}</div>;
        })}
                  </div>

                  : <div>waiting on lyrics... </div>
                }
              </div>

            </div>
        </div>

      </div>
    );
  }
}

export default Ubersetzen;
