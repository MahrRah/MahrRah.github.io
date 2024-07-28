import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from '../components/BlackholeScene';
import Banner from '../components/Banner';
import NavigationBar from '../components/Navigation';

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

  return (
    <div style={styles.container}>
      <Banner isHidden={isBannerHidden} />
      <div style={styles.canvasContainer}>
        <div style={styles.topSection}>
          <Canvas gl={{ antialias: true }}>
            <ambientLight intensity={0.01} />
            <Scene />
          </Canvas>
        </div>
      </div>
      <NavigationBar isVisible={isNavVisible} isHome={false}/>
    </div>
  );
};

export default HomePage;
