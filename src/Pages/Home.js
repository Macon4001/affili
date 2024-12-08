import React from 'react';
import Testimonials from '../components/Testimonials';
import '../styles/Home.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero shadow-lg">
        {/* Video Background */}
        <video
          className="hero-video"
          src="/Homepage Hero.mp4"
          autoPlay
          loop
          muted
        />
        {/* Gradient Overlay */}
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Bloom</h1>
          <p>Connecting Businesses and Affiliates for Mutual Growth</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>
      {/* Features Section */}
      <section className="features shadow-md">
        <h2>Why Choose Affili?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>For Affiliates</h3>
            <p>Find opportunities to partner with businesses and grow your revenue.</p>
          </div>
          <div className="feature-card">
            <h3>For Businesses</h3>
            <p>Expand your reach by connecting with top-performing affiliates.</p>
          </div>
          <div className="feature-card">
            <h3>Analytics</h3>
            <p>Track your growth with our intuitive analytics tools.</p>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of businesses and affiliates already growing with Affili.</p>
        <button className="cta-button">Sign Up Now</button>
      </section>
    </div>
  );
};

export default HomePage;
