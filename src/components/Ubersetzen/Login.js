import React from 'react';

export default function Login({setToken}) {
  return(
    <div id="Login-page">
      <div className="signInButton" onClick={() => {
        window.location = window.location.href.includes('localhost')
          ? 'http://localhost:8888/login'
          : 'https://arbeiter.xyz:8888/login' }
        }
        >Sign in with Spotify</div>

      </div>
  )
}
