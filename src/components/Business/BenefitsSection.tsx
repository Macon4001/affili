import React from "react";
import { motion } from "framer-motion";
import LazyImage from "../LazyImage"; // ✅ Import LazyImage

const BenefitsSection: React.FC = () => {
    return (
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
                    Unlock the potential of affiliate marketing with Nexaffil. Our platform ensures a seamless experience while helping you scale your business to new heights.
                </p>
                <div className="benefits-layout-business">
                    <div className="benefits-grid-business">
                        <div className="benefit-card-business">
                            <LazyImage src="/Fraud.jpg" alt="Fraud Protection" className="benefit-image-business" />
                            <div className="benefit-overlay-business">
                                <h3>Fraud Protection</h3>
                                <p>Our platform leverages advanced technology to monitor transactions, ensuring every exchange is secure and meets compliance standards.</p>
                            </div>
                        </div>
                        <div className="benefit-card-business">
                            <LazyImage src="/payment-effortless.png" alt="Effortless Payments" className="benefit-image-business" />
                            <div className="benefit-overlay-business">
                                <h3>Effortless Payments</h3>
                                <p>We handle payouts directly with affiliates, so you can focus on your business growth while leaving payment logistics to us.</p>
                            </div>
                        </div>
                        <div className="benefit-card-business">
                            <LazyImage src="/active-affil.jpg" alt="Active Affiliate Network" className="benefit-image-business" />
                            <div className="benefit-overlay-business">
                                <h3>Active Affiliate Network</h3>
                                <p>Gain access to a curated network of dedicated affiliates who specialize in a variety of niches tailored to your industry.</p>
                            </div>
                        </div>
                        <div className="benefit-card-business">
                            <LazyImage src="/Performance-analytics.jpg" alt="Performance Analytics" className="benefit-image-business" />
                            <div className="benefit-overlay-business">
                                <h3>Performance Analytics</h3>
                                <p>Track the success of your campaigns with detailed insights, allowing you to make data-driven decisions to optimize performance.</p>
                            </div>
                        </div>
                        <div className="benefit-card-business">
                            <LazyImage src="/Campaigns.jpg" alt="Custom Campaigns" className="benefit-image-business" />
                            <div className="benefit-overlay-business">
                                <h3>Custom Campaigns</h3>
                                <p>Create customized campaigns with flexible commission structures that align with your goals and reward top-performing affiliates.</p>
                            </div>
                        </div>
                        <div className="benefit-card-business">
                            <LazyImage src="/247-Support.jpg" alt="24/7 Support" className="benefit-image-business" />
                            <div className="benefit-overlay-business">
                                <h3>24/7 Support</h3>
                                <p>Our dedicated support team is available around the clock to assist with any questions or issues, ensuring a smooth experience for all users.</p>
                            </div>
                        </div>
                    </div>
                    <div className="benefits-image-container-business">
                        <LazyImage src="/benefits-image.jpg" alt="Affiliate Marketing Benefits" className="benefits-image-business" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default BenefitsSection;
