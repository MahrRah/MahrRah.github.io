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
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(scrollYProgress, [0, 1], [0.0001, degreesToRadians(90)]);
  const distance = useTransform(scrollYProgress, [0, 1], [10, 5]);
  const time = useTime();

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(distance.get(), yAngle.get(), time.get() * 0.0001);
    // camera.fov = 35;
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

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
