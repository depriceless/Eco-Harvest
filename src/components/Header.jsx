import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu on link click (mobile)
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="main-header">
      <div className="container">
        <div className="header-logo">
          <a href="/">
            <img src={logo} alt="Eco Harvest Logo" className="logo-img" />
          </a>
        </div>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <NavLink
            to="/"
            onClick={handleLinkClick}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={handleLinkClick}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            About Us
          </NavLink>
          <NavLink
            to="/products"
            onClick={handleLinkClick}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Products
          </NavLink>
          <NavLink
            to="/testimonial"
            onClick={handleLinkClick}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Testimonial
          </NavLink>
          <NavLink
            to="/contact"
            onClick={handleLinkClick}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Contact Us
          </NavLink>
        </nav>

        <div className="header-action">
          <button className="call-btn">Request Call</button>
        </div>

        {/* Hamburger button */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          type="button"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
