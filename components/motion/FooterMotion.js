import Footer from '../base/Footer';
import { useTransform, useScroll, motion } from 'framer-motion';

const styles = {
  motionDiv: {
    position: 'fixed',
    bottom: 0,
    left: '50%',
    transform: 'translateY(-50%)',
  },
};
const FooterMotion = ({ scrollRange, yMovementRange }) => {
  const { scrollYProgress } = useScroll();
  const yTransform = useTransform(scrollYProgress, scrollRange, yMovementRange);

  return (
    <motion.div style={{ ...styles.motionDiv, y: yTransform }}>
      <Footer />
    </motion.div>
  );
};

export default FooterMotion;
