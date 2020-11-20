import React from 'react';
import ReactGA from 'react-ga';

import './Home.css'
import Header from './Header';

ReactGA.pageview(window.location.pathname + window.location.search);

console.log('Window Path:\t', window.location.pathname);
ReactGA.pageview(window.location.pathname + window.location.search);

function Home() {

  return (
    <>
      <div className="bg_image"></div>
      <Header />
    </>
  );
}

export default Home;
