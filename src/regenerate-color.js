import tinycolor from 'tinycolor2';

import getContrastColor from './get-contrast-color';

function regenerateColor(color) {
  const input = tinycolor(color);

  const colors = {};
  // Base colors
  colors['100'] = tinycolor({h: input.toHsl().h, s: Math.ceil(input.toHsl().s * 100) / 100, l: Math.min(Math.ceil(90 + input.toHsl().l * 10), 98) / 100});
  colors['550'] = getContrastColor(colors['100'], 4.5, 'darken');
  colors['800'] = getContrastColor(colors['100'], 7, 'darken');

  // UI colors
  colors['400'] = getContrastColor(colors['100'], 3, 'darken');
  colors['250'] = getContrastColor(colors['550'], 3, 'lighten');
  colors['500'] = getContrastColor(colors['800'], 3, 'lighten');

  // Hover colors
  // colors['700'] = getContrastColor(colors['550'], 1.5, 'darken');
  colors['950'] = getContrastColor(colors['800'], 1.5, 'darken');

  return colors;
}

export default regenerateColor;
