import React from 'react';
import './Life.css';
import Card from 'react-bootstrap/Card';

function Life() {
  return (
    <div className="CardContainer">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="testCard.jpeg"/>
        <Card.Title className="mb-2 text-muted">THE TITLE</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Subtitle Sample Text</Card.Subtitle>

        <Card.Body>
          <Card.Title>Sample Post</Card.Title>
          <Card.Text>
            This the sample text for the body of the card.
          </Card.Text>
        </Card.Body>
      </Card>

    </div>
  )
}

export default Life;
