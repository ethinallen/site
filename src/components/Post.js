import React from 'react';
import Card from 'react-bootstrap/Card';
import './Life.css';


class Post extends React.Component {

  render() {
    return (
      <div className="CardContainer">
        <h1> Hello, {this.props.name} </h1>

        <Card>
          <Card.Img variant="top" src="https://misc-site-storage.s3.us-east-2.amazonaws.com/lake.jpeg"/>

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
    );
  }
}

export default Post;
