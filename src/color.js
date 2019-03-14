import React, {useState} from 'react';
import tinycolor from 'tinycolor2';

import easeOutQuad from './ease-out-quad';
import getContrastColor from './get-contrast-color';
import setSaturation from './set-saturation';
import StyledColor from './styled-color';
import Swatch from './swatch';

function Color(props) {
  const {
    color,
    id,
    input,
    palette,
    setColor,
  } = props;

  const [lightness, setLightness] = useState(palette['100'].toHsl().l);
  const [saturation, setSaturation] = useState(palette['100'].toHsl().s);
  const [hue, setHue] = useState(palette['100'].toHsl().h);

  const minimum = (1 - palette['800'].toHsl().l) * 100;

  const sortedColors = Object.keys(palette);
  sortedColors.sort((a,b) => {
    return palette[b].getLuminance() - palette[a].getLuminance();
  });

  return (
    <StyledColor>
      <input onChange={(event) => setColor(id, event)} type="text" value={input}/>
      <input min={minimum} onChange={({target}) => setLightness(Math.ceil(target.value))} type="range" value={lightness}/>
      <input onChange={({target}) => setSaturation(Math.ceil(target.value))} type="range" value={saturation}/>
      <input max="360" min="0" onChange={({target}) => setHue(Math.ceil(target.value))} type="range" value={hue}/>

      {sortedColors.map(key => <Swatch key={key} backgroundColor={palette[key].toHexString()} color={key > 500 ? palette['100'].toHexString() : palette['800'].toHexString()} description={key === '800' ? '700/800' : key} />)}

      <div
        style={{
          backgroundColor: palette['550'],
          color: palette['100'],
          padding: '1rem',
        }}
      >
        <button
          style={{
            alignItems: 'center',
            backgroundColor: 'transparent',
            border: `0.125rem solid ${palette['250']}`,
            borderRadius: '0.25rem',
            color: palette['100'],
            display: 'inline-flex',
            font: 'inherit',
            justifyContent: 'center',
            marginBottom: '0.5rem',
            padding: '0.5rem 1rem',
            width: '100%',
          }}
          type="button"
        >
          <i
            style={{
              color: palette['250'],
              font: 'inherit',
              fontSize: '1.25rem',
              fontStyle: 'normal',
              marginRight: '0.25rem',
              position: 'relative',
              top: '-0.125rem',
            }}
          >
            &times;
          </i>
          AA Button Hollow
        </button>

        <button
          style={{
            alignItems: 'center',
            backgroundColor: palette['100'],
            border: `0.125rem solid ${palette['100']}`,
            borderRadius: '0.25rem',
            color: palette['550'],
            display: 'inline-flex',
            font: 'inherit',
            justifyContent: 'center',
            marginBottom: '0.5rem',
            padding: '0.5rem 1rem',
            width: '100%',
          }}
          type="button"
        >
          <i
            style={{
              color: palette['400'],
              font: 'inherit',
              fontSize: '1.25rem',
              fontStyle: 'normal',
              marginRight: '0.25rem',
              position: 'relative',
              top: '-0.125rem',
            }}
          >
            &times;
          </i>
          AA Button Solid
        </button>
      </div>

      <div
        style={{
          backgroundColor: palette['800'],
          color: palette['100'],
          padding: '1rem',
        }}
      >
        <button
          style={{
            alignItems: 'center',
            backgroundColor: 'transparent',
            border: `0.125rem solid ${palette['500']}`,
            borderRadius: '0.25rem',
            color: palette['100'],
            display: 'inline-flex',
            font: 'inherit',
            justifyContent: 'center',
            marginBottom: '0.5rem',
            padding: '0.5rem 1rem',
            width: '100%',
          }}
          type="button"
        >
          <i
            style={{
              color: palette['500'],
              font: 'inherit',
              fontSize: '1.25rem',
              fontStyle: 'normal',
              marginRight: '0.25rem',
              position: 'relative',
              top: '-0.125rem',
            }}
          >
            &times;
          </i>
          AAA Button Hollow
        </button>

        <button
          style={{
            alignItems: 'center',
            backgroundColor: palette['100'],
            border: `0.125rem solid ${palette['100']}`,
            borderRadius: '0.25rem',
            color: palette['800'],
            display: 'inline-flex',
            font: 'inherit',
            justifyContent: 'center',
            marginBottom: '0.5rem',
            padding: '0.5rem 1rem',
            width: '100%',
          }}
          type="button"
        >
          <i
            style={{
              color: palette['400'],
              font: 'inherit',
              fontSize: '1.25rem',
              fontStyle: 'normal',
              marginRight: '0.25rem',
              position: 'relative',
              top: '-0.125rem',
            }}
          >
            &times;
          </i>
          AAA Button Solid
        </button>
      </div>
      <div
        style={{
          backgroundColor: palette['100'],
          color: palette['550'],
          padding: '1rem',
        }}
      >
        <button
          style={{
            alignItems: 'center',
            backgroundColor: 'transparent',
            border: `0.125rem solid ${palette['400']}`,
            borderRadius: '0.25rem',
            color: palette['550'],
            display: 'inline-flex',
            font: 'inherit',
            justifyContent: 'center',
            marginBottom: '0.5rem',
            padding: '0.5rem 1rem',
            width: '100%',
          }}
          type="button"
        >
          <i
            style={{
              color: palette['400'],
              font: 'inherit',
              fontSize: '1.25rem',
              fontStyle: 'normal',
              marginRight: '0.25rem',
              position: 'relative',
              top: '-0.125rem',
            }}
          >
            &times;
          </i>
          AA Button Hollow
        </button>

        <button
          style={{
            alignItems: 'center',
            backgroundColor: palette['550'],
            border: `0.125rem solid ${palette['550']}`,
            borderRadius: '0.25rem',
            color: palette['100'],
            display: 'inline-flex',
            font: 'inherit',
            justifyContent: 'center',
            marginBottom: '0.5rem',
            padding: '0.5rem 1rem',
            width: '100%',
          }}
          type="button"
        >
          <i
            style={{
              color: palette['250'],
              font: 'inherit',
              fontSize: '1.25rem',
              fontStyle: 'normal',
              marginRight: '0.25rem',
              position: 'relative',
              top: '-0.125rem',
            }}
          >
            &times;
          </i>
          AA Button Solid
        </button>

        <button
          style={{
            alignItems: 'center',
            backgroundColor: 'transparent',
            border: `0.125rem solid ${palette['400']}`,
            borderRadius: '0.25rem',
            color: palette['800'],
            display: 'inline-flex',
            font: 'inherit',
            justifyContent: 'center',
            marginBottom: '0.5rem',
            padding: '0.5rem 1rem',
            width: '100%',
          }}
          type="button"
        >
          <i
            style={{
              color: palette['400'],
              font: 'inherit',
              fontSize: '1.25rem',
              fontStyle: 'normal',
              marginRight: '0.25rem',
              position: 'relative',
              top: '-0.125rem',
            }}
          >
            &times;
          </i>
          AAA Button Hollow
        </button>

        <button
          style={{
            alignItems: 'center',
            backgroundColor: palette['800'],
            border: `0.125rem solid ${palette['800']}`,
            borderRadius: '0.25rem',
            color: palette['100'],
            display: 'inline-flex',
            font: 'inherit',
            justifyContent: 'center',
            marginBottom: '0.5rem',
            padding: '0.5rem 1rem',
            width: '100%',
          }}
          type="button"
        >
          <i
            style={{
              color: palette['500'],
              font: 'inherit',
              fontSize: '1.25rem',
              fontStyle: 'normal',
              marginRight: '0.25rem',
              position: 'relative',
              top: '-0.125rem',
            }}
          >
            &times;
          </i>
          AAA Button Solid
        </button>
      </div>
    </StyledColor>
  );
}

export default Color;
