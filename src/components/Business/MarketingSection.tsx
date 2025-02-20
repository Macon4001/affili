import React from "react";
import LazyImage from "../LazyImage"; // ✅ Import LazyImage

const MarketingSection: React.FC = () => {
    return (
        <section className="marketing-section-business">
            <h2 className="marketing-title-business">How Affiliate Marketing Can Boost Your Business</h2>
            <p className="marketing-description-business">
                Discover how affiliate marketing can be a game-changer for your business by driving sales and reducing costs.
            </p>
            <div className="marketing-grid-business">
                <div className="marketing-item-business">
                    <LazyImage src="/sales-growth.jpg" alt="Increase Sales" className="marketing-image-business" />
                    <div className="marketing-overlay-business">
                        <h3>Increase Sales</h3>
                        <p>Expand your reach with affiliate marketers who promote your products to their audiences, driving higher sales volumes.</p>
                    </div>
                </div>
                <div className="marketing-item-business">
                    <LazyImage src="/cost-savings.jpg" alt="Save Money" className="marketing-image-business" />
                    <div className="marketing-overlay-business">
                        <h3 className="marketing-overlay-title">Save Money</h3>
                        <p>Only pay for performance—reduce upfront advertising costs and focus on results-driven campaigns.</p>
                    </div>
                </div>
                <div className="marketing-item-business">
                    <LazyImage src="/targeted-marketing.jpg" alt="Targeted Marketing" className="marketing-image-business" />
                    <div className="marketing-overlay-business">
                        <h3>Targeted Marketing</h3>
                        <p>Work with affiliates in your niche to ensure your products reach the right audience, maximizing conversion rates.</p>
                    </div>
                </div>
                <div className="marketing-item-business">
                    <LazyImage src="/brand-awareness.jpg" alt="Build Brand Awareness" className="marketing-image-business" />
                    <div className="marketing-overlay-business">
                        <h3>Build Brand Awareness</h3>
                        <p>Leverage the networks of affiliates to increase your brand's visibility and recognition in your industry.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketingSection;
