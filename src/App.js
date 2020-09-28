import React from 'react';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>

    <div className="App">

      <Sidebar width={175} height={"100vh"}>
        <h1> Drew.
        <Text style={{color: 'blue'}}
              onPress={() => Linking.openURL('http://google.com')}>
          Google
        </Text>
        </h1>
        <href=
      </Sidebar>

      <Header/>

    </div>
  );
}

export default App;
