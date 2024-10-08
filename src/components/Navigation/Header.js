import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import './Header.css';

const Header = () => {
  const hostpage = "/ielts-simulator";
  return (
  <header className="header">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul>
        <li><Link to="/ielts-simulator">Home</Link></li>
        {/* <li><Link to="/about">About</Link></li> */}
        <li><Link to= "/ielts-simulator/reading-practices">Reading Practices</Link></li>
        <li><Link to="/ielts-simulator/reading-tests">Reading Tests</Link></li>
      </ul>
    </nav>
  </header>
);
}

export default Header;
