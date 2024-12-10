import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><a href="#home" style={styles.navLink}>Home</a></li>
        <li style={styles.navItem}><a href="#menu" style={styles.navLink}>Menu</a></li>
        <li style={styles.navItem}><a href="#about" style={styles.navLink}>About</a></li>
        <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px 20px',
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'space-around',
  },
  navItem: {
    margin: '0 10px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  }
};

export default Navbar;
