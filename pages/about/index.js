import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import StaticScene from '../../components/BlackholeStatic';
import { Canvas } from '@react-three/fiber';
import NavigationBar from '../../components/Navigation';

export default function About() {
  const StyledAvatar = styled(Avatar)({
    width: 150,
    height: 150,
    marginBottom: 20,
  });

  const styles = {
    app: {
      textAlign: 'center',
    },
    topSection: {
      position: 'relative',
      width: '100%',
      height: '33vh', // Top 1/3 of the viewport height
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    aboutMe: {
      position: 'absolute',
      top: '130%', // Centers the box vertically within the top section
      left: '15px', // Centers the box horizontally (50% width, so offset by 25%)
      transform: 'translateY(-50%)', // Adjusts for the height of the box
      width: '50vw', // Sets the width to 50% of the viewport width
      backgroundColor: 'black',
      color: 'white',
      padding: '30px',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Centers the avatar horizontally
      zIndex: 1, // Ensures the box is above the canvas
    },
    textContainer: {
      textAlign: 'left', // Aligns the text to the left
      width: '100%',
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
    },
    canvasWrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1, // Ensure the canvas is behind other elements
    },
  };

  const aboutMeText = "Hi there, I am Mahra, a Software Engineer at Microsoft with a background in astrophysics. Basically, a physics nerd who has lost her way in the world of tech. I used to analyze emissions from galaxies containing active supermassive black holes. Now I work on various cloud-based solutions as part of one of many Microsoft ISE teams. These range from cloud to edge-based applications for manufacturing use cases to LLM-based code generation solutions.";
  const numStars = 200;
  const colors = ['#2F302E', '#616064', '#5C4F43', '#353F4C', '#6A6151'];
  const colorBlackhole = '#000000';
  const colorAccretion = '#E8E6E6';

  return (
    <div style={styles.app}>
      <div style={styles.topSection}>
        <div style={styles.canvasWrapper}>
          <Canvas gl={{ antialias: true }}>
            <ambientLight intensity={0.01} />
            <StaticScene
              numStars={numStars}
              colors={colors}
              colorBlackhole={colorBlackhole}
              colorAccretion={colorAccretion}
            />
          </Canvas>
        </div>
        <div style={styles.aboutMe}>
          <StyledAvatar alt="User Avatar" src="/avatar.jpg" />
          <div style={styles.textContainer}>
            <h1 style={styles.heading}>About Me</h1>
            <p style={styles.paragraph}>{aboutMeText}</p>
            <div style={styles.button_wrapper}>
              <Button variant="outlined" sx={styles.button} href="mailto:mahra.rah@gmail.com">Contact Me</Button>
            </div>
          </div>
        </div>
      </div>
      <NavigationBar />
    </div>
  );
}
