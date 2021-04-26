import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import Body from './Body'

import './Home.css'
import Header from './Header';

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
