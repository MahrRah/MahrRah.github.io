import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from '../components/BlackholeScene'
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import Link from 'next/link';

const styles = {
  topSection: {
    position: 'relative',
    width: '100%',
    height: '100vh', // Top 1/3 of the viewport height
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  container: {
    height: '400vh', // Makes the div content scrollable
  },
  banner: (isHidden) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    background: '#000000',
    padding: '1rem',
    display: isHidden ? 'none' : 'block',
    transition: 'display 0.3s ease',
    textAlign: 'center'
  }),
  navigation: (isVisible) => ({
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    background: '#000000',
    padding: '1rem',
    display: isVisible ? 'block' : 'none',
    transition: 'display 0.3s ease',
    textAlign: 'center'
  }),
  canvasContainer: {
    height: '30vh',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1, // Ensure the canvas is behind other content
  },
};

const HomePage = () => {
  const [isBannerHidden, setIsBannerHidden] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsBannerHidden(scrollTop > 0);
    setIsNavVisible(scrollTop > window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const numStars = 200;
  const colors = ['#2F302E', '#616064', '#5C4F43', '#353F4C', '#6A6151'];
  const colorBlackhole = '#000000';
  const colorAccretion = '#E8E6E6';
  return (
    <div style={styles.container}>
      <div style={styles.banner(isBannerHidden)}>
        <Typography className="title">
          Coming soon...
        </Typography>
      </div>
      <div style={styles.canvasContainer} >
        <div style={styles.topSection} >
          <Canvas gl={{ antialias: true }}>
            <ambientLight intensity={0.01} />
            <Scene
              numStars={numStars}
              colors={colors}
              colorBlackhole={colorBlackhole}
              colorAccretion={colorAccretion}
            />
          </Canvas>
        </div>
      </div>
      <div style={styles.navigation(isNavVisible)}>
        <Button variant="text"><Link href="/about">About</Link></Button>
        <Button variant="text"><Link href="https://dev.to/mahrrah">Blog</Link></Button>
      </div>
    </div>
  );
};

export default HomePage;
