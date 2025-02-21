import React, { useState, useEffect, useRef } from "react";
import "../../styles/Navigation_styles/AffiliateSideNavbar.css";
import Notifications from "../Notifications";
import { useTheme } from '../../context/ThemeContext';

// Define types for user object
interface User {
  profilePicture: string;
  name: string;
  email: string;
}

// Define the types for the component props
interface SidebarNavigationProps {
  activeItem: string;
  user: User;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ activeItem, user }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [notificationsVisible, setNotificationsVisible] = useState<boolean>(false);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  const toggleNotifications = () => {
    setNotificationsVisible((prev) => !prev);
  };

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const handleSignOut = () => {
    // Clear authentication tokens or session data
    localStorage.removeItem("authToken"); // Example: remove token from localStorage
    // Redirect to login page
    window.location.href = "/sign-in";
  };

  const handlePerformanceClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById('revenue-section');
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setDropdownVisible(false);
        }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
      <aside className={`sidebar ${sidebarCollapsed ? "collapsed" : ""} ${isDarkMode ? 'dark' : ''}`}>
        {/* Sidebar Toggle */}
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          {sidebarCollapsed ? ">" : "<"}
        </div>


        {/* Sidebar Icons */}
        <div className="sidebar-icons">
            {/* Logo */}
              <div className="logo-container">
              <img src={`${process.env.PUBLIC_URL}/2.png`} alt="Logo" className="logo" />
            </div>


          <img 
            src={isDarkMode ? "/Dark mode 2.png" : "/Light mode.png"}
            alt="Theme Toggle" 
            className="icon"
            onClick={toggleDarkMode}
          />
          <div className="dropdown-container" ref={dropdownRef}>
            <img
                src="/cog.png"
                alt="Settings"
                className="icon"
                onClick={toggleDropdown}
            />
            {dropdownVisible && (
                <div className="dropdown-menu">
                  <button onClick={handleSignOut}>Sign Out</button>
                </div>
            )}
          </div>
          <div className="notification-bell" onClick={toggleNotifications}>
            <img
                src={`${process.env.PUBLIC_URL}/Bell.png`}
                alt="Notifications"
                className="icon bell-icon"
            />
            <span className="notification-dot"></span>
          </div>

        </div>

        {/* Notifications Dropdown */}
        {notificationsVisible && (
            <div className="notifications-dropdown">
              <Notifications />
            </div>
        )}



        {!sidebarCollapsed && (
            <>
              {/* User Profile */}
              <div className="sidebar-header">
                <div className="user-profile">
                  <img
                      src={user.profilePicture}
                      alt="Profile"
                      className="profile-picture"
                  />
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="sidebar-nav">
                <ul>
                  <li className={activeItem === "overview" ? "active" : ""}>
                    <a href="#overview">Overview</a>
                  </li>
                  <li className={activeItem === "performance" ? "active" : ""}>
                    <a href="#performance" onClick={handlePerformanceClick}>Performance</a>
                  </li>
                  <li className={activeItem === "offers" ? "active" : ""}>
                    <a href="#offers">Offers</a>
                  </li>
                  <li className={activeItem === "earnings" ? "active" : ""}>
                    <a href="#earnings">Earnings</a>
                  </li>
                  <li className={activeItem === "marketplace" ? "active" : ""}>
                    <a href="#product-marketplace" className="nav-link" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
                        <span>Marketplace</span>
                        <img src="/shop.png" alt="Shopping Cart" className="nav-icon" style={{ width: '20px', height: '20px' }} />
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Footer */}
              <div className="sidebar-footer">
                <button className="upgrade-btn">Upgrade to Pro</button>
              </div>
            </>
        )}
      </aside>
  );
};

export default SidebarNavigation;
