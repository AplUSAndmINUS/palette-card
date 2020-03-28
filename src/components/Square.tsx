import React from 'react';

interface Props {
  color: string;
}

const Square = ({ color }: Props) => {
  const squareStyles = {
    height: '200px',
    backgroundColor: color
  };

  return <div style={squareStyles}> </div>;
};

export default Square;
