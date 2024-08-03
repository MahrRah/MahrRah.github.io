import Header from '../base/Header';
import { useTransform, useScroll, motion } from 'framer-motion';

const HeaderMotion = ({ scrollRange, opacityRange }) => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, scrollRange, opacityRange);

  return (
    <motion.div style={{ opacity: opacity }}>
      <Header />
    </motion.div>
  );
};

export default HeaderMotion;
