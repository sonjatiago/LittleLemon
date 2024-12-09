import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import router components
import Navbar from './components/NavBar'; // Navbar remains the same
import HeroSection from './components/Herosection'; // HeroSection remains the same
import ServicesSection from './components/Testimonials'; // ServicesSection remains the same
import Footer from './components/Footer'; // Footer remains the same
import WeServeSection from './components/Specials'; // WeServeSection remains the same
import BookingSection from './BookingSection/BookingSection'; // BookingSection
import About from './components/About'; // Import the new About component
import Menu from './components/Menu'; // Import Menu Component
import Login from './components/Login'; // Import Login Component
import Loader from './components/Loader'; // Import Loader Component
import './App.css'; // Import the main styles

function App() {
  const [isLoading, setIsLoading] = useState(true); // Handle loading state
  const [setShowBooking] = useState(false); // Handle booking section visibility

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 3 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const handleBookingButtonClick = () => {
    setShowBooking(true); // When booking button is clicked, show the booking section
  };

  if (isLoading) {
    // Render loader while loading
    return <Loader />;
  }

  return (
    <div className="App" style={{ fontFamily: 'Karla, sans-serif' }}>
      {/* Wrap the app in Router */}
      <Router>
        {/* Navbar - always visible */}
        <Navbar />

        {/* Conditionally render sections */}
        <Routes>
          {/* Homepage - Updated to render the Homepage component */}
          <Route
            path="/"
            element={
              <>
                {/* Hero Section with "Book a Table" Button */}
                <HeroSection onBookTableClick={handleBookingButtonClick} />
                {/* Static sections */}
                <WeServeSection />
                <About />
                <ServicesSection />
              </>
            }
          />

          {/* Menu Page */}
          <Route path="/menu" element={<Menu />} />

          {/* About Page */}
          <Route path="/about" element={<About />} />

          {/* Reservations Page */}
          <Route path="/reservations" element={<BookingSection />} />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />
        </Routes>

        {/* Footer - always visible */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
