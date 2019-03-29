import React from 'react';
import pkg from '../package.json';

function Footer() {
  return (
    <footer>
      <p>
        <a
          href="https://github.com/mikebarnhardt/paalette"
          style={{
            borderBottom: '2px solid #78788c',
            color: 'lightcoral',
            fontSize: '0.8rem',
            textDecoration: 'none'
          }}
        >
          {pkg.version}
        </a>
      </p>
    </footer>
  );
}

export default Footer;
