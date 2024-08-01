import React, { useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTransform, useScroll, useTime } from 'framer-motion';
import { degreesToRadians } from 'popmotion';
import Scene from '../components/BlackholeScene';
import Banner from '../components/Banner';
import NavigationBar from '../components/Navigation';
import { Page } from '../components/PagesEnum';

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
  const [currentPage, setPage] = useState(Page.Home);
  const [shouldScroll, setShouldScroll] = useState(true);
  const [lookAtCoordinates, setLookAtCoordinates] = useState([0, 0, 0]);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsBannerHidden(scrollTop > 0);
    setIsNavVisible(scrollTop > window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const switchScene = (page) => {
    setPage(page);
    setShouldScroll(false);
    setLookAtCoordinates([0, -2, 0]);
    if (page === Page.Home) {
      setShouldScroll(true);
      window.scrollTo(0, 0); 
    }
    else {
      window.scrollTo(0, document.body.scrollHeight); 
    }
  };



  return (
    <div style={styles.container}>
      <Banner isHidden={isBannerHidden} />
      <div style={styles.canvasContainer}>
        <div style={styles.topSection}>
          <Canvas gl={{ antialias: true }} >
            <MyCameraReactsToStateChanges shouldScroll={shouldScroll} />
            <ambientLight intensity={0.01} />
            <Scene />
          </Canvas>
        </div>
      </div>
      <NavigationBar isVisible={isNavVisible} currentPage={currentPage} setPage={switchScene} />
    </div>
  );
};



function MyCameraReactsToStateChanges({ shouldScroll }) {
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(scrollYProgress, [0, 1], [0.0001, degreesToRadians(90)]);
  const distance = useTransform(scrollYProgress, [0, 1], [10, 5]);
  const time = useTime();


  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(distance.get(), yAngle.get(), time.get() * 0.0001);
    camera.updateProjectionMatrix();
    if (shouldScroll) {
      camera.lookAt(0, 0, 0);
    } else {
      camera.lookAt(2, -2, 0);
    }

  });
}


export default HomePage;
