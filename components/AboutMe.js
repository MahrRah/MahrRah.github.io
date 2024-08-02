
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';


const styles = {
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
        boxShadow: '10px 0px 50px 5px #151716',
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

const AboutMe = (() => {
    const aboutMeText = "Hi there, I am Mahra, a Software Engineer at Microsoft with a background in astrophysics. Basically, a physics nerd who has lost her way in the world of tech. I used to analyze emissions from galaxies containing active supermassive black holes. Now I work on various cloud-based solutions as part of one of many Microsoft ISE teams. These range from cloud to edge-based applications for manufacturing use cases to LLM-based code generation solutions.";

    return <div style={styles.aboutMe}>
        <StyledAvatar alt="User Avatar" src="/avatar.jpg" />
        <div style={styles.textContainer}>
            <h1 style={styles.heading}>About Me</h1>
            <p style={styles.paragraph}>{aboutMeText}</p>
            <div style={styles.button_wrapper}>
                <Button variant="outlined" sx={styles.button} href="mailto:mahra.rah@gmail.com">Contact Me</Button>
            </div>
        </div>
    </div>
});

export default AboutMe;