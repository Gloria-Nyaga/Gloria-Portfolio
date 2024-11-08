import React from 'react';
import './index.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="logo">Gloria.</a>
      <div className="nav-links">
        <a href="/components/LandingPage" className="active">Home</a>
        <a href="/components/About">About</a>
        <a href="/components/Skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;