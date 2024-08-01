import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTransform, useScroll, useTime } from 'framer-motion';
import { degreesToRadians } from 'popmotion';
import { styled } from '@mui/system';
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
    alignContent: 'baseline',
  },
  canvasContainer: {
    height: '30vh',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1, // Ensure the canvas is behind other content
  },
  aboutMe: {
    position: 'fixed',
    bottom: '50%', // Add a small separation from the bottom
    left: 0,
    transform: 'translate(15px, 50%)',
    width: '50vw',
    backgroundColor: 'black',
    color: 'white',
    padding: '30px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 1,
  },
  textContainer: {
    textAlign: 'left',
    hight: '100vh',
  },
  heading: {
    margin: '0 0 10px 0',
    fontSize: '24px',
    fontFamily: 'lemon-milk',

  },
  button_wrapper: { textAlign: 'center' },
  button: {
    marginTop: '20px',
    fontSize: '15px',
    fontFamily: 'lemon-milk',
    color: '#CEBE9C',
    borderColor: '#CEBE9C',
    borderRadius: 28
  },
  paragraph: {
    margin: '0',
    fontSize: '16px',
    textAlign: 'justify',
  },
};
const StyledAvatar = styled(Avatar)({
  width: 150,
  height: 150,
  marginBottom: 20,
});

const HomePage = () => {
  const [isBannerHidden, setIsBannerHidden] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [currentPage, setPage] = useState(Page.Home);
  const [shouldScroll, setShouldScroll] = useState(true);
  const [lookAtCoordinates, setLookAtCoordinates] = useState([0, 0, 0]);



  const aboutMeText = "Hi there, I am Mahra, a Software Engineer at Microsoft with a background in astrophysics. Basically, a physics nerd who has lost her way in the world of tech. I used to analyze emissions from galaxies containing active supermassive black holes. Now I work on various cloud-based solutions as part of one of many Microsoft ISE teams. These range from cloud to edge-based applications for manufacturing use cases to LLM-based code generation solutions.";


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
    setLookAtCoordinates([0, -1, 0]);
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
      { currentPage==Page.About && isNavVisible && <div style={styles.aboutMe}>
        <StyledAvatar alt="User Avatar" src="/avatar.jpg" />
        <div style={styles.textContainer}>
          <h1 style={styles.heading}>About Me</h1>
          <p style={styles.paragraph}>{aboutMeText}</p>
          <div style={styles.button_wrapper}>
            <Button variant="outlined" sx={styles.button} href="mailto:mahra.rah@gmail.com">Contact Me</Button>
          </div>
        </div>
      </div>}
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
      camera.lookAt(0, -2, 0);
    }

  });
}


export default HomePage;
