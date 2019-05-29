import React, {useState} from 'react';
import tinycolor from 'tinycolor2';

import Color from './color';
import Footer from './footer';
import Header from './header';

// Vanilla Theme
// const initialState = ['#6a456a','#63d8f9','#b3dbff','#f9cdcf','#f39db7'];

// Rem Theme
// const initialState = ['#211a21', '#4f43ae', '#b5b6e4'];

// Devour Theme
const initialState = ['#435', '#f35'];

function Paalette(props) {
  const [colors, setColors] = useState(initialState);

  function addColor(color) {
    if (!tinycolor(color).isValid()) {
      return;
    }

    setColors([...colors, color]);
  }

  function removeColor(color) {
    setColors([
      ...colors.slice(0, colors.indexOf(color)),
      ...colors.slice(colors.indexOf(color) + 1)
    ]);
  }

  return (
    <div className="o-layout is-flush is-full-height is-vertical">
      <Header addColor={addColor}/>

      <div className="o-layout is-flush is-horizontal@for-tablet-landscape-up o-layout-item is-expanded">
        {colors.map(color => (
          <Color key={color} color={color} removeColor={removeColor}/>
        ))}

        {!colors.length && (
          <p style={{margin: 'auto'}}>
            Add a color to get started!
          </p>
        )}
      </div>

      <Footer/>
    </div>
  );
}

export default Paalette;
