import React, { useEffect, useState } from "react";
import queryString from 'query-string';
import Login from './Login';

import Lyrics from './lyricComponent';
import CurrentPlay from './currentlyPlayingCard';
import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';


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
      <div>
      <div className="contentContainer">
        <div id="header">
          <MusicNoteOutlinedIcon style={{ fontSize: 30 }}/>
          Ubersetzen
        </div>
        <div className="contentColumn">
            <CurrentPlay token={token} />
            <Lyrics data={current} token={token}/>
          </div>
      </div>

      </div>
    );
}

export default Ubersetzen;
