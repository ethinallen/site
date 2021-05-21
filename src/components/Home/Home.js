import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import Body from './Body'

import './Home.css'

class Home extends Component {

  render() {
    return (
      <ParallaxProvider>
        <Body />
      </ParallaxProvider>
    );
  }
}

export default Home;
