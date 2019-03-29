import tinycolor from 'tinycolor2';

import getContrastColor from './get-contrast-color';

// I have no idea what this means.
const MAGIC_NUMBER = 0.183333333334;

function getAdjustmentFunction(color, reverse) {
  let isBright = color.getLuminance() > MAGIC_NUMBER;

  if (reverse) {
    isBright = !isBright;
  }

  if (isBright) {
    return 'darken';
  }

  return 'lighten';
}

function regenerateColor(color) {
  const input = tinycolor(color);
  const hsl = input.toHsl();
  const colors = {};

  colors['base'] = tinycolor(hsl);
  colors['base-ui'] = getContrastColor(colors['base'], 3, getAdjustmentFunction(input));
  colors['base-variant'] = colors['base'].clone()[getAdjustmentFunction(colors['base'], true)](10);

  colors['invert'] = getContrastColor(colors['base'], 4.5, getAdjustmentFunction(input));
  colors['invert-ui'] = getContrastColor(colors['invert'], 3, getAdjustmentFunction(colors['invert']));
  colors['invert-variant'] = colors['invert'].clone()[getAdjustmentFunction(colors['invert'], true)](10);

  colors['invert-contrast'] = getContrastColor(colors['base'], 7, getAdjustmentFunction(input));
  colors['invert-contrast-ui'] = getContrastColor(colors['invert-contrast'], 3, getAdjustmentFunction(colors['invert-contrast']));
  colors['invert-contrast-variant'] = colors['invert-contrast'].clone()[getAdjustmentFunction(colors['invert-contrast'], true)](10);

  return colors;
}

export default regenerateColor;
