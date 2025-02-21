import React, { Suspense, ComponentType } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Footer';
import Loading from './components/Functions/Loading';
import Contact from './Pages/Contact';
import { ThemeProvider } from './context/ThemeContext';
// Interface for LoginPage props
interface LoginPageProps {
    mode: 'sign-in' | 'register';
}

// Lazy load pages with proper typing
const Home = React.lazy(() => import('./Pages/Home')) as unknown as ComponentType;
const BusinessHome = React.lazy(() => import('./Pages/Businesshome')) as unknown as ComponentType;
const AffiliateHome = React.lazy(() => import('./Pages/AffiliateHome')) as unknown as ComponentType;
const AffiliateDashboard = React.lazy(() => import('./Pages/AffiliateDashboard')) as unknown as ComponentType;
const LoginPage = React.lazy(() => import('./Pages/Login')) as unknown as ComponentType<LoginPageProps>;

const App: React.FC = () => {
    const location = useLocation();

    // Determine if the current path is the affiliate dashboard
    const isAffiliateDashboard = location.pathname === '/affiliate-dashboard';

    // Function to check if we should hide footer
    const shouldHideFooter = () => {
        return location.pathname.includes('/affiliate-dashboard');
    };

    return (
        <ThemeProvider>
            <div className="page-container">
                {!isAffiliateDashboard && <Navbar />} {/* Conditionally render Navbar */}
                <main className="content">
                    <Suspense fallback={<Loading />}>
                        <Routes>
                            <Route path="/" element={<Home />} /> {/* Home Page */}
                            <Route path="/businesses" element={<BusinessHome />} /> {/* Business Home */}
                            <Route path="/affiliates" element={<AffiliateHome />} /> {/* Affiliate Home */}
                            <Route path="/affiliate-dashboard" element={<AffiliateDashboard />} /> {/* Dashboard */}
                            <Route path="/contact" element={<Contact />} /> {/* Contact */}
                            <Route path="/sign-in" element={<LoginPage mode="sign-in" />} />  {/* Sign-In Mode */}
                            <Route path="/sign-up" element={<LoginPage mode="register" />} /> {/* Register Mode */}
                        </Routes>
                    </Suspense>
                </main>
                {!shouldHideFooter() && <Footer />} {/* Conditionally render Footer */}
            </div>
        </ThemeProvider>
    );
};

export default App;
