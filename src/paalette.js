import React, { useReducer } from 'react';
import tinycolor from 'tinycolor2';

import Color from './color';
import Dispatch from './dispatch-context';
import Footer from './footer';
import Palette from './palette-context';
import paletteReducer from './palette-reducer';
import regenerateColor from './regenerate-color';
import SettingsBar from './settings-bar';
import StyledColors from './styled-colors';
import StyledGlobal from './styled-global';
import StyledPaalette from './styled-paalette';

function generateId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// Vanilla Theme
const initialState = ['#6a456a','#63d8f9','#b3dbff','#f9cdcf','#f39db7'];

// Mako Theme
// const initialState = ['#453e52','#2b4270','#1d514c'];

function init(initialState) {
  const state = {};
  const names = ['base', 'primary', 'secondary'];

  initialState.forEach((hex, index) => {
    const color = tinycolor(hex);
    const id = generateId();

    state[id] = {
      hue: color.toHsl().h,
      id,
      input: hex,
      lightness: color.toHsl().l,
      name: names[index],
      palette: regenerateColor(hex),
      saturation: color.toHsl().s,
      sort: ++index,
    };
  });

  return state;
}

function Paalette(props) {
  const [palette, dispatch] = useReducer(paletteReducer, initialState, init);

  return (
    <Dispatch.Provider value={dispatch}>
      <Palette.Provider value={palette}>
        <StyledPaalette>
          <StyledGlobal/>

          <SettingsBar/>

          <div style={{flex: 1}}>
            <StyledColors>
              {Object
                .keys(palette)
                .sort((a,b) => palette[a].sort > palette[b].sort)
                .map(id => <Color key={id} color={palette[id]}/>)
              }
            </StyledColors>
            <p style={{color: '#9999a8', fontSize: '0.8rem', margin: 0}}>
              <strong
                style={{
                  color: 'lightcoral'
                }}
              >
                Tip:
              </strong>
              {' Drag the sliders until red and orange borders disappear!'}
            </p>
          </div>


          <Footer/>
        </StyledPaalette>
      </Palette.Provider>
    </Dispatch.Provider>
  );
}

export default Paalette;
