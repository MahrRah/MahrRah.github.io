import React, { useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTransform, useScroll, useTime } from 'framer-motion';
import { degreesToRadians } from 'popmotion';
import { Page } from '../components/PagesEnum';
import Scene from '../components/BlackholeScene';
import Banner from '../components/Banner';
import NavigationBar from '../components/Navigation';
import AboutMe from '../components/AboutMe';

const styles = {
  topSection: {
    position: 'relative',
    width: '100%',
    height: '100vh', // Top 1/3 of the viewport height
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  container: {
    height: '800vh', // Makes the div content scrollable
    alignContent: 'baseline',
  },
  canvasContainer: {
    height: '30vh',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1, // Ensure the canvas is behind other content
  }
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
    setPage(scrollTop > window.innerHeight ? Page.About : Page.Home);
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
    setLookAtCoordinates([0, -1, 0]);
    if (page === Page.Home) {
      setShouldScroll(true);
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
    else {
      window.scroll({ top: document.body.scrollHeight / 2, left: 0, behavior: 'smooth' });
    }
  };



  return (
    <div style={styles.container}>
      <Banner isHidden={isBannerHidden} />
      <div style={styles.canvasContainer}>
        <div style={styles.topSection}>
          <Canvas gl={{ antialias: true }} >
            <CustomCamera shouldScroll={shouldScroll} />
            <ambientLight intensity={0.01} />
            <Scene />
          </Canvas>
        </div>
      </div>
      <NavigationBar isVisible={isNavVisible} currentPage={currentPage} setPage={switchScene} />
      {currentPage == Page.About && isNavVisible && <AboutMe />}
    </div>
  );
};



function CustomCamera({ shouldScroll }) {
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
