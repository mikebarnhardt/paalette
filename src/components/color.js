import React from 'react';
import tinycolor from 'tinycolor2';

function getColor(color1, color2, ratio, method) {
  const color = tinycolor(color1).clone();

  while(tinycolor.readability(color, color2) < ratio) {
    if (tinycolor.readability(color, color2) >= ratio) {
      break;
    }

    color[method](0.1);
  }

  return color;
}

function Color(props) {
  const {
    color,
    removeColor
  } = props;

  // Don't render if the color is invalid.
  if (!tinycolor(color).isValid()) {
    return null;
  }

  const swatches = {};

  const adjustedColor = tinycolor(color).clone();

  if (tinycolor.readability(adjustedColor, 'white') < 4.5) {
    while(tinycolor.readability(adjustedColor, 'white') < 4.5) {
      adjustedColor.darken(0.1);
    }
  } else {
    while(tinycolor.readability(adjustedColor, 'white') > 4.55) {
      adjustedColor.lighten(0.1);
    }
  }

  swatches['50'] = adjustedColor.toHexString();

  swatches['40'] = getColor(swatches['50'], swatches['50'], 1.35, 'lighten').toHexString();
  swatches['30'] = getColor(swatches['40'], swatches['40'], 1.35, 'lighten').toHexString();
  swatches['20'] = getColor(swatches['30'], swatches['30'], 1.35, 'lighten').toHexString();
  swatches['10'] = getColor(swatches['20'], swatches['20'], 1.35, 'lighten').toHexString();

  swatches['60'] = getColor(swatches['50'], swatches['50'], 1.35, 'darken').toHexString();
  swatches['70'] = getColor(swatches['60'], swatches['60'], 1.35, 'darken').toHexString();
  swatches['80'] = getColor(swatches['70'], swatches['70'], 1.35, 'darken').toHexString();
  swatches['90'] = getColor(swatches['80'], swatches['80'], 1.35, 'darken').toHexString();

  return (
    <div key={color} className="o-layout-item is-expanded">
      <div className="c-swatches">
        <button
          className="c-swatches-options"
          onClick={() => removeColor(color)}
        >
          &times;
        </button>

        {Object.keys(swatches).map(value => {
          let colorValue = value < 50 ? (parseInt(value, 10) + 50) : (parseInt(value, 10) - 50);

          return (
            <div
              key={value}
              className="c-swatch"
              style={{
                backgroundColor: swatches[value],
                color: !colorValue ? 'white' : swatches[colorValue]
              }}
            >
              {swatches[value]}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Color;
