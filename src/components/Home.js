import React from 'react';
import '../App.css';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

function Home() {
  return (

    <div className="Home">

      <Sidebar width={175} height={"100vh"}></Sidebar>

      <Header/>

    </div>
  );
}

export default Home;
