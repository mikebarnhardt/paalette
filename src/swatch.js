import React from 'react';
import tinycolor from 'tinycolor2';

import './swatch.css';

function isWhiteContrastOkay(color) {
  return tinycolor.readability('white', color) >= 7;
}

function isBlackContrastOkay(color) {
  return tinycolor.readability('black', color) >= 7;
}

function getAATextContrast(color1, color2, method) {
  const isReadable = tinycolor.readability(color1, color2) >= 4.5;

  if (isReadable) {
    return;
  }

  while(tinycolor.readability(color1, color2) < 4.5) {
    color2[method](1);
  }
}

function getAAUIContrast(color1, color2, method) {
  const isReadable = tinycolor.readability(color1, color2) >= 3;

  if (isReadable) {
    return;
  }

  while(tinycolor.readability(color1, color2) < 3) {
    color2[method](1);
  }
}

function getAAATextContrast(color1, color2, method) {
  const isReadable = tinycolor.readability(color1, color2) >= 7;

  if (isReadable) {
    return;
  }

  while(tinycolor.readability(color1, color2) < 7) {
    color2[method](1);
  }
}

function Swatch(props) {
  const {h,s} = tinycolor(props.hex).toHsl();
  const saturation = props.saturation > 100 ? 100 : props.saturation;
  console.log(saturation);
  const hex = tinycolor({
    h,
    s: isNaN(props.saturation) ? 0 : (props.saturation / 100),
    l: (1 - (props.value / 1000))
  });

  // if (props.value === '200') {
  //   getAAATextContrast('black', hex, 'lighten');
  // }
  //
  // if (props.value === '300') {
  //   getAATextContrast('black', hex, 'lighten');
  // }
  //
  // if (props.value === '400') {
  //   getAAUIContrast('black', hex, 'lighten');
  // }
  //
  // if (props.value === '600') {
  //   getAAATextContrast('white', hex, 'darken');
  // }

  let purpose;

  // switch (props.value) {
  //   case '400':
  //     purpose = 'AA UI on white';
  //     break;
  //   case '300':
  //     purpose = 'AA text on black';
  //     break;
  //   case '200':
  //     purpose = 'AAA text on black';
  //     break;
  //   case '600':
  //     purpose = 'AAA text on white';
  //     break;
  // }

  return (
    <div
      className="swatch"
      style={{
        alignItems: 'center',
        backgroundColor: hex.toHexString(),
        color: isWhiteContrastOkay(hex) ? 'white' : 'black',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {props.value}
    </div>
  );
}

export default Swatch;
