import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

import Home from "./components/Home/Home.js"
import Van from "./components/Van/Van.js"
import Gitter from "./components/Gitter/Gitter.js"
import Ubersetzen from "./components/Ubersetzen/Ubersetzen.js"

const history = createBrowserHistory();

ReactGA.initialize("UA-183493843-1", {
    debug: false,
    gaOptions: { cookieFlags: 'max-age=7200;samesite=none;secure' },
  });

ReactGA.set({ page: history.location.pathname }); // Update the user's current page
ReactGA.pageview(history.location.pathname);

export default function App(){
  // const history = createBrowserHistory();

  // Initialize google analytics page view tracking
  history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  });

  return(
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/van" component={Van} />
      <Route exact path="/gitter" component={Gitter} />
      <Route exact path="/ubersetzen" component={Ubersetzen} />
    </Switch>
  </Router>
);
}
