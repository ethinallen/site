import React from 'react'
import { Card, Image } from 'semantic-ui-react';

function Geets({ geets }) {
  console.log(geets);

  return (
   <>
     {geets.map((geet) => (
       <Card>
         <Image src={geet.avatarurl} wrapped ui={false} />
         <Card.Content>
           <Card.Header>{geet.username}</Card.Header>
           <Card.Meta>Latest Geet: {geet.date}</Card.Meta>
           <Card.Description>{geet.message}</Card.Description>
         </Card.Content>
       </Card>
     ))}
   </>
  )
};

export default Geets;
