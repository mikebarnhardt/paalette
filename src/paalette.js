import React, { useState } from 'react';

import Color from './color';
import Footer from './footer';
import StyledColors from './styled-colors';
import StyledGlobal from './styled-global';
import StyledPaalette from './styled-paalette';

function Paalette(props) {
  const [colors, setColors] = useState(['#957595', '#33b1f9', '#537bd9', '#f39d97', '#d37d97']);

  function setColor(color, event) {
    const indexOfColor = colors.indexOf(color);
    const updatedColor = event.target.value;

    setColors([
      ...colors.slice(0, indexOfColor),
      updatedColor,
      ...colors.slice(indexOfColor + 1)
    ]);
  }

  return (
    <StyledPaalette>
      <StyledGlobal/>
      <StyledColors>
        {colors.map((color, index) => <Color key={index} color={color} setColor={setColor}/>)}
      </StyledColors>
      <Footer/>
    </StyledPaalette>
  );
}

export default Paalette;
