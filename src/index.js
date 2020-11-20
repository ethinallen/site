import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';


import './index.css';
import App from './App';
import "semantic-ui-css/semantic.min.css";

ReactGA.initialize('G-KN41TN8D9F');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
