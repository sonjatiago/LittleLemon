import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.footerText}>© 2024 Little Lemon Restaurant | All Rights Reserved</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
  },
  footerText: {
    margin: 0,
    fontSize: '16px',
  },
};

export default Footer;
