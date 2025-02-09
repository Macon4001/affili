import React from "react";
import { motion } from "framer-motion";
import "../styles/BusinessHome.css";
import {Link} from "react-router-dom";

const BusinessHome: React.FC = () => {
    return (
        <div className="business-page-business">
            {/* Hero Section */}
            <section className="hero-section-business">
                <img 
                    src="/hero-image.jpg" 
                    alt="Hero Background" 
                    className="hero-image-business"
                />
                <motion.div
                    className="hero-content-business"
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                >
                    <h1 className="hero-title-business">Looking to Increase Sales?</h1>
                    <Link to="/signup" className="affiliate-home__btn affiliate-home__btn--secondary">
                        Join Now
                    </Link>
                </motion.div>
            </section>

            <section className="marketing-section-business">
                <h2 className="marketing-title-business">How Affiliate Marketing Can Boost Your Business</h2>
                <p className="marketing-description-business">
                    Discover how affiliate marketing can be a game-changer for your business by driving sales and
                    reducing costs.
                </p>
                <div className="marketing-grid-business">
                    <div className="marketing-item-business">
                        <img src="/sales-growth.jpg" alt="Increase Sales" className="marketing-image-business"/>
                        <div className="marketing-overlay-business">
                            <h3>Increase Sales</h3>
                            <p>Expand your reach with affiliate marketers who promote your products to their audiences,
                                driving higher sales volumes.</p>
                        </div>
                    </div>
                    <div className="marketing-item-business">
                        <img src="/cost-savings.jpg" alt="Save Money" className="marketing-image-business"/>
                        <div className="marketing-overlay-business">
                            <h3 className="marketing-overlay-title">Save Money</h3>
                            <p>Only pay for performance—reduce upfront advertising costs and focus on results-driven
                                campaigns.</p>
                        </div>

                    </div>
                    <div className="marketing-item-business">
                        <img src="/targeted-marketing.jpg" alt="Targeted Marketing" className="marketing-image-business"/>
                        <div className="marketing-overlay-business">
                            <h3>Targeted Marketing</h3>
                            <p>Work with affiliates in your niche to ensure your products reach the right audience,
                                maximizing conversion rates.</p>
                        </div>
                    </div>
                    <div className="marketing-item-business">
                        <img src="/brand-awareness.jpg" alt="Build Brand Awareness" className="marketing-image-business"/>
                        <div className="marketing-overlay-business">
                            <h3>Build Brand Awareness</h3>
                            <p>Leverage the networks of affiliates to increase your brand's visibility and recognition
                                in your industry.</p>
                        </div>
                    </div>
                </div>
            </section>



            <section className="benefits-section-business">
                <motion.div
                    className="benefits-content-business"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="benefits-title-business">The Support We Provide to Businesses</h2>
                    <p className="benefits-description-business">
                        Unlock the potential of affiliate marketing with Nexaffil. Our platform ensures a seamless
                        experience while helping you scale your business to new heights.
                    </p>
                    <div className="benefits-layout-business">
                        <div className="benefits-grid-business">
                            <div className="benefit-card-business">
                                <img src="/Fraud.jpg" alt="Fraud Protection" className="benefit-image-business"/>
                                <div className="benefit-overlay-business">
                                    <h3>Fraud Protection</h3>
                                    <p>Our platform leverages advanced technology to monitor transactions, ensuring
                                        every exchange is secure and meets compliance standards.</p>
                                </div>
                            </div>
                            <div className="benefit-card-business">
                                <img src="/payment-effortless.png" alt="Effortless Payments" className="benefit-image-business"/>
                                <div className="benefit-overlay-business">
                                    <h3>Effortless Payments</h3>
                                    <p>We handle payouts directly with affiliates, so you can focus on your business
                                        growth while leaving payment logistics to us.</p>
                                </div>
                            </div>
                            <div className="benefit-card-business">
                                <img src="/active-affil.jpg" alt="Active Affiliate Network" className="benefit-image-business"/>
                                <div className="benefit-overlay-business">
                                    <h3>Active Affiliate Network</h3>
                                    <p>Gain access to a curated network of dedicated affiliates who specialize in a
                                        variety of niches tailored to your industry.</p>
                                </div>
                            </div>
                            <div className="benefit-card-business">
                                <img src="/Performance-analytics.jpg" alt="Performance Analytics" className="benefit-image-business"/>
                                <div className="benefit-overlay-business">
                                    <h3>Performance Analytics</h3>
                                    <p>Track the success of your campaigns with detailed insights, allowing you to make
                                        data-driven decisions to optimize performance.</p>
                                </div>
                            </div>
                            <div className="benefit-card-business">
                                <img src="/Campaigns.jpg" alt="Custom Campaigns" className="benefit-image-business"/>
                                <div className="benefit-overlay-business">
                                    <h3>Custom Campaigns</h3>
                                    <p>Create customized campaigns with flexible commission structures that align with
                                        your goals and reward top-performing affiliates.</p>
                                </div>
                            </div>
                            <div className="benefit-card-business">
                                <img src="/247-Support.jpg" alt="24/7 Support" className="benefit-image-business"/>
                                <div className="benefit-overlay-business">
                                    <h3>24/7 Support</h3>
                                    <p>Our dedicated support team is available around the clock to assist with any
                                        questions or issues, ensuring a smooth experience for all users.</p>
                                </div>
                            </div>
                        </div>
                        <div className="benefits-image-container-business">
                            <img
                                src="/benefits-image.jpg"
                                alt="Affiliate Marketing Benefits"
                                className="benefits-image-business"
                            />
                        </div>
                    </div>
                </motion.div>
            </section>


            {/* Call-to-Action Section */}
            <section className="cta-section-business">
                <motion.div
                    className="cta-content-business"
                    initial={{opacity: 0, scale: 0.9}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                >
                    <h2>Ready to Boost Your Sales?</h2>
                    <p>Join Nexaffil today and start your affiliate marketing journey.</p>
                    <motion.button
                        className="cta-button-business"
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                    >
                        Get Started Now
                    </motion.button>
                </motion.div>
            </section>
        </div>
    );
};

export default BusinessHome;