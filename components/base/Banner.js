import React from 'react';

const styles = {
  banner: {
    position: 'fixed',
    top: 0,
    left: 0,
    padding: '1rem',
    display: 'block',
    textAlign: 'center',
    top: '50%',
    left: 0,
    width: '50%',
    transform: 'translateY(-50%)',
  },
  heading: {
    fontFamily: 'lemon-milk',
    color: '#E8E6E6',
    marginLeft: '70px',
    marginTop: '-41px',
    fontSize: '15px',
    textAlign: 'right',
  },
};

const text = '... with coding, coffee,\n and a sprinkle of stardust!';

const Banner = () => (
  <div style={styles.banner}>
    <h1>
      <pre style={styles.heading}> {text}</pre>
    </h1>
  </div>
);

export default Banner;
