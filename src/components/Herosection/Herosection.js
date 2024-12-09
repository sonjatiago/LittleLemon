// HeroSection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../../assets/hero.jpg';
import './Herosection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleBookTableClick = () => {
    navigate('/reservations');
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text-content">
            <h1 className="hero-title">Little Lemon</h1>
            <h2 className="hero-subtitle">Lisbon</h2>
            <p className="hero-description">
              Indulge in the ultimate dining experience at Lisbon's premier Mediterranean 
              restaurant, where every moment is crafted to perfection just for you.
            </p>
            <button 
              onClick={handleBookTableClick} 
              className="book-table-btn"
              aria-label="Book a table at Little Lemon"
            >
              Book a Table
            </button>
          </div>
        </div>
        <div className="hero-image-container">
          <img 
            src={heroImage} 
            className="hero-image" 
            alt="Little Lemon restaurant exterior" 
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;