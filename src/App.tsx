import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Footer';
import HomePage from './Pages/Home';
import AffiliateDashboard from './Pages/AffiliateDashboard';
import AffiliateHome from "./Pages/AfilliateHome";
import BusinessHome from "./Pages/Businesshome";
import LoginPage from "./Pages/Login";


const App: React.FC = () => {
    return (
        <div className="page-container">
            <Navbar /> {/* Navbar at the top */}
            <main className="content">
                <Routes>
                    <Route path="/" element={<HomePage />} /> {/* Home Page */}
                    <Route path="/affiliates" element={<AffiliateHome />} /> {/* Affiliate Home */}
                    <Route path="/dashboard" element={<AffiliateDashboard />} /> {/* Dashboard */}
                    <Route path="/businesses" element={<BusinessHome />} /> {/* Dashboard */}
                    <Route path="/sign-in" element={<LoginPage mode={"sign-in"} />} />  {/* Sign-In Mode */}
                    <Route path="/sign-up" element={<LoginPage mode="register" />} /> {/* Register Mode */}
                </Routes>
            </main>
            <Footer /> {/* Footer at the bottom */}

            {/* The Affiliate Dashboard */}
           {/* <AffiliateDashboard />*/}
        </div>
    );
};

export default App;
