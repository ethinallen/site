import React from 'react';
import './App.css';
import Typing from 'react-typing-animation';


function App() {
  return (
    <div className="App">
      <div className="bkg_containter">
        <header className="App-header">
          <Typing speed={75}>
            <h1>My name is Drew Emery.</h1>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={25} />
            <h1>I graduate May 2021.</h1>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={25} />
            <h1>I am seeking full time-cloud consultant positions.</h1>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={50} />
            <h1>Download my <a href="./files/drewEmeryResume.pdf" download>resume</a> for my contact information.</h1>
            <Typing.Delay ms={1000} />
          </Typing>
        </header>
      </div>
    </div>
  );
}



export default App;
