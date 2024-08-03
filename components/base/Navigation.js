import React from 'react';
import Button from '@mui/material/Button';
import { Page } from '../util/PagesEnum';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const styles = {
  navigation: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    width: 'auto',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: '1rem',
    gap: '0.5rem',
  },
  button: {
    fontSize: ['20px', '20px', '25px'],
    fontFamily: 'lemon-milk',
    color: '#E8E6E6',
    width: ['90px', '90px', '120px'],
    borderColor: '#E8E6E6',
    borderRadius: 28,
    backgroundColor: '#000000',
  },
  upNavigation: {
    position: 'fixed',
    right: 0,
    bottom: '1rem',
    display: 'flex',
    flexDirection: 'column', // Stack items vertically
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  upButtonStyles: {
    fontSize: '15px',
    fontFamily: 'lemon-milk',
    color: '#E8E6E6',
    display: 'flex',
    right: '1rem',
    position: 'fixed',
    bottom: ['3rem', '3rem', '1rem'], // Array to handle responsive design: [small screens, medium screens, large screens]
  },
};

const Navigation = ({ currentPage = Page.Home, setPage }) => (
  <div>
    <div style={styles.navigation}>
      <Button variant="outlined" sx={styles.button} onClick={() => setPage(Page.About)}>
        About
      </Button>
      <Button variant="outlined" sx={styles.button} href="https://dev.to/mahrrah">
        Blog
      </Button>
    </div>
    {currentPage != Page.Home && (
      <div style={styles.upNavigation}>
        <Button
          variant="text"
          sx={styles.upButtonStyles}
          startIcon={<KeyboardDoubleArrowUpIcon />}
          onClick={() => setPage(Page.Home)}
        >
          Back Up
        </Button>
      </div>
    )}
  </div>
);

export default Navigation;
