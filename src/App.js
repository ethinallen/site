import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Home.js"
import Van from "./components/Van.js"
import Life from "./components/Life.js"


function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/van" component={Van} />
        <Route path="/wyd" component={Life} />
      </Switch>
    </Router>
  );
}

export default App;
