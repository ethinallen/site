import React from 'react';
import './Home.css'
import Header from './Header';
import CardComponent from "./Card";
import { Card, Icon, Image, Menu, Segment} from 'semantic-ui-react';


function Home() {

  return (
    <div className="Home">
      <Header />
      <CardComponent />
    </div>

  );
}

export default Home;
