import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import './header.scss';
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="app-logo" alt="logo" />
      </Link>
    </div>
  )
}

export default Header;
