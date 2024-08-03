// components/Banner.js
import React from 'react';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/system';

const styles = {
  banner: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    padding: '1rem',
    display: 'block',
    transition: 'display 0.3s ease',
    textAlign: 'center',
  },
  heading: {
    fontFamily: 'lemon-milk',
    color: '#E8E6E6',
    marginLeft: '100px',
    marginTop: '-40px',
    fontSize: '25px',
    textAlign: 'left',
  },
};

const StyledAvatar = styled(Avatar)({
  width: 50,
  height: 50,
  marginBottom: -20,
});


// const text = 'Hello There, World!';
const text = 'Coding, coffee, and a sprinkle of stardust!';
const Banner = () => (
  <div style={styles.banner}>
    <StyledAvatar alt="User Avatar" src="/logo.png" />
    <h1 style={styles.heading}> {text}</h1>
  </div>
);

export default Banner;
