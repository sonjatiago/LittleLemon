import React, { useState } from 'react';

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
      description: "A crisp, lemon-lime soda with a refreshing taste.",
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

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('starters');

  return (
    <div className="menu-container">
      <h1 className="menu-title">Mediterranean Delights</h1>
      <p className="menu-description">
        Explore our delicious menu! Choose a category to see the available dishes.
      </p>

      <div className="category-tabs">
        {Object.keys(menuItems).map((category) => (
          <button
            key={category}
            className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
          </button>
        ))}
      </div>

      <div className="menu-items">
        {menuItems[selectedCategory].map((item, index) => (
          <div key={index} className="menu-item">
            <h3 className="menu-item-name">{item.name}</h3>
            <p className="menu-item-description">{item.description}</p>
            <span className="menu-item-price">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
