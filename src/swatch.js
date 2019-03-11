import PropTypes from 'prop-types';
import React from 'react';

import getContrastColor from './get-contrast-color';
import StyledSwatch from './styled-swatch';

function Swatch(props) {
  const {
    color,
  } = props;

  return (
    <StyledSwatch color={color}>
      {color}
    </StyledSwatch>
  );
}

export default Swatch;
