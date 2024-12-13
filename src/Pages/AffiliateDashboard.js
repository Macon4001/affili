import React, { useState, useEffect } from "react";
import "../styles/AffiliateDashboard.css";
import GraphSection from "../components/GraphSection";
import PerformanceTable from "../components/DataDashboard";
import Notifications from "../components/Notifications";

const AffiliateDashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false); // Sidebar toggle state
  const [notificationsVisible, setNotificationsVisible] = useState(false); // Notification dropdown toggle

  const toggleSidebar = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  const toggleNotifications = () => {
    setNotificationsVisible((prev) => !prev);
  };

  // Mock user data
  const user = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    profilePicture: "/profile.jpg.png",
    totalEarnings: "$12,340",
    totalConversions: 150,
    totalClicks: 3450,
    pendingPayouts: "$450",
  };

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarCollapsed ? "collapsed" : ""}`}>
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          {sidebarCollapsed ? ">" : "<"}
        </div>

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

        {notificationsVisible && (
          <div className="notifications-dropdown">
            <Notifications />
          </div>
        )}

        {!sidebarCollapsed && (
          <>
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

            <nav className="sidebar-nav">
              <ul>
                <li className="active">
                  <a href="#overview">Overview</a>
                </li>
                <li>
                  <a href="#performance">Performance</a>
                </li>
                <li>
                  <a href="#offers">Offers</a>
                </li>
                <li>
                  <a href="#earnings">Earnings</a>
                </li>
              </ul>
            </nav>

            <div className="sidebar-footer">
              <button className="upgrade-btn">Upgrade to Pro</button>
            </div>
          </>
        )}
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* User Greeting */}
        <section className="user-greeting">
          <h1>Welcome back, {user.name}!</h1>
          <p>Here’s your dashboard overview.</p>
        </section>

        {/* Total Earnings */}
        <section className="total-earnings-section">
          <div className="total-earnings-highlight">
            <h9>Total Earnings</h9>
            <div>
              <p6>{user.totalEarnings}</p6>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="dashboard-highlights">
          <div className="highlight-card">
            <h3 className="gradient-text">Conversions</h3>
            <p className="gradient-text">{user.totalConversions}</p>
          </div>
          <div className="highlight-card">
            <h3 className="gradient-text">Total Clicks</h3>
            <p className="gradient-text">{user.totalClicks}</p>
          </div>
          <div className="highlight-card">
            <h3 className="gradient-text">Pending Payouts</h3>
            <p className="gradient-text">{user.pendingPayouts}</p>
          </div>
        </section>

        {/* Graph Section */}
        <GraphSection />

        {/* Performance Table */}
        <PerformanceTable />
      </main>
    </div>
  );
};

export default AffiliateDashboard;
