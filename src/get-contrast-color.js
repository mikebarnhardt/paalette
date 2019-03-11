import tinycolor from 'tinycolor2';

const types = {
  'base-light': 1,
  'ui-light': 3,
  'aa-light': 4.5,
  'aaa-light': 7,
  'ui-aa-light': 4.5,
  'base-dark': 1,
  'ui-dark': 3,
  'aa-dark': 4.5,
  'aaa-dark': 7,
  'ui-aa-dark': 4.5,
};

function isColorMax(color) {
  const {l} = color.toHsl();

  if (l <= 0 || l >= 1) {
    return true;
  }

  return false;
}

function adjustColor(original, type, method) {
  const color = original.clone();

  while (tinycolor.readability(original, color) < types[type]) {
    if (isColorMax(color)) {
      break;
    }

    if (tinycolor.readability(original, color) > types[type]) {
      break;
    }

    color[method](1);
  }

  return color;
}

function getContrastColor(color, type) {
  switch(type) {
    case 'ui-light':
      return adjustColor(color, type, 'darken');
    case 'aa-light':
      return adjustColor(color, type, 'darken');
    case 'aaa-light':
      return adjustColor(color, type, 'darken');
    case 'ui-aa-light':
      return adjustColor(color, type, 'darken');

    case 'ui-dark':
      return adjustColor(color, type, 'lighten');
    case 'aa-dark':
      return adjustColor(color, type, 'lighten');
    case 'aaa-dark':
      return adjustColor(color, type, 'lighten');
    case 'ui-aa-dark':
      return adjustColor(color, type, 'darken');
    default:
      return color;
  }
}

export default getContrastColor;
