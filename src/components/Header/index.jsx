/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="page-padding">
      <div className="title-container">
        <div className="title">The Artifact</div>
        <div className="subtitle">
          <i>Culture & Art blog</i>
        </div>
      </div>
      <div className="navbar">
        <a href="#">Blog</a>
        <a href="#">About</a>
        <a href="#">Content</a>
      </div>
    </header>
  );
}

export default Header;
