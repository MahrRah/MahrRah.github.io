import Navigation from '../base/Navigation';
import { useTransform, useScroll, motion } from 'framer-motion';

const NavigationMotion = ({ scrollRange, opacityRange, currentPage, setPage }) => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, scrollRange, opacityRange);

  return (
    <motion.div style={{ opacity: opacity }}>
      <Navigation currentPage={currentPage} setPage={setPage} />
    </motion.div>
  );
};

export default NavigationMotion;
