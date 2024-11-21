import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const navLinksRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navLinksRef.current && 
        !navLinksRef.current.contains(event.target) &&
        hamburgerRef.current && 
        !hamburgerRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    if (isMenuActive) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent scrolling when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuActive]);

  return (
    <nav className="navbar">
      <a href="/" className="logo">Gloria.</a>
      
      <div 
        ref={hamburgerRef}
        className={`hamburger ${isMenuActive ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      
      <div 
        ref={navLinksRef}
        className={`nav-links ${isMenuActive ? 'active' : ''}`}
      >
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          onClick={closeMenu}
        >
          About
        </NavLink>
        <NavLink 
          to="/skills" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          onClick={closeMenu}
        >
          Skills
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          onClick={closeMenu}
        >
          Projects
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          onClick={closeMenu}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;