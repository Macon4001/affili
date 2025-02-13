import React, { Suspense, lazy, useEffect } from 'react';
import { Link } from "react-router-dom";
import Loading from '../components/Functions/Loading';
import { useLazyComponent } from '../hooks/useLazyComponent';
import '../styles/Home.css';

// Cache control settings
const CACHE_CONTROL = 'public, max-age=31536000, immutable';

// Preload critical assets
const preloadAssets = () => {
    // Preload hero video
    const videoPreload = new Promise((resolve) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'video';
        link.href = '/Homepage Hero.mp4';
        link.onload = resolve;
        link.setAttribute('crossorigin', 'anonymous');
        link.setAttribute('cache-control', CACHE_CONTROL);
        document.head.appendChild(link);
    });

    // Preload critical images
    const imagePreload = new Promise((resolve) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = '/Affiliate.jpg';
        link.onload = resolve;
        document.head.appendChild(link);
    });

    return Promise.all([videoPreload, imagePreload]);
};

// Eager load above-the-fold components
const HeroSection: React.FC = () => {
    useEffect(() => {
        preloadAssets();
    }, []);

    return (
        <section className="hero shadow-lg">
            <video
                className="hero-video"
                src="/Homepage Hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                aria-label="Background video for homepage"
                style={{ opacity: 1 }}
            />
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1>Welcome to NEX AFFIL</h1>
                <p>Connecting Businesses and Affiliates for Mutual Growth</p>
                <Link to="/sign-up" className="cta-button">Join Now</Link>
            </div>
        </section>
    );
};

// Define types for components
type HomeFeaturesProps = {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    onClick: () => void;
};

// Lazy load components with proper typing
const Testimonials = lazy(() => import('../components/Testimonials')) as unknown as React.ComponentType;
const HomeFeatures = lazy(() => import('../components/HomeFeatures')) as unknown as React.ComponentType<HomeFeaturesProps>;
const HowItWorks = lazy(() => import('../components/HowItWorks')) as unknown as React.ComponentType;

const HomePage: React.FC = () => {
    const howItWorks = useLazyComponent();
    const features = useLazyComponent();
    const testimonials = useLazyComponent();

    return (
        <div className="homepage">
            {/* Hero Section - Always loaded */}
            <HeroSection />

            {/* How It Works Section */}
            <div ref={howItWorks.ref}>
                {howItWorks.shouldRender && (
                    <Suspense fallback={<Loading />}>
                        <HowItWorks />
                    </Suspense>
                )}
            </div>

            {/* Features Section */}
            <div ref={features.ref}>
                {features.shouldRender && (
                    <Suspense fallback={<Loading />}>
                        <HomeFeatures
                            title="For Affiliates"
                            subtitle="Empower Your Earnings"
                            description="Join our community and maximize your revenue potential by promoting products."
                            image="/Affiliate.jpg"
                            onClick={() => window.location.href = '/affiliates'}
                        />
                    </Suspense>
                )}
            </div>

            {/* Testimonials Section */}
            <div ref={testimonials.ref}>
                {testimonials.shouldRender && (
                    <Suspense fallback={<Loading />}>
                        <Testimonials />
                    </Suspense>
                )}
            </div>
        </div>
    );
};

export default HomePage;
