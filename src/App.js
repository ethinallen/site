import React from 'react';
import logo from './logo.svg';
import './App.css';
import Typing from 'react-typing-animation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typing speed={50}>
          <h1>My name is Andrew Emery.</h1>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={25} />
          <h1>I graduate May 2021.</h1>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={25} />
          <h1>I am seeking full-time cloud consulting positions.</h1>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={50} />
          <h1>Download my resume for my contact information.</h1>
          <Typing.Delay ms={1000} />
        </Typing>
      </header>
    </div>
  );
}



export default App;
