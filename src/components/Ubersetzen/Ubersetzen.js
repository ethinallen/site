import React, { Component } from "react";
import * as $ from "jquery";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import hash from "./hash";
import queryString from 'query-string';
import './Ubersetzen.css';

class Ubersetzen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticatedWithSpotify: false
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
    .then(data => this.setState({
      user: {
        name: data.display_name
      }
    }))

    fetch(' 	https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    })
    .then(response => {
      console.log(response.json())
    })
  }


  render() {
    return (
      <div className="Home">
        <div id="greenBox">
          <div className="button_container">

            <div className="Line" />
          </div>
        </div>
      </div>
    );
  }
}

export default Ubersetzen;
