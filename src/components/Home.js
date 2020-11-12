import React from 'react';
import './Home.css'
import Header from './Header';
import MenuComponent from "./Menu";
import Card from "./Card"

function Home() {
  return (
    <div className="Home">
      <MenuComponent />
      <Header />
      <Card />
    </div>
  );
}

export default Home;
