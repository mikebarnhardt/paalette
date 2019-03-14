import React from 'react';

import StyledSettingsBar from './styled-settings-bar';
import StyledLabel from './styled-label';

function SettingsBar() {
  return (
    <StyledSettingsBar>
      <StyledLabel htmlFor="mode">
        <input id="mode" name="mode" type="checkbox"/>
        <span>Dark Mode</span>
      </StyledLabel>

      <StyledLabel htmlFor="contrast">
        <input id="contrast" name="contrast" type="checkbox"/>
        <span>High Contrast Mode</span>
      </StyledLabel>

      <button type="button">Export</button>
    </StyledSettingsBar>
  );
}

export default SettingsBar;
