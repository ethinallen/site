import React from 'react';
import Typing from 'react-typing-animation';
import './Header.css'

function download() {
  // fake server request, getting the file url as response
  setTimeout(() => {
    const response = {
      file: 'https://misc-site-storage.s3.us-east-2.amazonaws.com/drewEmeryResume.pdf',
    };
    // server sent the url to the file!
    // now, let's download:
    window.open(response.file);
    // you could also do:
    // window.location.href = response.file;
  }, 100);
}

const Header = () => (
  <header className="App-header">
    <div id="typing-container">
      <Typing speed={50}>
        <a>My name is Drew Emery.</a>
        <Typing.Delay ms={1000} />
        <Typing.Backspace count={25} />
        <a>I am graduating May 2021.</a>
        <Typing.Delay ms={1000} />
        <Typing.Backspace count={25} />
        <a>I am seeking full time-cloud consultant positions.</a>
        <Typing.Delay ms={1000} />
        <Typing.Backspace count={50} />
        <a><button class="download-button" onClick={download}><u>Click me</u></button> to download my resume!</a>
      </Typing>
    </div>

  </header>
)

export default Header;
