import React, { useState } from "react";
import "../../styles/Navigation_styles/SideNavbar.css";
import Notifications from "../Notifications";

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

  const toggleSidebar = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  const toggleNotifications = () => {
    setNotificationsVisible((prev) => !prev);
  };

  return (
      <aside className={`sidebar ${sidebarCollapsed ? "collapsed" : ""}`}>
        {/* Sidebar Toggle */}
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          {sidebarCollapsed ? ">" : "<"}
        </div>

        {/* Sidebar Icons */}
        <div className="sidebar-icons">
          <img
              src={`${process.env.PUBLIC_URL}/Cog.png`}
              alt="Settings"
              className="icon cog-icon"
          />
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
                    <a href="#performance">Performance</a>
                  </li>
                  <li className={activeItem === "offers" ? "active" : ""}>
                    <a href="#offers">Offers</a>
                  </li>
                  <li className={activeItem === "earnings" ? "active" : ""}>
                    <a href="#earnings">Earnings</a>
                  </li>
                  <li className={activeItem === "marketplace" ? "active" : ""}>
                    <a href="#product-marketplace" className="nav-link">
                      <span>Marketplace</span>
                      <img src="/shop.png" alt="Shopping Cart" className="nav-icon" />
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
