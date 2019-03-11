import React, { useState } from 'react';
import tinycolor from 'tinycolor2';

import Swatch from './swatch';

import './App.css';
import './swatch.css';

function App(props) {
  const [baseHex, setBaseHex] = useState("#fdfbf9");
  const [startSaturation, setStartSaturation] = useState(50);
  const [endSaturation, setEndSaturation] = useState(50);

  const values = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
  const saturationStep = (endSaturation - startSaturation) / values.length;

  return (
    <div className="App">
      <input
        className="hex-input"
        onChange={({target}) => {
          setStartSaturation(Math.floor(tinycolor(target.value).toHsl().s * 100));
          setEndSaturation(Math.floor(tinycolor(target.value).toHsl().s * 100));
          setBaseHex(target.value)}
        }
        type="text"
        value={baseHex}
      />

      <input
        className="hex-input"
        onChange={({target}) => {
          if (isNaN(parseInt(target.value), 10)) {
            setStartSaturation(0);
            return;
          }

          setStartSaturation(parseInt(target.value, 10));
        }}
        type="range"
        value={startSaturation}
      />

      <input
        className="hex-input"
        onChange={({target}) => {
          if (isNaN(parseInt(target.value), 10)) {
            setEndSaturation(0);
            return;
          }

          setEndSaturation(parseInt(target.value, 10));
        }}
        type="range"
        value={endSaturation}
      />

      <div className="swatches">
        {values.map((value, index) =>
          <Swatch
            key={value}
            hex={baseHex}
            saturation={Math.floor((startSaturation + (saturationStep * index)) * 100) / 100}
            value={value}
          />
        )}
      </div>
    </div>
  );
}

export default App;
