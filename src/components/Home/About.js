import React from 'react';
// import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';
import './About.css'


const About = () => (
  <div id="about">
    <div id="title-container"><u>About</u></div>
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
            Thanks for visiting my site! While I may be an industrial engineer on paper, I have already collaborated with my computer science peers on several large projects; namely my work this summer at Amazon Web Services. While I may not know it all, I hope that my background shows you I have the ability to learn whatever is necessary to achieve the goals at hand and delight clients.
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  </div>
)

export default About;
