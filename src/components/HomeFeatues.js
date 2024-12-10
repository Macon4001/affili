import React from 'react';
import HomeFeaturesCard from './HomeFeaturesCard';
import '../styles/HomeFeatures.css';

const HomeFeatures = () => {
  return (
    <section className="features shadow-md">
      <h2>Why Choose Affili?</h2>
      <div className="features-grid">
        {/* Each card has a unique image */}
        <HomeFeaturesCard
          title="For Affiliates"
          subtitle="Empower Your Earnings"
          description="Join our community of affiliates 
                       and unlock opportunities to partner with
                       leading businesses. Maximize your revenue
                       potential by promoting brands you believe in. 
                       With intuitive analytics and personalized support, 
                       your success is our mission."
          image="/Affiliate.jpg" // Path for Affiliates image
          onClick={() => (window.location.href = '/affiliates')} // Navigate to Affiliates page
        />
        <HomeFeaturesCard
          title="For Businesses"
          subtitle="Expand Your Reach"
          description="Take your business to new heights by
                       connecting with top-performing affiliates. Tap into a global network,
                       boost your brand visibility, and drive conversions with tailored affiliate 
                       partnerships that work for your goals."
          image="/Business.jpg" // Path for Businesses image
          onClick={() => (window.location.href = '/businesses')} // Navigate to Businesses page
        />
        <HomeFeaturesCard
          title="Analytics"
          subtitle="Insights that Inspire Growth"
          description="Harness the power of data with our advanced analytics tools.
                       Track your performance, identify trends, and make data-driven 
                       decisions to optimize your campaigns. Gain actionable insights 
                       that put you ahead of the competition."
          image="/Analytics.jpg" // Path for Analytics image
          onClick={() => (window.location.href = '/analytics')} // Navigate to Analytics page
        />
      </div>
    </section>
  );
};

export default HomeFeatures;
