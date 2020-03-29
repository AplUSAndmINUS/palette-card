import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import Card from './components/Card';
import Header from './components/Header';

const App = () => {
  const [color, setColor] = React.useState('');
  const [dispColor, setDispColor] = React.useState('#BCBCBC');
  const [validated, setValidate] = React.useState(false);

  const handleChange = ({ target }: any) => {
    setColor(target.value);
  };

  const handleClear = () => {
    setColor('');
    setDispColor('#BCBCBC');
  };

  const handleSubmit = () => {
    const regexp = /^[0-9A-F]+$/;
    if (color.length === 6) {
      if (regexp.test(color)) {
        setDispColor(`#${color.toString()}`);
        setValidate(true);
      }
    } else if (color.length === 7) {
      if (color.charAt(0) === '#') {
        if (regexp.test(color.substr(1, 7))) {
          setDispColor(color);
          setValidate(true);
        }
      }
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col sm={8}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Enter a color hex value</Form.Label>
                <Form.Control
                  defaultValue=""
                  id="colorTxt"
                  type="text"
                  maxLength={7}
                  name="colorTxt"
                  onChange={handleChange}
                  placeholder="000000"
                  value={color}
                ></Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col sm={8}>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>{' '}
            <Button
              variant="outline-secondary"
              type="reset"
              onClick={handleClear}
            >
              Clear
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card color={dispColor} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
