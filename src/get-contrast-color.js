import tinycolor from 'tinycolor2';

function isColorMax(color) {
  const {l} = color.toHsl();

  if (l <= 0 || l >= 1) {
    return true;
  }

  return false;
}

function adjustColor(original, ratio, method) {
  const color = original.clone();

  while (tinycolor.readability(original, color) < ratio) {
    if (tinycolor.readability(original, color) > ratio) {
      break;
    }

    color[method](1);

    if (isColorMax(color)) {
      break;
    }
  }

  return color;
}

function getContrastColor(color, ratio, method) {
  return adjustColor(color, ratio, method);
}

export default getContrastColor;
