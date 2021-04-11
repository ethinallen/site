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

    }))


  }


  render() {

    return (
      <div className="Home">
        <div id="contentContainer">
        {this.state.user ?

          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='medium'
                src={this.state.serverData.imageURL}
              />
              <Card.Header>{this.state.serverData.songTitle}</Card.Header>
              <Card.Meta>{this.state.serverData.artist}</Card.Meta>
            </Card.Content>
          </Card> : <button onClick={() => {
            window.location = 'http://3.234.25.124:8888/login' }
          }
          style={{padding: '20px', 'font-size': '50px', 'margin-top': '20px'}}>Sign in with Spotify</button>
        }
        </div>
      </div>
    );
  }
}

export default Ubersetzen;
