import React from 'react';
import pkg from '../../package.json';

import '../styles/footer.css';

function Footer() {
  return (
    <footer>
      <p>
        <a
          href="https://github.com/mikebarnhardt/paalette"
          rel="noopener noreferrer"
          target="_blank"
        >
          {pkg.version}
        </a>
      </p>
    </footer>
  );
}

export default Footer;
