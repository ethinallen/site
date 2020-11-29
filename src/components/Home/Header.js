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
        <span>My name is Drew Emery.</span>
        <Typing.Delay ms={1000} />
        <Typing.Backspace count={23} />
        <span>I am graduating May 2021.</span>
        <Typing.Delay ms={1000} />
        <Typing.Backspace count={25} />
        <span>I am seeking full time work.</span>
        <Typing.Delay ms={1000} />
        <Typing.Backspace count={28} />
        <span><button className="download-button" onClick={download}>Click me</button> to download my resume! </span>
        <Typing.Delay ms={5000} />
        <span>If you're going to loiter this long...<Typing.Delay ms={1500} /> you might as well check out <Link to="/gitter" >Gitter</Link></span>
      </Typing>
    </div>

  </header>
)

export default Header;
