import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import logo from '../assets/logo.svg';

function Navbar() {

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: for smooth scrolling
    });
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="nav-links">
        {/* Use Link to navigate to different pages */}
        <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
        <li><Link to="/menu" onClick={scrollToTop}>Menu</Link></li>
        <li><Link to="/about" onClick={scrollToTop}>About</Link></li>
        <li><Link to="/reservations" onClick={scrollToTop}>Reservations</Link></li>
      </ul>
      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">SignUp</button>
      </div>
    </nav>
  );
}

export default Navbar;
