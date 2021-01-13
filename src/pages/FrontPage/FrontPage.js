import React from 'react';
import { Link } from 'react-router-dom';
import './frontpage.scss';
const FrontPage = () => {
  return (
    <div className="frontpage">
      <Link to="/boards">
        <span>Shop Boards Now</span>
      </Link>
      <Link to="/drag">
        <span style={{margin: "40px"}}>Drag</span>
      </Link>
    </div>
  )
}

export default FrontPage;
