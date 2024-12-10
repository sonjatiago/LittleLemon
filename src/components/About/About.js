// About.js
import React from "react";
import { motion } from "framer-motion";
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import "./About.css";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerImages = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, delay: 0.3 }
  };

  return (
    <section className="about-section">
      <div className="about-container">
        <motion.div 
          className="about-content"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <div className="about-header">
            <h2 className="about-title">Little Lemon</h2>
            <h3 className="about-location">Chicago</h3>
          </div>
          
          <div className="about-text">
            <p className="about-description">
              Little Lemon was born out of a shared passion for Mediterranean flavors
              and a dream of bringing the vibrant spirit of the Mediterranean coast
              to the heart of Chicago. Founded by two childhood friends who spent
              summers exploring the markets of Greece, Italy, and Turkey, the
              restaurant aims to deliver an authentic experience inspired by their
              travels.
            </p>
            
            <p className="about-description">
              Every dish tells a story—of sun-drenched lemon groves, rustic olive
              farms, and the warmth of Mediterranean hospitality. Since opening its
              doors, Little Lemon has become a cherished destination for those
              seeking a slice of Mediterranean paradise in the bustling city.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="about-images"
          initial={staggerImages.initial}
          animate={staggerImages.animate}
          transition={staggerImages.transition}
        >
          <div className="image-container">
            <img
              src={image1}
              alt="Mediterranean dish"
              className="about-image image1"
              loading="lazy"
            />
          </div>
          <div className="image-container">
            <img
              src={image2}
              alt="Fresh ingredients"
              className="about-image image2"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;