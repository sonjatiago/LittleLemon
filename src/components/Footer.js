import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"; // Added more social icons
import { Link } from "react-router-dom"; // Import Link for navigation
import littleLemonLogo from '../assets/logo.png'; // Adjust the path to your logo image

function Footer() {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        {/* Logo and Navigation */}
        <div className="footer-logo-nav">
          <div className="footer-logo">
            <img src={littleLemonLogo} alt="Little Lemon Logo" className="footer-logo-img" />
          </div>
          <div className="footer-text">
            <nav className="footer-nav" aria-label="Footer Navigation">
              <ul>
                <li><Link to="/">Home</Link></li> {/* Use Link instead of a tag */}
                <li><Link to="/menu">Menu</Link></li> {/* Use Link instead of a tag */}
                <li><Link to="/reservations">Reservations</Link></li> {/* Use Link instead of a tag */}
              </ul>
            </nav>
            {/* Contact Information */}
            <div className="contact-info">
              <span><strong>Contact Information</strong></span>
              <address>
                <p>Address: Lisbon, Portugal</p>
                <p>Phone: <a href="tel:3129387229">312-938-7229</a></p>
                <p>Email: <a href="mailto:hello@littlelemon.com">reservations@littlelemon.com</a></p>
              </address>
            </div>
            {/* Social Media Links */}
            <div className="social-links" aria-label="Social Media Links">
              <button className="social-link" onClick={() => openLink('https://facebook.com')} aria-label="Facebook">
                <FaFacebook />
              </button>
              <button className="social-link" onClick={() => openLink('https://instagram.com')} aria-label="Instagram">
                <FaInstagram />
              </button>
              <button className="social-link" onClick={() => openLink('https://twitter.com')} aria-label="Twitter">
                <FaTwitter />
              </button>
              <button className="social-link" onClick={() => openLink('https://linkedin.com')} aria-label="LinkedIn">
                <FaLinkedin />
              </button>
            </div>
          </div>
        </div>
        {/* Footer Bottom Text */}
        <div className="footer-bottom">
          <p>&copy; 2024 Little Lemon Express. All Rights Reserved.</p>
          <p>Designed and developed by Tiago Guimaraes for the Meta Front-End Developer Capstone Project.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
