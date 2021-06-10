import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';

import Typing from 'react-typing-animation';
import './Header.css'

function download() {
  setTimeout(() => {
    const response = {
      file: 'https://misc-site-storage.s3.us-east-2.amazonaws.com/drewEmeryResume.pdf',
    };
    window.open(response.file);
  }, 100);
}

const Header = () => (

  <div className="page" id="page-header">
    <div className="bg_image"></div>

    <div id="header-container">

    <div id="card-container">
      <Card>
        <Image
          src={'https://misc-site-storage.s3.us-east-2.amazonaws.com/drew.jpg'}
          size={'massive'}
        />
        <Card.Content>
          <Card.Header>Drew Emery</Card.Header>
          <Card.Meta>Cloud Consultant</Card.Meta>
          <Card.Description>
            I am currently a cloud consultant at Ahead. I like helping people find savings by moving to the cloud and building scalable architectures.
          </Card.Description>
        </Card.Content>
      </Card>
    </div>

      <div id="personal-header" className="personal-container">
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

export default Header;
