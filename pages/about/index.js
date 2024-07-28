

import Blackhole from '../components/BlackholeStatic';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/system';

export default function About() {
  const StyledAvatar = styled(Avatar)({
    width: 80,
    height: 80,
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
      top: '50%', // Centers the box vertically within the top section
      left: '50px', // 50px from the left border
      transform: 'translateY(-50%)', // Adjusts for the height of the box
      backgroundColor: 'black',
      color: 'white',
      padding: '20px',
      borderRadius: '10px',
      maxWidth: 'calc(100% - 100px)', // Ensures the box doesn't overflow the screen
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Centers the avatar horizontally
    },
    textContainer: {
      textAlign: 'left', // Aligns the text to the left
      width: '100%',
    },
    heading: {
      margin: 0,
    },
    paragraph: {
      margin: 0,
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

  return (
    <div style={styles.app}>
      <div style={styles.topSection}>
        <div style={styles.canvasWrapper}>
          <Blackhole status="static" />
        </div>
        <div style={styles.aboutMe}>

          <StyledAvatar alt="User Avatar" src="/avatar.jpg" />
          <div style={styles.textContainer}>
            <h1 style={styles.heading}>About Me</h1>
            <p style={styles.paragraph}>This is the about me section.</p>
          </div>
        </div>
      </div>
    </div>
  );
}