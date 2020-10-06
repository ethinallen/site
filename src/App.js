import React from 'react';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  return (

    <div className="App">

      <Sidebar width={175} height={"100vh"}>

      </Sidebar>

      <Header/>

    </div>
  );
}

export default App;
