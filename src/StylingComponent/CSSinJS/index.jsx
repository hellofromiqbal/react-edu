import React from 'react';
import styled from 'styled-components';

const CSSinJS = () => {
  const Button = styled.button`
    border: 2px solid black;
    background-color: white;
    padding: 14px 20px;
    font-size: 16px;
    border-color: #2196f3;
    color: dodgerblue;

    &:hover {
      background-color: #2196f3;
      color: white;
    }
  `;

  return (
    <div>
      <Button>Mama mia!</Button>
    </div>
  )
};

export default CSSinJS;