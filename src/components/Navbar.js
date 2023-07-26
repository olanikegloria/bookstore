import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdAccountCircle } from 'react-icons/md';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderMobileMenu = () => {
    if (isOpen) {
      return (
        <div className="mobile-menu">
          <FontAwesomeIcon onClick={toggleMenu} className="close-button" icon={faTimes} />
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu} className="links-mobile">Home</Link>
            </li>
            <li>
              <Link to="/categories" onClick={toggleMenu} className="links-mobile">Categories</Link>
            </li>
          </ul>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="navbar">
      <h1>BookStore CMS</h1>
      <div className="navbar-menu">
        <ul>
          <li>
            <Link to="/" className="links-desktop">BOOKS</Link>
          </li>
          <li>
            <Link to="/categories" className="links-desktop">CATEGORIES</Link>
          </li>
        </ul>
      </div>
      <FontAwesomeIcon onClick={toggleMenu} icon={faBars} className="mobile-hamburger" />
      {renderMobileMenu()}
      <div className="profile-icon">
        <MdAccountCircle />
      </div>
    </div>
  );
};

export default NavBar;
