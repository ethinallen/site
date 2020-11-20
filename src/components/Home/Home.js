import React from 'react';
import ReactGA from 'react-ga';

import './Home.css'
import Header from './Header';
import About from './About';


ReactGA.pageview(window.location.pathname + window.location.search);

function Home() {

  return (
    <>
      <div className="bg_image"></div>
      <Header />
      <About />
    </>
  );
}

export default Home;
