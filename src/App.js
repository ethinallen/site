import React from 'react';
import './App.css';
import './components/Van.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Home.js"
import Login from "./components/Login.js"
import Van from "./components/Van.js"


function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/van" component={Van} />
      </Switch>
    </Router>
  );
}

export default App;
