import React from 'react';
import Banner from '../base/Banner';
import { useTransform, useScroll, motion } from 'framer-motion';

const styles = {
  motionDiv: {
    position: 'fixed',
    top: '10%',
    left: 0,
    width: '100%',
    transform: 'translateY(-50%)',
  },
};

const BannerMotion = ({ scrollRange, xMovementRange, opacityRange }) => {
  const { scrollYProgress } = useScroll();
  const xTransform = useTransform(scrollYProgress, scrollRange, xMovementRange);
  const opacity = useTransform(scrollYProgress, scrollRange, opacityRange);

  return (
    <motion.div style={{ ...styles.motionDiv, x: xTransform, opacity: opacity }}>
      <Banner />
    </motion.div>
  );
};

export default BannerMotion;
