import React from 'react';

interface Props {
  color: string;
}

const Card = (color: Props) => {
  const cardStyles = {
    height: '300px',
    width: '200px',
    padding: 0,
    margin: '35px 0',
    backgroundColor: '#FFF',
    boxShadow: '5px 5px 10px rgba(0,0,0,0.3)'
  };

  return <div style={cardStyles}> </div>;
};

export default Card;
