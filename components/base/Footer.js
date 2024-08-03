import React from 'react';

import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';

const styles = {
  footer: {
    position: 'fixed',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '90%',
    maxWidth: '800px',
    background: 'black',
    padding: '0.5rem 1rem',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    boxShadow: '10px 0px 50px 5px #151716',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'opacity 0.3s ease, visibility 0.3s ease',
    '@media (max-width: 768px)': {
      width: '95%',
      padding: '0.5rem',
    },
    '@media (max-width: 480px)': {
      width: '100%',
      padding: '0.5rem',
      bottom: '0.5rem',
    },
  },
  heading: {
    fontFamily: 'lemon-milk',
    color: '#E8E6E6',
    fontSize: '10px',
    textAlign: 'left',
  },
  icon: {
    color: '#E8E6E6',
  },
};

const Footer = () => (
  <div style={styles.footer}>
    <p style={styles.heading}> Footer </p>
    <IconButton sx={styles.icon} href="https://github.com/MahrRah" target="_blank">
      <GitHubIcon></GitHubIcon>
    </IconButton>
  </div>
);

export default Footer;
