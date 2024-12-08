import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
<nav className="navbar shadow-md">
    {/* Logo on the Left */}
    <div className="navbar-left">
      <a href="/" className="logo">
        <img 
          src="/4.png" 
          alt="NexAffil Logo" 
          className="logo-image"
        />
      </a>
    </div>

      {/* Navigation Links and Profile on the Right */}
      <div className="navbar-right">
        <ul className="nav-links">
          <li>
            <a href="/products">Affiliates</a>
          </li>
          <div className="divider"></div>
          <li>
            <a href="/about">Businesses</a>
          </li>
          <div className="divider"></div>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <div className="divider"></div>
        </ul>

        {/* Dark Mode Toggle Button */}
        <button
          className="toggle-dark-mode ml-4"
          onClick={toggleDarkMode}
        >
          <img
            src={isDarkMode ? '/Dark mode 2.png': '/Dark mode.png'}
            alt={isDarkMode ? 'Light Mode' : 'Dark Mode'}
            className="w-6 h-6"
          />
        </button>

        {/* Profile Photo with Dropdown */}
        <div
          className="profile-container"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <img src="/profile.jpg.png" alt="Profile" className="profile-photo" />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <a href="/sign-in" className="dropdown-item">
                Sign In
              </a>
              <a href="/sign-up" className="dropdown-item">
                Sign Up
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
