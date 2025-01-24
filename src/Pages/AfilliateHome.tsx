import React from "react";
import { Link } from "react-router-dom";
import "../styles/AffiliateHome.css";
import Testimonials from "../components/Testimonials";

const AffiliateHome: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="affiliate-home__hero">
                {/* Background Video */}
                <video
                    className="affiliate-home__hero-video"
                    src="/workspace.mp4" // Ensure the video file is in the public folder
                    autoPlay
                    loop
                    muted
                    aria-label="Background video for affiliates page"
                />
                {/* Overlay for Dimming */}
                <div className="affiliate-home__hero-overlay"></div>
                {/* Content Overlay */}
                <div className="affiliate-home__hero-container">
                    <div className="affiliate-home__hero-content">
                        <h1 className="affiliate-home__hero-title">PARTNER WITH US GROW TOGETHER</h1>
                        <p className="affiliate-home__hero-description">
                            Discover a world-class affiliate program designed to help you
                            maximize your earnings while promoting top-tier products and
                            services. Join our trusted network today.
                        </p>
                        <div className="affiliate-home__cta-buttons">
                            <Link to="/affiliates" className="affiliate-home__btn affiliate-home__btn--primary">
                                Learn More
                            </Link>
                            <Link to="/signup" className="affiliate-home__btn affiliate-home__btn--secondary">
                                Join Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* About the Company */}
            <section className="affiliate-home__about wave-divider">
                <div className="affiliate-home__about-content">
                    <h2 className="affiliate-home__about-title">About Us</h2>
                    <p className="affiliate-home__about-description">
                        At <strong>Affiliate Platform</strong>, we’re committed to building
                        long-lasting partnerships with our affiliates. We empower you with
                        the tools, training, and resources needed to succeed. Our mission
                        is to bridge the gap between businesses and affiliates, creating
                        win-win opportunities that drive growth and innovation.
                    </p>
                    <p className="affiliate-home__about-description">
                        With decades of industry experience and a passion for success, we
                        prioritize transparency, reliability, and shared growth for
                        everyone in our network.
                    </p>
                    <button className="affiliate-home__btn affiliate-home__btn--primary mt-10">
                        Learn More
                    </button>
                </div>
                <div className="affiliate-home__about-image-wrapper">
                    <div className="affiliate-home__about-image">
                        <img
                            src="/workspace.jpg"
                            alt="Affiliate Platform Office"
                            className="affiliate-home__about-img"
                        />
                    </div>
                </div>
            </section>


            {/* Why Choose Us */}
            <section className="affiliate-home__overview">
                <h2 className="affiliate-home__overview-title">Why Join Our Affiliate Program?</h2>
                    <div className="affiliate-home__reasons-grid">
                        <div className="affiliate-home__reason">
                            <img
                                src="/competitive-commissions.png"
                                alt="Competitive Commissions"
                                className="affiliate-home__reason-img"
                            />
                            <h3 className="affiliate-home__reason-title">Competitive Commissions</h3>
                            <p className="affiliate-home__reason-description">
                                Enjoy some of the highest commissions in the industry, with
                                flexible structures tailored to your success.
                            </p>
                        </div>
                        <div className="affiliate-home__reason">
                            <img
                                src="/product-diversity.png"
                                alt="Diverse Product Range"
                                className="affiliate-home__reason-img"
                            />
                            <h3 className="affiliate-home__reason-title">Diverse Product Range</h3>
                            <p className="affiliate-home__reason-description">
                                Promote top-tier products and services across multiple
                                categories that resonate with your audience.
                            </p>
                        </div>
                        <div className="affiliate-home__reason">
                            <img
                                src="/tools-and-resources.png"
                                alt="Affiliate Tools"
                                className="affiliate-home__reason-img"
                            />
                            <h3 className="affiliate-home__reason-title">State-of-the-Art Tools</h3>
                            <p className="affiliate-home__reason-description">
                                Access cutting-edge tracking tools, marketing materials, and
                                analytics to optimize your campaigns effectively.
                            </p>
                        </div>
                        <div className="affiliate-home__reason">
                            <img
                                src="/flexible-payout.png"
                                alt="Flexible Payouts"
                                className="affiliate-home__reason-img"
                            />
                            <h3 className="affiliate-home__reason-title">Flexible Payout Options</h3>
                            <p className="affiliate-home__reason-description">
                                Choose from multiple payout options that suit your preferences,
                                including direct bank transfers and PayPal.
                            </p>
                        </div>
                    </div>
            </section>

            {/* Testimonials */}
            <Testimonials/>

            {/* Call to Action */}
            <section className="affiliate-home__cta">
                    <div className="affiliate-home__cta-content">
                        <h2 className="affiliate-home__cta-title">Ready to Take the Next Step?</h2>
                        <p className="affiliate-home__cta-description">
                            Sign up today and start earning competitive commissions while
                            driving value for top brands.
                        </p>
                        <Link to="/signup"
                              className="affiliate-home__btn affiliate-home__btn--primary affiliate-home__btn--large">
                            Get Started
                        </Link>
                    </div>
                    <div className="affiliate-home__cta-image">
                        <img
                            src="/cta-image.jpg"
                            alt="Get Started"
                            className="affiliate-home__cta-img"
                        />
                    </div>
            </section>
        </div>
    );
};

export default AffiliateHome;
