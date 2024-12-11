import React from 'react';
import '../styles/AffiliateDashboard.css';
import GraphSection from '../components/GraphSection';
import PerformanceTable from '../components/DataDashboard';


const AffiliateDashboard = () => {
  const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    profilePicture: '/profile.jpg.png',
    totalEarnings: '$12,340',
    totalConversions: 150,
    totalClicks: 3450,
    pendingPayouts: '$450',
  };

  const tableData = [
    { product: 'Product A', revenue: '$500', clicks: 150, conversions: 20 },
    { product: 'Product B', revenue: '$1200', clicks: 350, conversions: 50 },
    { product: 'Product C', revenue: '$800', clicks: 200, conversions: 35 },
    { product: 'Product D', revenue: '$400', clicks: 120, conversions: 15 },
  ];

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="user-profile">
          <img src={user.profilePicture} alt="Profile" className="profile-picture" />
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="active"><a href="#overview">Overview</a></li>
            <li><a href="#performance">Performance</a></li>
            <li><a href="#offers">Offers</a></li>
            <li><a href="#earnings">Earnings</a></li>
            <li><a href="#settings">Settings</a></li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <button className="upgrade-btn">Upgrade to Pro</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
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
            <h3>Conversions</h3>
            <p>{user.totalConversions}</p>
          </div>
          <div className="highlight-card">
            <h3>Total Clicks</h3>
            <p>{user.totalClicks}</p>
          </div>
          <div className="highlight-card">
            <h3>Pending Payouts</h3>
            <p>{user.pendingPayouts}</p>
          </div>
        </section>

        <GraphSection />
        
        <PerformanceTable />

      </main>
    </div>
  );
};

export default AffiliateDashboard;
