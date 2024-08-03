import React, { useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTransform, useScroll, useTime } from 'framer-motion';
import { degreesToRadians } from 'popmotion';
import { Page } from '../components/util/PagesEnum';
import Scene from '../components/BlackholeScene';
import BannerMotion from '../components/motion/BannerMotion';
import AboutMeMotion from '../components/motion/AboutMeMotion';
import NavigationMotion from '../components/motion/NavigationMotion';
import FooterMotion from '../components/motion/FooterMotion';

const styles = {
  topSection: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  container: {
    height: '1000vh', // Adjusted height to accommodate all sections and scrolling
  },
  canvasContainer: {
    height: '30vh',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
  },
};

const HomePage = () => {
  const [currentPage, setPage] = useState(Page.Home);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > window.innerHeight) {
      setPage(Page.About);
    } else {
      setPage(Page.Home);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const switchScene = (page) => {
    setPage(page);

    if (page === Page.Home) {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    } else if (page === Page.About) {
      window.scroll({
        top: window.innerHeight * 3,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.canvasContainer}>
        <div style={styles.topSection}>
          <Canvas gl={{ antialias: true }}>
            <CustomCamera />
            <ambientLight intensity={0.01} />
            <Scene />
          </Canvas>
        </div>
      </div>
      <BannerMotion scrollRange={[0, 0.2, 1]} opacityRange={[1, 0, 0]} />
      <NavigationMotion
        scrollRange={[0, 0.1, 1]}
        opacityRange={[0, 1, 1]}
        currentPage={currentPage}
        setPage={switchScene}
      />
      {currentPage === Page.About && (
        <AboutMeMotion
          scrollRange={[0, 0.3, 0.6, 1]}
          xMovementRange={[
            -window.innerWidth * 0.9,
            window.innerWidth * 0.01,
            window.innerWidth * 0.01,
            -window.innerWidth * 0.9,
          ]}
        />
      )}
      <FooterMotion scrollRange={[0, 0.8, 0.8, 1]} yMovementRange={[1000, 1000, 0, 0]} />
    </div>
  );
};

function CustomCamera() {
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(scrollYProgress, [0, 1], [0.00001, degreesToRadians(180)]);
  const distance = useTransform(scrollYProgress, [0, 1], [10, 5]);
  const time = useTime();

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(distance.get(), yAngle.get(), time.get() * 0.0001);
    camera.updateProjectionMatrix();
    camera.lookAt(0, -2, 0);
  });
}

export default HomePage;
