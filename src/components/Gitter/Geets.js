import React from 'react'
import { Card, Grid, Image } from 'semantic-ui-react';

function Geets({ geets }) {
  return (
    <>
     {geets.map((geet) => (
       <Grid.Row>
          <Grid.Column width={8}>
            <Card centered fluid>
              <Card.Content>
                <Image
                  floated='right'
                  size='small'
                  src={geet.avatarurl}
                />
                <Card.Header>{geet.username}</Card.Header>
                <Card.Meta>Latest Geet: {geet.date}</Card.Meta>
                <Card.Meta>Pushed to <a href={geet.repo_url} >{geet.repo_name}</a></Card.Meta>
                <Card.Description>
                  {geet.message}
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
     ))}
   </>
  )
};

export default Geets;
