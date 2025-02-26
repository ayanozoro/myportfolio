import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          Portfolio
        </a>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          
          <li className="nav-item">
            {/* <AnchorLink className='anchor-link' offset={50} href="#home"> */}
            <a href="#home" className="nav-links" onClick={closeMenu}>
              Home
            </a>
            {/* </AnchorLink> */}
          </li>
          
          <li className="nav-item">
            {/* <AnchorLink className='anchor-link' offset={50} href="#home"> */}
            <a href="#platform" className="nav-links" onClick={closeMenu}>
              Platform Use
            </a>
            {/* </AnchorLink> */}
          </li>

          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#skill" className="nav-links" onClick={closeMenu}>
              Skill
            </a>
          </li>
          <li className="nav-item">
            <a href="#project" className="nav-links" onClick={closeMenu}>
              Project
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
        <div className="nav-icon" onClick={toggleMenu}>
                <div className={isOpen ? "hamburger active" : "hamburger"}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
