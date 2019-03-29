import {createGlobalStyle} from 'styled-components';

const StyledGlobal = createGlobalStyle`
  *,*::before,*::after {
    box-sizing: border-box;
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    font-size: 20px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }
`;

export default StyledGlobal;
