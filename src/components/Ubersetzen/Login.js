import React from 'react';
import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';

import './Login.css';

export default function Login({setToken}) {
  return(
    <div id="Login-page">
      <div id="header"> <MusicNoteOutlinedIcon style={{ fontSize: 30 }}/>Ubersetzen </div>
      <div id="jumbotron">

        <div id="description-container">
            <div id="description-header">
              Ubersetzen
            </div>
            <div id="description">
              Ubersetzen is an app for translating the lyrics to you're currently playing song on Spotify. Sign in to get started!
            </div>

          <div id="button-container">
            <div className="signInButton" onClick={() => {
            window.location = window.location.href.includes('localhost')
              ? 'http://localhost:8888/login'
              : 'https://arbeiter.xyz:8888/login' }
            }
            >Login with Spotify</div>
          </div>

          </div>
        </div>

      </div>
  )
}
