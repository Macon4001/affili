import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import '../../styles/Navigation_styles/Navbar.css';
import { useAffiliatePreload } from '../../hooks/PreLoading/AffiliateHomePreLoad';
import { useBusinessPreload } from '../../hooks/PreLoading/BusinessHomePreLoad';
import { useHomePreload } from '../../hooks/PreLoading/HomePreLoad';

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Initialize preload hooks
  useAffiliatePreload();
  useBusinessPreload();
  useHomePreload();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 0) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar shadow-md">
      {/* Left Section - Logo */}
      <div className="navbar-left">
        <NavLink to="/" className="logo">
          <img src="/4.png" alt="NexAffil Logo" className="logo-image" />
        </NavLink>
      </div>

      {/* Center Section - Navigation Links */}
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav active' : 'nav')}>
              Home
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink 
              to="/affiliates" 
              className={({ isActive }) => (isActive ? 'nav active' : 'nav')}
            >
              Affiliates
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/businesses" className={({ isActive }) => (isActive ? 'nav active' : 'nav')}>
              Businesses
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav active' : 'nav')}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Right Section - Dark Mode & Profile */}
      <div className="navbar-right">
        <button className="toggle-dark-mode" onClick={toggleDarkMode}>
          <img
            src={isDarkMode ? '/Dark mode 2.png' : '/Light mode.png'}
            alt={isDarkMode ? 'Light Mode' : 'Dark Mode'}
            className="w-4 h-4"
          />
        </button>

        <div
          className="profile-container"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <img src="/profile.jpg.png" alt="Profile" className="profile-photo" />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <NavLink to="/sign-in" className={({ isActive }) => isActive ? 'dropdown-item active' : 'dropdown-item'}>
                Sign In
              </NavLink>
              <NavLink to="/sign-up" className={({ isActive }) => isActive ? 'dropdown-item active' : 'dropdown-item'}>
                Sign Up
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
