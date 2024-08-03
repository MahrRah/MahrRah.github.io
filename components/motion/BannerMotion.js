import Banner from '../base/Banner';
import { useTransform, useScroll, motion } from 'framer-motion';

const BannerMotion = ({ scrollRange, opacityRange }) => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, scrollRange, opacityRange);

  return (
    <motion.div style={{ opacity: opacity }}>
      <Banner />
    </motion.div>
  );
};

export default BannerMotion;
