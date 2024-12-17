import React from "react";
import "../styles/AffiliateDashboard.css";
import SidebarNavigation from "../components/Navigation/SideNavbar";
import GraphSection from "../components/GraphSection";
import PerformanceTable from "../components/AffiliateDashboard/PerformanceTable";
import PaymentHistory from "../components/AffiliateDashboard/PaymentHistory";
import ResourceCenter from "../components/AffiliateDashboard/ResourceCenter";
import UserGoals from "../components/AffiliateDashboard/UserGoals";

// Import mock user data
import mockUserData from "../data/mockuserdata";

const AffiliateDashboard = () => {
  const user = mockUserData;

  return (
    <div className="dashboard-layout">
      {/* Sidebar Navigation */}
      <SidebarNavigation activeItem="overview" user={user} />

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

        {/* Payment History */}
        <PaymentHistory />

        {/* User Goals */}
        <UserGoals />

        {/* Resource Center */}
        <ResourceCenter />
      </main>
    </div>
  );
};

export default AffiliateDashboard;
