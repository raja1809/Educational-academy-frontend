import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import job from '../../assets/shanka.png';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="header">
      <div className="header_left">
        <Link className='header_left' to="home" smooth={true} duration={500}>
          <img src={job} alt="Company Logo" />
        </Link>
      </div>

      <div className={`header_right ${showNav ? 'active' : ''}`}>
        <button className="nav-toggle" onClick={toggleNav}>
          <span><strong>☰</strong></span>
        </button>
        <Link to="home" smooth={true} duration={500}>
          <h4>Home</h4>
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <h4>About Us</h4>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <h4>Contact Us</h4>
        </Link>
      </div>
    </div>
  );
};

export default Header;
