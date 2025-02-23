import React, { useState, useEffect } from "react";
import "../styles/AffiliateDashboard.css";
import SidebarNavigation from "../components/Navigation/AffiliateSideNavbar";
import GraphSection from "../components/GraphSection";
import PerformanceTable from "../components/AffiliateDashboard/PerformanceTable";
import PaymentHistory from "../components/AffiliateDashboard/PaymentHistory";
import ResourceCenter from "../components/AffiliateDashboard/ResourceCenter";
import UserGoals from "../components/AffiliateDashboard/UserGoals";
import ProductMarketplace from "./ProductMarketplace";
import MyProducts from "../components/AffiliateDashboard/MyProducts";
import ActiveLinks from "../components/AffiliateMarketplace/ActiveLinks";
import { useTheme } from '../context/ThemeContext';

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

interface Product {
  id: string;
  name: string;
  description: string;
  commission: number;
  price: number;
  category: string;
  image: string;
  conversionRate: number;
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
  const { isDarkMode } = useTheme();
  const user: User = mockUserData;
  const [activeSection, setActiveSection] = useState<string>('overview'); // Track active section

  // Mock offers data
  const offers: Offer[] = [
    { title: "50% Off All Electronics", description: "Limited time offer on select gadgets!" },
    { title: "Earn Double Points", description: "Get double points on all purchases this week!" },
    { title: "Free Shipping", description: "Enjoy free shipping on orders over $50!" },
  ];

  const [currentOfferIndex, setCurrentOfferIndex] = useState<number>(0);
  const [activeLinks, setActiveLinks] = useState<ActiveLink[]>([]);
  const [promotedProducts, setPromotedProducts] = useState<Product[]>([]);

  // Automatically rotate offers every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % offers.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [offers.length]);

  // Function to add products to "My Products"
  const addToMyProducts = (product: Product) => {
    setPromotedProducts((prevProducts) => {
      // Check if the product is already in the list
      if (!prevProducts.some((p) => p.id === product.id)) {
        return [...prevProducts, product];
      }
      return prevProducts;
    });
  };

  // Function to generate a tracking link
  const handleGenerateLink = (productId: string) => {
    // Check if a link for this product already exists
    const existingLink = activeLinks.find(link => link.productName === productId);
    if (existingLink) {
        console.log(`Link for product ID: ${productId} already exists.`);
        return; // Exit the function if a link already exists
    }

    const product = promotedProducts.find(p => p.id === productId);
    if (product) {
        const newLink: ActiveLink = {
            id: activeLinks.length + 1,
            productName: product.name,
            url: `https://example.com/product/${productId}`, // Example URL
            clicks: 0,
            conversions: 0,
            revenue: 0,
        };
        setActiveLinks([...activeLinks, newLink]);
    }
};

  return (
    <div className={`dashboard-layout ${isDarkMode ? 'dark' : ''}`}>
      <SidebarNavigation 
        activeSection={activeSection}
        onSectionChange={setActiveSection} // Update section on click
        user={user}
      />
      <main className="main-content" >
        {activeSection === 'marketplace' ? (
          <ProductMarketplace addToMyProducts={addToMyProducts} />
        ) : (
          <>
            <section className="user-greeting" id="overview-section">
              <h1>Welcome back, {user.name}</h1>
              <p>Here's your dashboard overview</p>
            </section>

            {/* Container for Total Earnings and Offers */}
            <div className="earnings-offers-container" >
              <div className="earnings-and-offers">
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
                            className={`pagination-dot ${currentOfferIndex === index ? "active" : ""}`}
                            onClick={() => setCurrentOfferIndex(index)}
                        ></span>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            {/* Dashboard Highlights/Metrics Section */}
            <div className="section-container">
              <h2 className="section-title">Metrics</h2>
              <div className="dashboard-highlights">
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
              </div>
            </div>

            {/* My Products */}
            <section>
              <MyProducts onGenerateLink={handleGenerateLink} products={promotedProducts} />
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
          </>
        )}

      </main>
    </div>
  );
};

export default AffiliateDashboard;
