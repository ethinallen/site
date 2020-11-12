import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import './Card.css'

const CardExampleImageCard = () => (
  <div id="card-container">
    <Card>
      <Image src='https://misc-site-storage.s3.us-east-2.amazonaws.com/drew.jpg' wrapped ui={false}   raised='True'/>
      <Card.Content>
        <Card.Header>Drew Emery</Card.Header>
        <Card.Meta>Cloud Consultant</Card.Meta>
        <Card.Description>
          Thanks for visiting my site! While I may be an industrial engineer on paper, I have already collaborated with my computer science peers on several large projects; namely my work this summer at Amazon Web Services. While I may not know it all, I hope that my background shows you I have the ability to learn whatever is necessary to accomplish the goals at hand and delight clients.
        </Card.Description>
      </Card.Content>
    </Card>
  </div>
)

export default CardExampleImageCard
