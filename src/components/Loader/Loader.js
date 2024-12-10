// Loader.js
import React from 'react';
import { motion } from 'framer-motion';
import lemonImage from '../../assets/lemon.png';
import './Loader.css';

const Loader = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5
      }
    }
  };

  const lemonVariants = {
    rotate: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <motion.div 
      className="loader-wrapper"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="loader-content">
        <div className="lemons-container">
          <motion.div 
            className="lemon"
            variants={lemonVariants}
            animate="rotate"
            custom={0}
          >
            <img src={lemonImage} alt="Spinning lemon" />
          </motion.div>
          <motion.div 
            className="lemon"
            variants={lemonVariants}
            animate="rotate"
            custom={1}
            style={{ animationDelay: '0.2s' }}
          >
            <img src={lemonImage} alt="Spinning lemon" />
          </motion.div>
          <motion.div 
            className="lemon"
            variants={lemonVariants}
            animate="rotate"
            custom={2}
            style={{ animationDelay: '0.4s' }}
          >
            <img src={lemonImage} alt="Spinning lemon" />
          </motion.div>
        </div>

        <motion.div 
          className="welcome-text"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          Welcome to Little Lemon Restaurant
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;