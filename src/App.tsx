import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

import Card from './components/Card';

const App = () => {
  const [color, setColor] = React.useState('#000000');

  return (
    <>
      <Jumbotron>
        <h1>Palette Card</h1>
        <p>
          This application takes a web hex value (FFFFFF, e.g.), and displays
          the color as a palette card.
        </p>
      </Jumbotron>
      <Container>
        <Row>
          <Col sm={8}>
            <Form>
              <Form.Group>
                <Form.Label>Enter a color hex value</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="#000000, e.g."
                ></Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col sm={8}>
            <Button variant="primary" type="submit">
              Submit
            </Button>{' '}
            <Button variant="outline-secondary" type="reset">
              Clear
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card color="#000" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
