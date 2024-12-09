import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

// Import images from src/assets
import brushetaImage from '../assets/brusheta.png';
import greekSaladImage from '../assets/greek-salad.jpg';
import lemonDessertImage from '../assets/lemon-dessert.jpg';

const Specials = () => {
  // Initialize navigate function
  const navigate = useNavigate();

  // Sample data for dishes
  const dishes = [
    {
      name: "Bruschetta",
      image: brushetaImage,
      description: "A delicious Mediterranean dish with fresh ingredients.",
      className: "bruschetta"
    },
    {
      name: "Greek Salad",
      image: greekSaladImage,
      description: "A mouthwatering combination of flavors, perfect for any meal and for everyone.",
      className: "greek-salad"
    },
    {
      name: "Lemon Dessert",
      image: lemonDessertImage,
      description: "A sweet and refreshing dessert with a citrus twist.",
      className: "lemon-dessert"
    }
  ];

  // Handle button click to navigate to the menu
  const handleOnlineMenuClick = () => {
    navigate('/menu'); // Navigate to the Menu page
  };

  return (
    <section className="specials-section">
      <div className="specials-content">
        <h2>This week's specials!</h2>
        <button className="online-menu-btn" onClick={handleOnlineMenuClick}>
          Online Menu
        </button>

        <div className="dishes-container">
          {dishes.map((dish, index) => (
            <div key={index} className={`dish-box ${dish.className}`}>
              <img src={dish.image} alt={dish.name} className="dish-image" />
              <h3 className="dish-name">{dish.name}</h3>
              <p className="dish-description">{dish.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
