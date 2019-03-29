import tinycolor from 'tinycolor2';

import regenerateColor from './regenerate-color';

function paletteReducer(state, action) {
  switch(action.type) {
    case 'hue':
      const hslHue = tinycolor({
        h: state[action.payload.id].hue,
        s: state[action.payload.id].saturation,
        l: state[action.payload.id].lightness,
      }).toHsl();

      hslHue.h = action.payload.value;
      const hue = tinycolor(hslHue);

      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          input: tinycolor(hue).toHexString(),
          hue: tinycolor(hue).toHsl().h,
          palette: regenerateColor(tinycolor(hue)),
        },
      }
    case 'lightness':
      const hslLightness = tinycolor({
        h: state[action.payload.id].hue,
        s: state[action.payload.id].saturation,
        l: state[action.payload.id].lightness,
      }).toHsl();

      hslLightness.l = action.payload.value;
      const lightness = tinycolor(hslLightness);

      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          input: tinycolor(lightness).toHexString(),
          lightness: tinycolor(lightness).toHsl().l,
          palette: regenerateColor(tinycolor(lightness)),
        },
      }
    case 'saturation':
      const hslSaturation = tinycolor({
        h: state[action.payload.id].hue,
        s: state[action.payload.id].saturation,
        l: state[action.payload.id].lightness,
      }).toHsl();

      hslSaturation.s = action.payload.value;
      const saturation = tinycolor(hslSaturation);

      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          input: tinycolor(saturation).toHexString(),
          saturation: tinycolor(saturation).toHsl().s,
          palette: regenerateColor(tinycolor(saturation)),
        },
      }
    case 'update':
      const color = tinycolor(action.payload.value);

      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          hue: color.toHsl().h,
          input: action.payload.value,
          lightness: color.toHsl().l,
          palette: regenerateColor(action.payload.value),
          saturation: color.toHsl().s,
        },
      }
    default:
      return state;
  }
}

export default paletteReducer;
