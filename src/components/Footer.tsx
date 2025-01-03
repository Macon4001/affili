import React from 'react';
import '../styles/Footer.css'; // Import the CSS file

const Footer: React.FC = () => {
  return (
      <footer className="footer">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-heading">About Us</h3>
            <p>We connect businesses with affiliates to help grow together.</p>
          </div>

          {/* Navigation Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/about">Affiliates</a></li>
              <li><a href="/about">Businesses</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-section">
            <h3 className="footer-heading">Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
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
