import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {

  // Navbar component inside App.js
  const Navbar = () => {
    return (
      <nav style={styles.navbar}>
        <div style={styles.logo}>
          <a href="#home" style={styles.logoText}>Little Lemon</a>
        </div>
        <ul style={styles.navList}>
          <li style={styles.navItem}><a href="#home" style={styles.navLink}>Home</a></li>
          <li style={styles.navItem}><a href="#menu" style={styles.navLink}>Menu</a></li>
          <li style={styles.navItem}><a href="#about" style={styles.navLink}>About</a></li>
          <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
        </ul>
      </nav>
    );
  };

  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

// Styles for Navbar component
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2a9d8f', // Light green background
    padding: '10px 20px',
    boxShadow: '0px 4px 2px -2px gray',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#fff',
    textDecoration: 'none',
  },
  logoText: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.8rem',
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    padding: '8px 15px',
    transition: 'background-color 0.3s ease',
  },
};

export default App;
