import React from 'react';

const InlineCSS = () => {
  const thisComponentStyle = {
    backgroundColor: 'magenta',
    color: 'yellow'
  };
  return (
    <div style={thisComponentStyle}>
      <h1>Hello world</h1>
    </div>
  )
};

export default InlineCSS;