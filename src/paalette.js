import React, { useState } from 'react';
import tinycolor from 'tinycolor2';

import Color from './color';
import Footer from './footer';
import regenerateColor from './regenerate-color';
import SettingsBar from './settings-bar';
import StyledColors from './styled-colors';
import StyledGlobal from './styled-global';
import StyledPaalette from './styled-paalette';

function Paalette(props) {
  const [theme, setTheme] = useState([
    {id: 1, color: tinycolor('#957595'), input: '#957595', palette: regenerateColor('#957595')},
    {id: 2, color: tinycolor('#33b1f9'), input: '#33b1f9', palette: regenerateColor('#33b1f9')},
    {id: 3, color: tinycolor('#537bd9'), input: '#537bd9', palette: regenerateColor('#537bd9')},
    {id: 4, color: tinycolor('#f39d97'), input: '#f39d97', palette: regenerateColor('#f39d97')},
    {id: 5, color: tinycolor('#d37d97'), input: '#d37d97', palette: regenerateColor('#d37d97')},
  ]);

  function setColor(id, event) {
    const color = event.target.value;
    const oldColor = theme.find(c => c.id === id);
    const index = theme.indexOf(
      oldColor
    );

    theme[index].color = tinycolor(color);
    theme[index].palette = regenerateColor(color);
    theme[index].input = color;

    setTheme([
      ...theme.slice(0, index),
      theme[index],
      ...theme.slice(index + 1)
    ]);
  }

  console.log(theme);

  return (
    <StyledPaalette>
      <StyledGlobal/>

      <SettingsBar/>

      <div style={{flex: 1}}>
        <StyledColors>
          {theme.map(({color, id, input, palette}) => <Color key={id} color={color} id={id} input={input} palette={palette} setColor={setColor}/>)}
        </StyledColors>
      </div>

      <Footer/>
    </StyledPaalette>
  );
}

export default Paalette;
