import React from 'react';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Sidebar from './components/Sidebar'
import Header from './components/Header'

function App() {
  return (
    <div className="App">

      <Sidebar width={175} height={"100vh"}>
        <h1> Drew. </h1>
      </Sidebar>

      <Header/>

    </div>
  );
}

export default App;
