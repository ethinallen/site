import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';

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
    <div className="bg_image" id="bkg_header"></div>

    <div className="header-container" id="header-header">

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
        <h3>
          My name is Andrew Emery. I received my BS in Industrial Engineering from
          Clemson University in May of 2021. While I may have done my undergrad in
          Industrial Engineering, professionally I am a cloud consultant /
          software developer.
        </h3>
      </div>
    </div>

  </div>
)

export default Header;
