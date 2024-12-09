// Specials.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import brushetaImage from '../../assets/brusheta.jpg'; // or .png depending on which one you want to use
import greekSaladImage from '../../assets/greek-salad.jpg';
import lemonDessertImage from '../../assets/lemon-dessert.jpg';
import "./Specials.css";

const Specials = () => {
  const navigate = useNavigate();

  const dishes = [
    {
      name: "Bruschetta",
      image: brushetaImage,
      description: "A delicious Mediterranean dish with fresh ingredients.",
      price: "€7.99",
      className: "bruschetta"
    },
    {
      name: "Greek Salad",
      image: greekSaladImage,
      description: "A mouthwatering combination of flavors, perfect for any meal and for everyone.",
      price: "€12.99",
      className: "greek-salad"
    },
    {
      name: "Lemon Dessert",
      image: lemonDessertImage,
      description: "A sweet and refreshing dessert with a citrus twist.",
      price: "€5.99",
      className: "lemon-dessert"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="specials-section">
      <div className="specials-container">
        <div className="specials-header">
          <h2 className="specials-title">This Week's Specials</h2>
          <button 
            className="menu-button"
            onClick={() => navigate('/menu')}
          >
            View Full Menu
          </button>
        </div>

        <motion.div 
          className="specials-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {dishes.map((dish, index) => (
            <motion.div 
              key={index}
              className="special-card"
              variants={itemVariants}
            >
              <div className="card-image-container">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="card-image"
                  loading="lazy"
                />
                <div className="image-overlay" />
              </div>
              
              <div className="card-content">
                <div className="card-header">
                  <h3 className="card-title">{dish.name}</h3>
                  <span className="card-price">{dish.price}</span>
                </div>
                <p className="card-description">{dish.description}</p>
                <button 
                  className="order-button"
                  onClick={() => navigate('/menu')}
                >
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Specials;