import React from 'react';
import tinycolor from 'tinycolor2';

import StyledSwatch from './styled-swatch';

const MAGIC_NUMBER = 0.183333333334;

function getMaxColor(color) {
  return color.getLuminance() > MAGIC_NUMBER ? 'white' : 'black';
}

function Swatch(props) {
  const {
    color,
    id,
  } = props;

  const backgroundColor = color.palette[id];
  const textColor = id === 'base' ? color.palette['invert-contrast'] : color.palette['base'];
  let isReadable = true;
  let isUiReadable = true;
  let isVariantEqual = true;
  let isVariantMax = false;
  let description = "";

  if (id === "base") {
    isUiReadable = tinycolor.isReadable(color.palette['base'], color.palette['base-ui'], {level: 'AA', size: 'large'});
    isVariantEqual = tinycolor.readability(color.palette['base'], color.palette['base-variant']) === 1;
    isVariantMax = tinycolor.readability(getMaxColor(color.palette['base-variant']), color.palette['base-variant']) === 1;
  }

  if(id === "invert") {
    description = "AA";
    isReadable = tinycolor.isReadable(color.palette['base'], color.palette['invert'], {level: 'AA', size: 'small'});
    isUiReadable = tinycolor.isReadable(color.palette['invert'], color.palette['invert-ui'], {level: 'AA', size: 'large'});
    isVariantEqual = tinycolor.readability(color.palette['invert'], color.palette['invert-variant']) === 1;
    isVariantMax = tinycolor.readability(getMaxColor(color.palette['invert-variant']), color.palette['invert-variant']) === 1;
  }

  if(id === "invert-contrast") {
    description = "AAA";
    isReadable = tinycolor.isReadable(color.palette['base'], color.palette['invert-contrast'], {level: 'AAA', size: 'small'});
    isUiReadable = tinycolor.isReadable(color.palette['invert-contrast'], color.palette['invert-contrast-ui'], {level: 'AA', size: 'large'});
    isVariantEqual = tinycolor.readability(color.palette['invert-contrast'], color.palette['invert-contrast-variant']) === 1;
    isVariantMax = tinycolor.readability(getMaxColor(color.palette['invert-contrast-variant']), color.palette['invert-contrast-variant']) === 1;
  }

  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <StyledSwatch size="small" style={{backgroundColor: color.palette[`${id}-variant`], color: textColor}} hasError={isVariantEqual} hasWarning={isVariantMax}/>
      <StyledSwatch style={{backgroundColor: backgroundColor, color: textColor}} hasError={!isReadable}>
        {description}
      </StyledSwatch>
      <StyledSwatch size="small" style={{backgroundColor: color.palette[`${id}-ui`], color: color.palette[id]}} hasError={!isUiReadable}>
        UI
      </StyledSwatch>
    </div>
  );
}

export default Swatch;
