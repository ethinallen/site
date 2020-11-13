import React from 'react';
import { Card, Image } from 'semantic-ui-react';

function Post(props) {
  return (
    <Card>
      <Image src={props.imagepath} wrapped ui={false}   raised='True'/>
      <Card.Content>
        <Card.Header>{props.username}</Card.Header>
        <Card.Meta>Latest Geet: {props.date}</Card.Meta>
        <Card.Description>{props.geet}</Card.Description>
      </Card.Content>
    </Card>
  )
}


export default Post;
