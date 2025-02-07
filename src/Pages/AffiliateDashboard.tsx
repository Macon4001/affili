import React, { useState, useEffect } from "react";
import "../styles/AffiliateDashboard.css";
import SidebarNavigation from "../components/Navigation/SideNavbar";
import GraphSection from "../components/GraphSection";
import PerformanceTable from "../components/AffiliateDashboard/PerformanceTable";
import PaymentHistory from "../components/AffiliateDashboard/PaymentHistory";
import ResourceCenter from "../components/AffiliateDashboard/ResourceCenter";
import UserGoals from "../components/AffiliateDashboard/UserGoals";
import ProductMarketplace from "./ProductMarketplace";
import ActiveLinks from "../components/AffiliateMarketplace/ActiveLinks";

// Import mock user data
import mockUserData from "../data/mockuserdata";

// Define TypeScript interfaces
interface Offer {
  title: string;
  description: string;
}

interface ActiveLink {
  id: number;
  productName: string;
  url: string;
  clicks: number;
  conversions: number;
  revenue: number;
}

interface User {
  name: string;
  email: string;
  password?: string;
  profilePicture: string;
  totalEarnings: string;
  totalConversions: number;
  totalClicks: number;
  pendingPayouts: string;
}

const AffiliateDashboard: React.FC = () => {
  const user: User = mockUserData;

  // Mock offers data
  const offers: Offer[] = [
    { title: "50% Off All Electronics", description: "Limited time offer on select gadgets!" },
    { title: "Earn Double Points", description: "Get double points on all purchases this week!" },
    { title: "Free Shipping", description: "Enjoy free shipping on orders over $50!" },
  ];

  const [currentOfferIndex, setCurrentOfferIndex] = useState<number>(0);
  const [activeLinks, setActiveLinks] = useState<ActiveLink[]>([]);

  // Automatically rotate offers every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % offers.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [offers.length]);

  const handleGenerateLink = (productId: string) => {
    const newLink: ActiveLink = {
      id: activeLinks.length + 1,
      productName: `Product ${productId}`,
      url: `https://affiliate.example.com/product/${productId}?ref=12345`,
      clicks: 0,
      conversions: 0,
      revenue: 0,
    };

    setActiveLinks((prevLinks) => [...prevLinks, newLink]);
  };

  return (
      <div className="dashboard-layout">
        {/* Sidebar Navigation */}
        <SidebarNavigation activeItem="overview" user={user} />

        {/* Main Content */}
        <main className="main-content">
          {/* User Greeting */}
          <section className="user-greeting">
            <h1>Welcome back, {user.name}</h1>
            <p>Here's your dashboard overview</p>
          </section>

          {/* Total Earnings and Offers */}
          <div className="earnings-and-offers">
            {/* Total Earnings */}
            <section className="total-earnings-section">
              <div className="total-earnings-highlight">
                <h3>Total Earnings</h3>
                <p>{user.totalEarnings}</p>
              </div>
            </section>

            {/* Offers Slideshow */}
            <section className="offers-slideshow">
              <div className="offer-card"> 
                <img
                    src={`/Offers${currentOfferIndex + 1}.jpg`}
                    alt="Offer"
                    className="offer-image"
                />
                <div className="offer-content">
                  <h3>{offers[currentOfferIndex].title}</h3>
                  <p>{offers[currentOfferIndex].description}</p>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="slideshow-pagination">
                {offers.map((_, index) => (
                    <span
                        key={index}
                        className={`pagination-dot ${
                            currentOfferIndex === index ? "active" : ""
                        }`}
                        onClick={() => setCurrentOfferIndex(index)}
                    ></span>
                ))}
              </div>
            </section>
          </div>

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

          {/* Product Marketplace */}
          <section>
            <ProductMarketplace onGenerateLink={handleGenerateLink} />
          </section>

          {/* Active Links */}
          <section>
            <ActiveLinks links={activeLinks} />
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
