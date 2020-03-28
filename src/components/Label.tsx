import React from 'react';

interface Props {
  color: string;
}

const Label = ({ color }: Props) => {
  const labelStyles = {
    fontFamily: 'monospace',
    fontSize: '22pt',
    padding: '15px',
    margin: 0
  };

  return <p style={labelStyles}>{color}</p>;
};

export default Label;
