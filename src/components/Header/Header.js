import React from 'react';
import logo from '../../logo.svg';
import './header.scss';
const Header = () => {
  return (
    <div className="header">
      <img src={logo} className="app-logo" alt="logo" />
    </div>
  )
}

export default Header;
