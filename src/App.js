import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

import Home from "./components/Home/Home.js"
import Van from "./components/Van/Van.js"
import Gitter from "./components/Gitter/Gitter.js"
import Video from "./components/Video/Video.js"
import Ubersetzen from "./components/Ubersetzen/Ubersetzen.js"

ReactGA.initialize("UA-183493843-1", {
    debug: true,
    gaOptions: { cookieFlags: 'max-age=7200;samesite=none;secure' },
  });
ReactGA.pageview("testing what thefuck ");

export default function App(){

  const history = createBrowserHistory();

  return(
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/van" component={Van} />
      <Route exact path="/video" component={Video} />
      <Route exact path="/gitter" component={Gitter} />
      <Route exact path="/ubersetzen" component={Ubersetzen} />
    </Switch>
  </Router>
);
}
