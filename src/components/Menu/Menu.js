// Menu.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./Menu.css";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('starters');
  
  const menuItems = {
    starters: [
      {
        name: "Bruschetta",
        description: "Grilled bread topped with tomato, garlic, and fresh basil.",
        price: "€7.99"
      },
      {
        name: "Hummus with Pita",
        description: "Creamy hummus served with warm, fluffy pita bread.",
        price: "€8.99"
      },
      {
        name: "Feta Cheese and Olives",
        description: "A classic Greek starter with creamy feta cheese and tangy olives.",
        price: "€6.99"
      },
      {
        name: "Stuffed Grape Leaves",
        description: "Grape leaves stuffed with rice, herbs, and spices.",
        price: "€9.99"
      },
      {
        name: "Tzatziki with Pita",
        description: "Greek yogurt with cucumber, garlic, and dill, served with pita.",
        price: "€7.49"
      }
    ],
    mainDishes: [
      {
        name: "Grilled Lamb Kofta",
        description: "Succulent lamb skewers, seasoned with Mediterranean spices.",
        price: "€18.99"
      },
      {
        name: "Lemon Herb Chicken",
        description: "Grilled chicken marinated with lemon, garlic, and fresh herbs.",
        price: "€14.99"
      },
      {
        name: "Moussaka",
        description: "A traditional Greek casserole made with eggplant, minced meat, and béchamel sauce.",
        price: "€16.99"
      },
      {
        name: "Seafood Paella",
        description: "A rich, flavorful Spanish rice dish with seafood and spices.",
        price: "€19.99"
      },
      {
        name: "Souvlaki",
        description: "Grilled skewers of pork or chicken served with tzatziki and pita.",
        price: "€15.99"
      },
      {
        name: "Falafel Plate",
        description: "Crispy falafel served with tabbouleh, hummus, and pita.",
        price: "€13.99"
      },
      {
        name: "Grilled Octopus",
        description: "Tender octopus grilled to perfection, served with lemon and olive oil.",
        price: "€22.99"
      },
      {
        name: "Vegetarian Lasagna",
        description: "Layers of pasta, vegetables, and béchamel sauce, baked to perfection.",
        price: "€14.99"
      },
      {
        name: "Beef Shawarma Plate",
        description: "Tender beef shawarma, served with rice and garlic sauce.",
        price: "€17.99"
      },
      {
        name: "Chicken Gyro",
        description: "Grilled chicken wrapped in pita with tzatziki, lettuce, and tomatoes.",
        price: "€12.99"
      }
    ],
    desserts: [
      {
        name: "Baklava",
        description: "A sweet, flaky pastry filled with honey and nuts.",
        price: "€6.99"
      },
      {
        name: "Lemon Dessert",
        description: "A refreshing citrus dessert with a buttery finish.",
        price: "€5.99"
      },
      {
        name: "Galaktoboureko",
        description: "A Greek custard dessert wrapped in phyllo dough and soaked in syrup.",
        price: "€7.49"
      },
      {
        name: "Kataifi",
        description: "Shredded phyllo dough filled with walnuts and syrup.",
        price: "€6.49"
      },
      {
        name: "Greek Yogurt with Honey and Nuts",
        description: "Creamy Greek yogurt topped with honey and chopped nuts.",
        price: "€5.49"
      }
    ],
    beverages: [
      {
        name: "Mint Lemonade",
        description: "A refreshing drink made with fresh mint and lemon.",
        price: "€3.99"
      },
      {
        name: "Turkish Coffee",
        description: "Strong and aromatic traditional Turkish coffee.",
        price: "€2.99"
      },
      {
        name: "Iced Hibiscus Tea",
        description: "A cool, tangy drink made from hibiscus flowers.",
        price: "€4.49"
      },
      {
        name: "Café Freddo",
        description: "Greek-style iced coffee with a rich, creamy foam.",
        price: "€3.49"
      },
      {
        name: "Fresh Orange Juice",
        description: "Freshly squeezed orange juice, served cold.",
        price: "€2.99"
      },
      {
        name: "Coca-Cola",
        description: "The classic, refreshing cola drink.",
        price: "€2.49"
      },
      {
        name: "Sprite",
        description: "A crips, lemon-lime soda with a refreshing taste.",
        price: "€2.49"
      },
      {
        name: "Fanta Orange",
        description: "A sweet and tangy orange soda.",
        price: "€2.49"
      },
      {
        name: "Iced Tea",
        description: "A chilled, lightly sweetened iced tea with lemon.",
        price: "€2.99"
      },
      {
        name: "Ayran",
        description: "A traditional Turkish yogurt drink, savory and refreshing.",
        price: "€3.49"
      }
    ],
    winesAndBeers: [
      {
        name: "Greek White Wine",
        description: "A crisp, refreshing white wine with citrus and floral notes.",
        price: "€12.99"
      },
      {
        name: "Ouzo",
        description: "A traditional Greek anise-flavored spirit, served chilled.",
        price: "€5.99"
      },
      {
        name: "Local Beer",
        description: "A refreshing beer brewed locally, perfect for warm weather.",
        price: "€4.99"
      },
      {
        name: "Red Wine",
        description: "A rich, full-bodied red wine with berry and oak notes.",
        price: "€15.99"
      },
      {
        name: "Chardonnay",
        description: "A well-balanced white wine with notes of tropical fruits and oak.",
        price: "€14.99"
      },
      {
        name: "Retsina",
        description: "A distinctive Greek wine with a touch of pine resin.",
        price: "€10.99"
      },
      {
        name: "Greek Rosé",
        description: "A light, refreshing rosé with fruity and floral flavors.",
        price: "€11.99"
      },
      {
        name: "Moscato",
        description: "A sweet, aromatic white wine with notes of citrus and peach.",
        price: "€13.49"
      },
      {
        name: "Mythos Beer",
        description: "A light Greek lager with a smooth, crisp taste.",
        price: "€4.49"
      },
      {
        name: "Fix Hellas",
        description: "A classic Greek lager with a golden color and malty flavor.",
        price: "€4.99"
      }
    ]
  };

  const formatCategoryName = (category) => {
    return category
      .replace(/([A-Z])/g, ' $1')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="menu-section">
      <div className="menu-container">
        <div className="menu-header">
          <h1 className="menu-title">Mediterranean Delights</h1>
          <p className="menu-subtitle">
            Explore our carefully curated selection of authentic Mediterranean dishes
          </p>
        </div>

        <nav className="category-navigation">
          {Object.keys(menuItems).map((category) => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
              aria-selected={selectedCategory === category}
              role="tab"
            >
              {formatCategoryName(category)}
            </button>
          ))}
        </nav>

        <AnimatePresence mode='wait'>
          <motion.div 
            key={selectedCategory}
            className="menu-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {menuItems[selectedCategory].map((item, index) => (
              <motion.div 
                key={item.name}
                className="menu-item"
                variants={itemVariants}
              >
                <div className="menu-item-content">
                  <div className="menu-item-header">
                    <h3 className="menu-item-name">{item.name}</h3>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                  <p className="menu-item-description">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Menu;