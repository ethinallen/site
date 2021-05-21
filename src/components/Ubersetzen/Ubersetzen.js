import React, { useEffect, useState } from "react";
import queryString from 'query-string';
import Login from './Login';

import Lyrics from './lyricComponent';
import CurrentPlay from './currentlyPlayingCard';

import { useCurrent } from '../../net/currentPlaying'

import './Ubersetzen.css';

function Ubersetzen(props) {
  const [token, setToken] = useState(0);

  const current = useCurrent(token)


  useEffect(() => {
    let parsed = queryString.parse(window.location.search);
    setToken(parsed.access_token);
  })


  if (!token) {
    return (
    <div className="contentContainer">
      <Login token={setToken} />
    </div>)
  }

    return (
      <>
      <div className="contentContainer">
        <div id="header"> Ubersetzen </div>
        <div className="contentColumn">
            <CurrentPlay token={token} />
            <Lyrics data={current} token={token}/>
          </div>
      </div>

      </>
    );
}

export default Ubersetzen;
