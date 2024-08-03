import React from 'react';

import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const styles = {
  footer: {
    position: 'fixed',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80%',
    maxWidth: '650px',
    background: 'black',
    padding: '0.5rem 1rem',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    boxShadow: '10px 0px 50px 5px #151716',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'opacity 0.3s ease, visibility 0.3s ease',
  },
  paragraph: {
    fontFamily: 'lemon-milk',
    color: '#E8E6E6',
    fontSize: '10px',
    display: 'flex',
    alignItems: 'left',
    alignText: 'left',
    margin: '0 auto',
  },
  icon: {
    color: '#E8E6E6',
    fontSize: '20px',
  },
};

const Footer = () => (
  <div style={styles.footer}>
    <div style={styles.parentDiv}>
      <p style={styles.paragraph}> © 2024 Mahra Rahimi </p>
    </div>
    <div>
      <IconButton sx={styles.icon} size="small" href="https://github.com/MahrRah" target="_blank">
        <GitHubIcon></GitHubIcon>
      </IconButton>
      <IconButton sx={styles.icon} size="small" href="https://www.linkedin.com/in/tamararahimi/" target="_blank">
        <LinkedInIcon></LinkedInIcon>
      </IconButton>
      <IconButton sx={styles.icon} size="small" href="mailto:mahra.rah@gmail.com" target="_blank">
        <MailOutlineIcon></MailOutlineIcon>
      </IconButton>
    </div>
  </div>
);

export default Footer;
