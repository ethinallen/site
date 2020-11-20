import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "semantic-ui-css/semantic.min.css";
import ReactGA from 'react-ga';

ReactGA.initialize('G-KN41TN8D9F', {
  debug: true,
  titleCase: false,
  gaOptions: {
    userId: 420
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
