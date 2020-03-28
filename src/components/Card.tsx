import React from 'react';

import Label from './Label';
import Square from './Square';

interface Props {
  color: string;
}

const Card = ({ color }: Props) => {
  const cardStyles = {
    height: '275px',
    width: '200px',
    padding: 0,
    marginTop: '25px',
    backgroundColor: '#FFF',
    boxShadow: '5px 5px 10px rgba(0,0,0,0.3)'
  };

  return <div style={cardStyles}> 
    <Square color={color} />
    <Label color={color} />
  </div>;
};

export default Card;
