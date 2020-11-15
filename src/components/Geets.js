import React from 'react'
import { Card, Image } from 'semantic-ui-react';

const Geets = ({ geets }) => {
  return (
   <div>
     {geets.map((geet) => (
       <Card>
         <Image src={geet.avatarurl} wrapped ui={false}   raised='True'/>
         <Card.Content>
           <Card.Header>{geet.username}</Card.Header>
           <Card.Meta>Latest Geet: {geet.date}</Card.Meta>
           <Card.Description>{geet.message}</Card.Description>
         </Card.Content>
       </Card>
     ))}
   </div>
  )
};

export default Geets;
