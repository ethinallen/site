import React, { Component } from "react";
import { Card, Grid, Image } from 'semantic-ui-react';
import queryString from 'query-string';
import ReactLoading from 'react-loading';

import './Ubersetzen.css';

class Ubersetzen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticatedWithSpotify: false,
      serverData: {},
      lyrics : {}
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
      fetch('http://3.234.25.124:8888/lyrics/' + this.state.serverData.artist + '/' + this.state.serverData.songTitle)
      .then(response => response.json())
      .then((data) => this.setState({
        lyrics: {
          native_lyrics: data['lyrics']
        }
      }))
    )
  }


  render() {

    return (
        <div className="contentContainer">

          <div className="contentColumn">
          <div id="header">Ubersetzen.</div>

            <div id="cardContainer">
              {
                this.state.user ?
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
                    ? 'http://localhost:8888/login'
                    : 'http://3.234.25.124:8888/login' }
                  }
                  >Sign in with Spotify</div>
            }
          </div>

          <div id="lyric-container">
            {
              this.state.lyrics.native_lyrics  ?
                <div id="lyrics">
                  {this.state.lyrics.native_lyrics.split("\n").map((i,key) => {
                  return <div key={key}>{i}</div> ;
                })}
              </div>

              : (this.state.user ?
                  <div><ReactLoading type="cylon" color="#fff" />waiting on lyrics... </div>
                : <div id="plz"> Please log in to get started! </div>)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Ubersetzen;
