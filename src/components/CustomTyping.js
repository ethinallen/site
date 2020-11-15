import React, { Component } from 'react';
import Typing from 'react-typing-animation';

const CustomTyping = () => (
    <div>
      <Typing speed={10}>
        <span>Twitter...<Typing.Delay ms={1000} /> but for Github commit messages</span>
      </Typing>
    </div>
)

export default CustomTyping;
