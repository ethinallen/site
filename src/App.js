import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

import Home from "./components/Home/Home.js"
import Van from "./components/Van/Van.js"
import Gitter from "./components/Gitter/Gitter.js"
import Video from "./components/Video/Video.js"

const trackingId = "G-KN41TN8D9F";
ReactGA.initialize(trackingId);

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const App = () => (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/van" component={Van} />
          <Route exact path="/video" component={Video} />
          <Route exact path="/gitter" component={Gitter} />
        </Switch>
      </Router>
)

export default App;
