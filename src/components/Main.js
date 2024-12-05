import React from 'react';

const Main = () => {
  return (
    <main style={styles.main}>
      <h2 style={styles.mainTitle}>Welcome to Little Lemon!</h2>
      <p style={styles.mainContent}>
        At Little Lemon, we offer a delicious variety of food made from the freshest ingredients.
        Come in and enjoy our signature dishes, perfect for a family night out or a romantic dinner.
      </p>
    </main>
  );
};

const styles = {
  main: {
    padding: '20px',
    textAlign: 'center',
  },
  mainTitle: {
    fontSize: '2rem',
    margin: '20px 0',
  },
  mainContent: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    maxWidth: '800px',
    margin: '0 auto',
  },
};

export default Main;
