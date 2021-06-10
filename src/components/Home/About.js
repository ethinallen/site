import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import './About.css'


const About = () => (
  <div className="page" id="page-about">
    <div id="about-background"></div>


    <div className="header-container" id="header-about">
      <div id="about-container">
        <h3>
        Ever since my first cloud deployment on AWS I was
        hooked. I think that almost every business stands to benefit from using
        the cloud.Building scalable, reliable architecture using the cloud is
        the future to enabling companies to serve customers the best while
        getting the most bang for their buck.
        </h3>
      </div>
    </div>
  </div>
)

export default About;
