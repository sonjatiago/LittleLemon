// src/pages/HomePage/HomePage.js
import React from 'react';
import HeroSection from '../../components/Herosection/Herosection';
import Specials from '../../components/Specials/Specials';
import About from '../../components/About/About';
import Testimonials from '../../components/Testimonials/Testimonials';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specials />
      <About />
      <Testimonials />
    </>
  );
};

export default HomePage;