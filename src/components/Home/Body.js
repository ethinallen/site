import React, { Component } from 'react';

import './Body.css'
import Header from './Header';
import About from './About';
import Other from './Other';

class Body extends Component {

  render() {
    return (
      <>
        <Header />
        <About />
        <Other />
      </>
    );
  }
}

export default Body;
