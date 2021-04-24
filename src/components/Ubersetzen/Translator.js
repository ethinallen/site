import React, { Component } from "react";
import { Card, Grid, Image } from 'semantic-ui-react';
import queryString from 'query-string';
import ReactLoading from 'react-loading';
import Lyrics from './lyricComponent';
import CurrentPlay from './currentlyPlayingCard';

import { useCurrent } from '../../net/currentPlaying'
import { useLyrics } from '../../net/lyrics'

import './Ubersetzen.css';

class Ubersetzen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticatedWithSpotify: false,
      serverData: {},
      lyrics : {},
      token : {}
    };

  }



  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    if (!accessToken)
      return;
    else this.state.token = accessToken;
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
                      <CurrentPlay token={this.state.token}/>
                  : <div className="signInButton" onClick={() => {
                    window.location = window.location.href.includes('localhost')
                      ? 'http://localhost:8888/login'
                      : 'https://arbeiter.xyz:8888/login' }
                    }
                    >Sign in with Spotify</div>
              }
              </div>

          </div>
      </div>
    );
  }
}

export default Ubersetzen;
