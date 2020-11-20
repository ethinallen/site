import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

import Home from "./components/Home/Home.js"
import Van from "./components/Van/Van.js"
import Gitter from "./components/Gitter/Gitter.js"
import Video from "./components/Video/Video.js"

ReactGA.pageview(window.location.pathname + window.location.search);


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/van" component={Van} />
        <Route path="/gitter" component={Gitter} />
        <Route path="/video" component={Video} />
      </Switch>
    </Router>
  );
}

export default App;
