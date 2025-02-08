import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Navigation_styles/Navbar.css';

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50); // Change to scrolled state after 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      {/* Logo on the Left */}
      <div className="navbar-left">
        <NavLink to="/" className="logo">
          <img src="/4.png" alt="NexAffil Logo" className="logo-image" />
        </NavLink>
      </div>

      {/* Navigation Links in Center */}
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav active' : 'nav')}>
              Home
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/affiliates" className={({ isActive }) => (isActive ? 'nav active' : 'nav')}>
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

      {/* Dark Mode Toggle and Profile on Right */}
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
