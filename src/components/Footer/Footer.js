// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import littleLemonLogo from '../../assets/logo.png';
import "./Footer.css";

const Footer = () => {
  const openLink = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={littleLemonLogo} alt="Little Lemon Logo" />
            </Link>
            <p className="brand-description">
              Experience the authentic flavors of Mediterranean cuisine in the heart of Lisbon.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <nav aria-label="Footer Navigation">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <address>
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>Lisbon, Portugal</span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <a href="tel:3129387229">312-938-7229</a>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <a href="mailto:reservations@littlelemon.com">
                  reservations@littlelemon.com
                </a>
              </div>
            </address>
          </div>

          {/* Social Media */}
          <div className="footer-social">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <button 
                className="social-link" 
                onClick={() => openLink('https://facebook.com')}
                aria-label="Visit our Facebook page"
              >
                <FaFacebook />
              </button>
              <button 
                className="social-link" 
                onClick={() => openLink('https://instagram.com')}
                aria-label="Visit our Instagram page"
              >
                <FaInstagram />
              </button>
              <button 
                className="social-link" 
                onClick={() => openLink('https://twitter.com')}
                aria-label="Visit our Twitter page"
              >
                <FaTwitter />
              </button>
              <button 
                className="social-link" 
                onClick={() => openLink('https://linkedin.com')}
                aria-label="Visit our LinkedIn page"
              >
                <FaLinkedin />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Little Lemon Express. All Rights Reserved.</p>
            <p className="developer-credit">
              Designed and developed by Tiago Guimaraes for the Meta Front-End Developer Capstone Project.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;