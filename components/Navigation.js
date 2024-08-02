// components/NavigationBar.js
import React from 'react';
import Button from '@mui/material/Button';
import { Page } from '../components/PagesEnum';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
const styles = {
  navigation: (isHidden) => ({
    position: 'fixed',
    bottom: 0,
    right: 0,
    width: 'auto',
    height: '100vh', // Full viewport height
    display: isHidden ? 'none' : 'flex' ,
    flexDirection: 'column', // Stack items vertically
    alignItems: 'flex-end', // Align items to the right
    justifyContent: 'center', // Center items vertically
    padding: '1rem',
    gap: '0.5rem', // Space between buttons
  }),
  button: {
    fontSize: '25px',
    fontFamily: 'lemon-milk',
    color: '#E8E6E6',
    width: '120px',
    borderColor: '#E8E6E6',
    borderRadius: 28,
    backgroundColor: '#000000',
  },
  upButton: {
    fontSize: '15px',
    fontFamily: 'lemon-milk',
    color: '#E8E6E6',
    width: '120px',
    alignContent: 'baseline',
  },
};

const NavigationBar = ({ isHidden = false, currentPage = Page.Home, setPage }) => (
  <div style={styles.navigation(isHidden)}>
    <Button variant="outlined" sx={styles.button} onClick={() => setPage(Page.About)} >About</Button>
    <Button variant="outlined" sx={styles.button} href="https://dev.to/mahrrah">Blog</Button>
    {currentPage != Page.Home && <div>
      <Button variant="text" sx={styles.upButton} startIcon={<KeyboardDoubleArrowUpIcon />} onClick={() => setPage(Page.Home)}>Back Up</Button>
    </div>}
  </div>
);

export default NavigationBar;
