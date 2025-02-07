import React from 'react';
import Testimonials from '../components/Testimonials';
import '../styles/Home.css';
import HomeFeatures from '../components/HomeFeatures';
import HowItWorks from '../components/HowItWorks';
import {Link} from "react-router-dom";

const HomePage: React.FC = () => {
    const handleFeatureClick = () => {
        console.log('features clicked')
    }
    return (
        <div className="homepage">
            {/* Hero Section */}
            <section className="hero shadow-lg">
                <video
                    className="hero-video"
                    src="/Homepage Hero.mp4"
                    autoPlay
                    loop
                    muted
                    aria-label="Background video for homepage"
                />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Welcome to NEX AFFIL</h1>
                    <p>Connecting Businesses and Affiliates for Mutual Growth</p>
                    <Link to="/sign-up" className="cta-button">Join Now</Link>
                </div>
            </section>

            {/* How It Works Section */}
            <HowItWorks />

            {/* Features Section */}
            <HomeFeatures
                title="For Affiliates"
                subtitle="Empower Your Earnings"
                description="Join our community and maximize your revenue potential by promoting products."
                image="/Affiliate.jpg"
                onClick={handleFeatureClick}
            />


            {/* Testimonials Section */}
            <Testimonials />

            {/* Call to Action Section */}
            <section className="cta-section">
                <h2>Ready to Get Started?</h2>
                <p>Join thousands of businesses and affiliates already growing with Affili.</p>
                <button className="cta-button-2">Sign Up Now</button>
            </section>

        </div>

    );
};

export default HomePage;
