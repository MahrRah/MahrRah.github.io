// Scene.js
import React, { useLayoutEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { useTransform, useScroll, useTime } from 'framer-motion';
import { degreesToRadians } from 'popmotion';
import BlackHole from './blackhole/BlackHole'

const Scene = ({
  numStars = 200,
  colors,
  colorBlackhole,
  colorAccretion
}) => {
  const gl = useThree((state) => state.gl);
  
  useLayoutEffect(() => gl.setPixelRatio(window.devicePixelRatio));

  return (
    <>
      <BlackHole
        numStars={numStars}
        colors={colors}
        colorBlackhole={colorBlackhole}
        colorAccretion={colorAccretion}
      />
    </>
  );
};

export default Scene;
