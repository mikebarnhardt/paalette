import tinycolor from 'tinycolor2';

import clamp from './clamp';

function setSaturation(input, saturation) {
  const color = tinycolor(input).toHsl();
  color.s = clamp(saturation);
  return tinycolor(color);
}

export default setSaturation;
