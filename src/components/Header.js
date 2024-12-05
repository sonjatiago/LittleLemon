import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Little Lemon Restaurant</h1>
      <p style={styles.subtitle}>The Best Dining Experience in Town</p>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#f4a261',
    color: '#fff',
    textAlign: 'center',
    padding: '50px 20px',
  },
  title: {
    fontSize: '3rem',
    margin: 0,
  },
  subtitle: {
    fontSize: '1.5rem',
    margin: '10px 0 0',
  },
};

export default Header;
