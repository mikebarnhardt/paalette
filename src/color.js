import React, {useContext} from 'react';

import debounce from './debounce';
import Dispatch from './dispatch-context';
import StyledColor from './styled-color';
import StyledInput from './styled-input';
import Swatch from './swatch';

function Color(props) {
  const {
    color
  } = props;

  const dispatch = useContext(Dispatch);

  return (
    <StyledColor>
      <StyledInput
        value={color.input}
        type="text"
        onChange={event => debounce(dispatch({
          payload: {
            id: color.id,
            value: event.target.value,
          },
          type: 'update',
        }), 200)}
      />

      <input
        value={color.hue}
        max="359"
        min="0"
        style={{marginBottom: '0.5rem'}}
        type="range"
        onChange={event => debounce(dispatch({
          payload: {
            id: color.id,
            value: event.target.value,
          },
          type: 'hue'
        }), 200)}
      />

      <input
        value={color.saturation}
        max="1"
        min="0"
        step="0.005"
        style={{marginBottom: '0.5rem'}}
        type="range"
        onChange={event => debounce(dispatch({
          payload: {
            id: color.id,
            value: event.target.value,
          },
          type: 'saturation'
        }), 200)}
      />

      <input
        value={color.lightness}
        max="1"
        min="0"
        step="0.005"
        style={{marginBottom: '1rem'}}
        type="range"
        onChange={event => dispatch({
          payload: {
            id: color.id,
            value: event.target.value,
          },
          type: 'lightness'
        })}
      />

      <Swatch color={color} id="base" />
      <Swatch color={color} id="invert" />
      <Swatch color={color} id="invert-contrast" />
    </StyledColor>
  );
}

export default Color;
