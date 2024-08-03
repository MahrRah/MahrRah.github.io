
import AboutMe from '../base/AboutMe';
import { useTransform, useScroll, motion } from 'framer-motion';


const styles = {
    motionDiv: {
        position: 'fixed',
        top: '50%',
        left: 0,
        width: '100%',
        transform: 'translateY(-50%)',
    }
}
const AboutMeMotion = ({ scrollRange, xMovementRange }) => {
    const { scrollYProgress } = useScroll();
    const xTransform = useTransform(scrollYProgress, scrollRange, xMovementRange);

    return (
        <motion.div style={{ ...styles.motionDiv, x: xTransform }}>
            <AboutMe />
        </motion.div>
    );
};


export default AboutMeMotion;