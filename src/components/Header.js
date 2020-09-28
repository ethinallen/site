import React from 'react';
import Typing from 'react-typing-animation';

const Header = () => (
  <header className="App-header">

    <Typing speed={75}>
      <h1>My name is Drew Emery.</h1>
      <Typing.Delay ms={1000} />
      <Typing.Backspace count={25} />
      <h1>I am graduating May 2021.</h1>
      <Typing.Delay ms={1000} />
      <Typing.Backspace count={25} />
      <h1>I am seeking full time-cloud consultant positions.</h1>
      <Typing.Delay ms={1000} />
      <Typing.Backspace count={50} />
      <h1>Emai me at abemery@clemson.edu</h1>
    </Typing>
  </header>
)

export default Header;
