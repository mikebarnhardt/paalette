import React from 'react';
import pkg from '../package.json';

function Footer() {
  return (
    <footer>
      <p><a href="https://github.com/mikebarnhardt/paalette">{pkg.version}</a></p>
    </footer>
  );
}

export default Footer;
