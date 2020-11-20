import React from 'react';
import ReactGA from 'react-ga';
import ReactPlayer from 'react-player'

import './Video.css';

console.log(window.location.pathname);

ReactGA.pageview(window.location.pathname + window.location.search);

function Video() {
  return (
    <>
      <div className="video-container">
        <ReactPlayer url='https://misc-site-storage.s3.us-east-2.amazonaws.com/videos/cribs.mp4' />
      </div>
    </>
  );
}

export default Video;
