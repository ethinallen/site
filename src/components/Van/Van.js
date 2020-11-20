import React from 'react';
import ReactGA from 'react-ga';

import './Van.css';

ReactGA.pageview(window.location.pathname + window.location.search);

function Van() {
  return (
    <div className="Home"></div>
  );
}

export default Van;
