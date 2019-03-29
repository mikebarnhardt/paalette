/* global document */

import React, {useContext} from 'react';

import Palette from './palette-context';
import StyledButton from './styled-button';
import StyledSettingsBar from './styled-settings-bar';

function download(colors) {
  let out = {};

  Object.keys(colors)
    .sort((a,b) => colors[a].sort > colors[b].sort)
    .forEach(color => {
      Object.keys(colors[color].palette).forEach(paletteColor => {
        const key = `${colors[color].name}-${paletteColor}`;
        out[key] = colors[color].palette[paletteColor].toHexString();
      });
    });

  const link = document.createElement('a');
  link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(out)));
  link.setAttribute('download', 'paalette.json');

  link.style.display = 'none';
  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
}

function SettingsBar() {
  const colors = useContext(Palette);

  return (
    <StyledSettingsBar>
      <strong style={{color: 'lightcoral'}}>Paalette</strong>

      <StyledButton
        type="button"
        onClick={() => download(colors)}
      >
        Export
      </StyledButton>
    </StyledSettingsBar>
  );
}

export default SettingsBar;
