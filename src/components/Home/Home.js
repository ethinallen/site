import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import ReactPageScroller from 'react-page-scroller';


import Header from './Header'
import About from './About'
import Personal from './Personal'

import './Home.css'

class Home extends Component {

  render() {
    return (
      <>
        <Header />
        <About />
        <Personal />
        </>
    );
  }
}

export default Home;
