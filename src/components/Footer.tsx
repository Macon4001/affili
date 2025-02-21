import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'; // Import the CSS file

const Footer: React.FC = () => {
  return (
      <footer className="footer">
        <div className="footer-content">
          {/* Left Links Section */}
          <div className="footer-section">
            <ul className="footer-links main-links">
              <li><Link to="/affiliates">AFFILIATES</Link></li>
              <li><Link to="/businesses">BUSINESSES</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
              <li><Link to="/terms">TERMS OF SERVICE</Link></li>
              <li><Link to="/privacy">PRIVACY POLICY</Link></li>
            </ul>
          </div>

          {/* Right Links Section */}
          <div className="footer-section">
            <ul className="footer-links social-links">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FACEBOOK</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TWITTER</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2024 Affili | a BLUEHAVENDIGITAL product. All rights reserved.</p>
        </div>
      </footer>
  );
};

export default Footer;
