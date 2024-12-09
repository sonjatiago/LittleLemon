import React from 'react';

// The updated HeroSection component to trigger the display of BookingSection
const HeroSection = ({ onBookTableClick }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Lisbon</h2>
        <p>Indulge in the ultimate dining experience at Lisbon's premier Mediterranean restaurant, where every moment is crafted to perfection just for you.</p>
        {/* Button to trigger the display of the BookingSection */}
        <button onClick={onBookTableClick} className="book-table-btn">Book a Table</button>
      </div>
      {/* Hero Image */}
      <img src={require('../assets/hero.jpg')} className="hero-image" alt="Little Lemon restaurant exterior" />
    </section>
  );
};

export default HeroSection;
