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
  <h2>hello</h2>
    <div id="typing-container">
      <Typing speed={50}>
        <h1>My name is Drew Emery.</h1>
        <Typing.Delay ms={1000} />
        <Typing.Backspace count={25} />
        <h1>I am graduating May 2021.</h1>
        <Typing.Delay ms={1000} />
        <Typing.Backspace count={25} />
        <h1>I am seeking full time-cloud consultant positions.</h1>
        <Typing.Delay ms={1000} />
        <Typing.Backspace count={50} />
        <h1><button className="download-button" onClick={download}>Click me</button> to download my resume!</h1>
      </Typing>
    </div>

  </header>
)

export default Header;
