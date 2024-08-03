import React, { useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTransform, useScroll, useTime, motion } from 'framer-motion';
import { degreesToRadians } from 'popmotion';
import { Page } from '../components/PagesEnum';
import Scene from '../components/BlackholeScene';
import Banner from '../components/Banner';
import NavigationBar from '../components/Navigation';
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';

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
  motionDiv: {
    position: 'fixed',
    top: '50%',
    left: 0,
    width: '100%',
    transform: 'translateY(-50%)',
  },
};

const HomePage = () => {
  const [currentPage, setPage] = useState(Page.Home);
  const [isBannerHidden, setIsBannerHidden] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(true);
  const [isFooterHidden, setIsFooterHidden] = useState(true);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    setIsBannerHidden(scrollTop > 0);
    setIsNavHidden(!(scrollTop > window.innerHeight));
    setPage(scrollTop > window.innerHeight ? Page.About : Page.Home);


    // const windowHeight = window.innerHeight;
    // const scrollThreshold1 = windowHeight * 0.2;
    // const scrollThreshold2 = windowHeight * 0.9 ; // Assuming there are 3 sections in total

    // if (scrollTop < scrollThreshold1) {
    //   setPage(Page.Home);
    //   setIsNavHidden(true);
    //   setIsBannerHidden(false);
    //   setIsFooterHidden(true);
    // } else if (scrollTop >= scrollThreshold1 && scrollTop < scrollThreshold2) {
    //   setPage(Page.About);
    //   setIsNavHidden(false);
    //   setIsBannerHidden(true);
    //   setIsFooterHidden(true);
    // } else {
    //   setPage(Page.Footer);
    //   setIsNavHidden(false);
    //   setIsBannerHidden(true);
    //   setIsFooterHidden(false);
    // }
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
      window.scroll({ top: window.innerHeight * 3, left: 0, behavior: 'smooth' });
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
      <Banner isHidden={isBannerHidden} />
      <NavigationBar isHidden={isNavHidden} currentPage={currentPage} setPage={switchScene} />
      {currentPage === Page.About && <MotionAboutMe />}
      {!isFooterHidden && <Footer isHidden={isFooterHidden} />}
    </div>
  );
};

const MotionAboutMe = () => {
  const { scrollYProgress } = useScroll();
  const xTransform = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [-window.innerWidth * 0.9, window.innerWidth * 0.01, window.innerWidth * 0.01, -window.innerWidth * 0.9]);

  return (
    <motion.div style={{ ...styles.motionDiv, x: xTransform }}>
      <AboutMe />
    </motion.div>
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
