import React, { Suspense, lazy, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/BusinessHome.css";
import { Link } from "react-router-dom";
import LazyImage from '../components/LazyImage';
import { useLazyComponent } from "../hooks/useLazyComponent";
import { useBusinessPrefetch } from '../hooks/PreFetching/BusinessHomePrefetch';

// Cache control settings
const CACHE_CONTROL = 'public, max-age=31536000, immutable';

// Preload critical assets
const preloadAssets = () => {
    // Preload hero image
    const imagePreload = new Promise((resolve) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = '/hero-image.jpg'; // Update with your actual image path
        link.onload = resolve;
        link.setAttribute('crossorigin', 'anonymous');
        link.setAttribute('cache-control', CACHE_CONTROL);
        document.head.appendChild(link);
    });

    return Promise.all([imagePreload]);
};

const LazyBenefitsSection = lazy(() => import("../components/Business/BenefitsSection")) as unknown as React.ComponentType;;
const LazyMarketingSection = lazy(() => import("../components/Business/MarketingSection"))as unknown as React.ComponentType;;

const BusinessHome: React.FC = () => {
    useBusinessPrefetch();

    const { ref: marketingRef, shouldRender: shouldRenderMarketing } = useLazyComponent();
    const { ref: benefitsRef, shouldRender: shouldRenderBenefits } = useLazyComponent();

    useEffect(() => {
        preloadAssets();
    }, []);

    return (
        <div className="business-page-business">
            {/* Hero Section */}
            <section className="hero-section-business">
                <LazyImage src="/hero-image.jpg" alt="Hero Background" className="hero-image-business" />
                <motion.div
                    className="hero-content-business"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="hero-title-business">Looking to Increase Sales?</h1>
                    <Link to="/signup" className="affiliate-home__btn affiliate-home__btn--secondary">
                        Join Now
                    </Link>
                </motion.div>
            </section>

            {/* Lazy Load Marketing Section */}
            <div ref={marketingRef}>
                {shouldRenderMarketing && (
                    <Suspense fallback={<div>Loading Marketing Section...</div>}>
                        <LazyMarketingSection />
                    </Suspense>
                )}
            </div>

            {/* Lazy Load Benefits Section */}
            <div ref={benefitsRef}>
                {shouldRenderBenefits && (
                    <Suspense fallback={<div>Loading Benefits Section...</div>}>
                        <LazyBenefitsSection />
                    </Suspense>
                )}
            </div>

            {/* CTA Section */}
            <section className="cta-section-business">
                <motion.div
                    className="cta-content-business"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2>Ready to Boost Your Sales?</h2>
                    <p>Join Nexaffil today and start your affiliate marketing journey.</p>
                    <motion.button
                        className="cta-button-business"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Started Now
                    </motion.button>
                </motion.div>
            </section>
        </div>
    );
};

export default BusinessHome;