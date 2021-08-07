import React, { Component } from 'react';
import { IMAGESTYLE } from './constants.js'

import Page from './Page'

import './Home.css'

const aheadLink = <p> I'm a cloud consultant <a href="https://www.ahead.com">@AHEAD</a>.</p>;


class Home extends Component {

  render() {
    return (
      <div id="testing">
        <div className="home-container">
        <div className="Page" id="first">
          <Page
            imageBlockStyle = {{
                ...IMAGESTYLE,
                float: "left",
                backgroundImage: "url(https://cdn.andrewemery.io/drew.jpg)",
            }}

            textBlockStyle={{
              float:'right',
              backgroundColor: '#264653',
              color: 'white'
            }}
            headline={'My name is \nDrew Emery.'}
            subtext={"I am a recent Clemson University Alum. I like biking, racing, and small Japanese cars. I love learning and challenging myself. Scroll to learn more about me!"}
          />
        </div>
        <div className="Page" id="second">
          <Page
            textBlockStyle={{
              float: 'left',
              backgroundColor: '#f4a261',
              color: 'white'
            }}
            imageBlockStyle={{
              ...IMAGESTYLE,
              float:'right',
              backgroundImage: 'url(https://cdn.andrewemery.io/background.png)',
              backgroundPosition: "bottom right"
            }}

            headline={aheadLink}
            subtext={'I am passionate about helping clients build scalable, affordable cloud infrastructure. Email me at drew.emery@ahead.com'}
            />
        </div>

        <div className="Page" id="third">
          <Page
            imageBlockStyle={{
              ...IMAGESTYLE,
              float: 'left',
              backgroundImage: 'url(https://cdn.andrewemery.io/needle_telescope.png)',
            }}
          textBlockStyle={{
            float:'right',
            backgroundColor: '#2a9d8f'
        }}

          headline={"I'm based out of Seattle."}
          subtext={"My watch never left Seattle time! From the moment I crossed into PST this winter I set my watch and only looked forward. The Pacific Northwest is my favorite locale and I look forward to making The Emerald City my home."}
          />
        </div>

        <div className="Page">
          <Page
            imageBlockStyle={{
              ...IMAGESTYLE,
              float: 'right',
              backgroundImage: 'url(https://cdn.andrewemery.io/IMG_3857.png)',
              backgroundPosition: "75% 10%"
            }}
          textBlockStyle={{
            float:'left',
            backgroundColor: '#e76f51'
        }}

          headline={"I am unconventional."}
          subtext={"I'm unconventional and I think everyone could benefit from the occasional deviation from the beaten path. I try to expose myself to as many differnt experiences and viewpoints as possible. If you feel so inclined, contact me so we can get to know more about each other."} />
        </div>
        </div>
      </div>
    );
  }
}

export default Home;
