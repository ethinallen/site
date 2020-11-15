import React from 'react';
import './Home.css'
import Header from './Header';
import CardComponent from "./Card";


function Home() {

  return (
    <div className="Home">
      <div className="bg_image"></div>
      <Header />
      <CardComponent />
    </div>

  );
}

export default Home;
