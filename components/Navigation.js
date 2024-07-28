// components/NavigationBar.js
import React from 'react';
import Button from '@mui/material/Button';

const styles = {
  navigation: (isVisible) => ({
    position: 'fixed',
    bottom: 0,
    right: 0,
    width: 'auto',
    height: '100vh', // Full viewport height
    display: isVisible ? 'flex' : 'none',
    flexDirection: 'column', // Stack items vertically
    alignItems: 'flex-end', // Align items to the right
    justifyContent: 'center', // Center items vertically
    padding: '1rem',
    gap: '0.5rem', // Space between buttons
  }),
  button: {
    fontSize: '30px',
    fontFamily: 'lemon-milk',
    color: '#E8E6E6',
    borderColor: '#E8E6E6',
    borderRadius: 28,
    backgroundColor: '#000000',
  },
};

const NavigationBar = ({ isVisible =true , isHome=true}) => (
  <div style={styles.navigation(isVisible)}>
    {isHome && <Button variant="outlined" sx={styles.button} href="/">Home</Button>}
    <Button variant="outlined" sx={styles.button} href="/about">About</Button>
    <Button variant="outlined" sx={styles.button} href="https://dev.to/mahrrah">Blog</Button>
  </div>
);

export default NavigationBar;
