import React from 'react';

import { Link } from 'react-router-dom';
import Typing from 'react-typing-animation';
import { Card, Image } from 'semantic-ui-react';

import './Home.css'

function download() {
  setTimeout(() => {
    const response = {
      file: 'https://misc-site-storage.s3.us-east-2.amazonaws.com/drewEmeryResume.pdf',
    };
    window.open(response.file);
  }, 100);
}

function Home() {

  return (
    <>
      <div className="bg_image"></div>

      <header className="App-header">

        <div id="typing-container">
          <Typing speed={40}>
            <span>My name is Drew Emery.</span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={22} />
            <span>I am graduating May 2021.</span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={25} />
            <span>I am seeking full time-cloud consultant positions.</span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={50} />
            <span><button className="download-button" onClick={download}>Click me</button> to download my resume! </span>
            <Typing.Delay ms={5000} />
            <span> and if you're going to loiter this long...<Typing.Delay ms={1500} /> you might as well check out <Link to="/gitter" >Gitter</Link></span>
          </Typing>
        </div>

      </header>

      <div id="about">
        <div id="title-container"><u>About Me</u></div>
          <div id="card-container">
            <Card>
              <Image
                src={'https://misc-site-storage.s3.us-east-2.amazonaws.com/drew.jpg'}
                size={'large'}
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
    </>
  );
}

export default Home;
