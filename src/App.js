import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the Footer component
import HomePage from './Pages/Home';

const App = () => {
  return (
    <div className="page-container">
      <Navbar /> {/* Navbar at the top */}
      <main className="content">
        <HomePage /> {/* Your new dynamic HomePage */}
      </main>
      <Footer /> {/* Footer at the bottom */}
    </div>
  );
};

export default App;
