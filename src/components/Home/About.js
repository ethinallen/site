import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import { Card, Image } from 'semantic-ui-react';
import './About.css'


const About = () => (
  <div id="about">
    <div id="card-container">
      <Parallax
        offsetXMin={-50}
        offsetXMax={50}
        className="ring"
      >
        <Card>
          <Image
            src={'https://misc-site-storage.s3.us-east-2.amazonaws.com/drew.jpg'}
            size={'massive'}
          />
          <Card.Content>
            <Card.Header>Drew Emery</Card.Header>
            <Card.Meta>Software Developer</Card.Meta>
            <Card.Description>
              My name is Drew. I'm unconventional, determined, and the the next employee you want to hire.
            </Card.Description>
          </Card.Content>
        </Card>
      </Parallax>
    </div>
  </div>
)

export default About;
