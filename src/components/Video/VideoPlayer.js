import React from 'react';
// import ReactPlayer from 'react-player'
import videojs from 'video.js';
import './Video.css';


// function Video() {
//   return (
//     <>
//       <div className="video-container">
//         <ReactPlayer url='https://misc-site-storage.s3.us-east-2.amazonaws.com/videos/cribs.mp4' />
//       </div>
//     </>
//   );
// }


export default class VideoPlayer extends React.Component {
  componentDidMount() {
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('Video.js Ready', this)
    });
  }
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }
  render() {
    return (
      <div>
        <div data-vjs-player>
          <video src="https://misc-site-storage.s3.us-east-2.amazonaws.com/videos/cribs.mp4" className="video-js"></video>
        </div>
      </div>
    )
  }
}

// export default Video;
