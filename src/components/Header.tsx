import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Header = () => {
  return (
    <Jumbotron>
      <h1>Palette Card</h1>
      <p>
        This application takes a web hex value (#FFFFFF, e.g.), and displays the
        color as a palette card.
      </p>
    </Jumbotron>
  );
}

export default Header;