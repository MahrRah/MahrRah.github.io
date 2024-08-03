// Scene.js
import React, { useLayoutEffect } from 'react';
import { useThree } from '@react-three/fiber';
import BlackHole from './blackhole/BlackHole';

const Scene = ({ numStars = 200, colors, colorBlackhole, colorAccretion }) => {
  const gl = useThree((state) => state.gl);

  useLayoutEffect(() => gl.setPixelRatio(window.devicePixelRatio));

  return (
    <>
      <BlackHole numStars={numStars} colors={colors} colorBlackhole={colorBlackhole} colorAccretion={colorAccretion} />
    </>
  );
};

export default Scene;
