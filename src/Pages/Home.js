import React from 'react';
import Testimonials from '../components/Testimonials';
import HomeFeatures from '../components/HomeFeatues';
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
          <h1>Welcome to NEX AFFIL</h1>
          <p>Connecting Businesses and Affiliates for Mutual Growth</p>
          <button className="cta-button">Join Now</button>
        </div>
      </section>

      <HomeFeatures />

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
