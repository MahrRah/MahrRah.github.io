// components/Banner.js
import React from 'react';

import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
const styles = {
    footer: (isHidden) => ({
        position: 'fixed',
        bottom: 0,
        left: 0,
        right:0,
        width: '100%',
        background: '#00000',
        padding: '1rem',
        opacity: isHidden ? 0 : 1,
        visibility: isHidden ? 'hidden' : 'visible',
        transition: 'opacity 0.3s ease, visibility 0.3s ease',
        display: 'flex',
        justifyContent: 'space-between', 
        alignItems: 'left', 


    }),
    heading: {
        fontFamily: 'lemon-milk',
        color: '#E8E6E6',
        fontSize: '10px',
        textAlign: 'left',
    },
    icon:{
        color: '#E8E6E6'
    }
};


const Footer = ({ isHidden }) => (
    <div style={styles.footer(isHidden)}>
        <p style={styles.heading}> tata </p>
        <IconButton sx={styles.icon} href="https://github.com/MahrRah" target="_blank"><GitHubIcon></GitHubIcon></IconButton>
    </div>
);

export default Footer;
