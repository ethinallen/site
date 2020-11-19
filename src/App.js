import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Home/Home.js"
import Van from "./components/Van/Van.js"
import Gitter from "./components/Gitter/Gitter.js"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/van" component={Van} />
        <Route path="/gitter" component={Gitter} />
      </Switch>
    </Router>
  );
}

export default App;
