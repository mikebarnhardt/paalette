import PropTypes from 'prop-types';
import React from 'react';

import getContrastColor from './get-contrast-color';
import StyledSwatch from './styled-swatch';

function Swatch(props) {
  const {
    backgroundColor,
    color,
    description,
  } = props;

  return (
    <StyledSwatch backgroundColor={backgroundColor} color={color}>
      {description}: {backgroundColor}
    </StyledSwatch>
  );
}

export default Swatch;
