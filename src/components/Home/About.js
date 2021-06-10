import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import './About.css'


const About = () => (
  <div className="page" id="page-about">
    <div id="about-background"></div>


    <div className="header-container" id="header-about">
      <div id="about-container">
        <p>
          My name is Andrew Emery. I received my BS in Industrial Engineering from
          Clemson University in May of 2021. While I may have done my undergrad in
          Industrial Engineering, professionally I am a cloud consultant /
          software developer. Ever since my first cloud deployment on AWS I was
          hooked. I wanted to build cooler projects and deploy them using the
          cloud. I think that almost every business stands to benefit from using
          the cloud and I am here to help anyone who wants to see if there’s any
          money they can save in doing so. Building scalable, reliable
          architecture using the cloud is the future to enabling companies to
          serve customers the best while getting the most bang for their buck.
        </p>
      </div>
    </div>
  </div>
)

export default About;
