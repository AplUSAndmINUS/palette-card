import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import Card from './components/Card';
import Header from './components/Header';

const App = () => {
  const [color, setColor] = React.useState('#3844C3');
  
  return (
    <>
    <Header />
    <Container>
      <Row>
        <Col sm={8}>
          <Form>
            <Form.Group>
              <Form.Label>Enter a color hex value</Form.Label>
              <Form.Control
                type="text"
                name="colorTxt"
                placeholder="#000000"
                value={color}
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
          <Card color={color} />
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default App;
