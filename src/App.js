import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the Footer component
import HomePage from './Pages/Home';
import AffiliateDashboard from './Pages/AffiliateDashboard';

const App = () => {
  return (
    <div className="page-container">
      <Navbar /> {/* Navbar at the top */}
      <main className="content">
        <HomePage /> {/* Your new dynamic HomePage */}
      </main>
      <Footer /> {/* Footer at the bottom */}
      <AffiliateDashboard />
    </div>
  );
};

export default App;
