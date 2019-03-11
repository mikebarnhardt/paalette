import React, {useState} from 'react';
import tinycolor from 'tinycolor2';

import easeOutQuad from './ease-out-quad';
import getContrastColor from './get-contrast-color';
import setSaturation from './set-saturation';
import StyledColor from './styled-color';
import Swatch from './swatch';

function Color(props) {
  const {
    color,
    setColor,
  } = props;

  const input = tinycolor(color);

  const [saturation, setSaturation] = useState(input.toHsl().s * 100);
  const [hue, setHue] = useState(input.toHsl().h);

  const colors = {};

  colors['base-light'] = tinycolor({...input.toHsl(), h: hue, s: saturation / 100, l: 96});
  colors['aa-light'] = getContrastColor(colors['base-light'], 'aa-light');
  colors['aaa-light'] = getContrastColor(colors['base-light'], 'aaa-light');
  colors['ui-light'] = getContrastColor(colors['base-light'], 'ui-light');
  colors['ui-hover-light'] = colors['ui-light'].clone().darken(4);
  colors['ui-aa-light'] = getContrastColor(colors['ui-hover-light'], 'ui-aa-light');

  colors['base-dark'] = colors['aaa-light'];
  colors['aa-dark'] = getContrastColor(colors['base-dark'], 'aa-dark');
  colors['aaa-dark'] = colors['base-light'];
  colors['ui-dark'] = getContrastColor(colors['base-dark'], 'ui-dark');
  colors['ui-hover-dark'] = colors['ui-dark'].clone().lighten(4);
  colors['ui-aa-dark'] = getContrastColor(colors['ui-hover-dark'], 'ui-aa-dark');

  const sortedColors = Object.keys(colors);
  sortedColors.sort((a,b) => {
    return colors[b].getLuminance() - colors[a].getLuminance();
  });

  const finalColors = [];
  sortedColors.forEach((key, index) => {
    const hex = colors[key].toHexString();

    if (!finalColors.includes(hex)) {
      finalColors.push(hex);
    }
  });

  return (
    <StyledColor>
      <input onChange={(event) => setColor(color, event)} type="text" value={color}/>
      <input onChange={({target}) => setSaturation(target.value)} type="range" value={saturation}/>
      <input max="360" min="0" onChange={({target}) => setHue(target.value)} type="range" value={hue}/>
      {finalColors.map(hex => <Swatch key={hex} color={hex} />)}
    </StyledColor>
  );
}

export default Color;
