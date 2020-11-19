import React from 'react';
import { Link } from 'react-router-dom';
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

  <header className="App-header">

    <div id="typing-container">
      <Typing speed={40}>
        <li>My name is Drew Emery.</li>
        <Typing.Delay ms={1000} />
        <li>I am graduating May 2021.</li>
        <Typing.Delay ms={1000} />
        <li>I am seeking full time-cloud consultant positions.</li>
        <Typing.Delay ms={1000} />
        <li><button className="download-button" onClick={download}>Click me</button> to download my resume! </li>
        <Typing.Backspace count={1} />
        <Typing.Delay ms={5000} />
        <li>If you're going to loiter this long...<Typing.Delay ms={1500} /> you might as well check out <Link to="/gitter" >Gitter</Link></li>
      </Typing>
    </div>

  </header>
)

export default Header;
