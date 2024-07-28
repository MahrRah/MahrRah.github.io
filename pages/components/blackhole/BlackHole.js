// BlackHole.js
import React from 'react';
import AccretionDiskCloud from './AccretionDiskCloud';
import Cloud from './GalacticCloud';
import Singularity from './Singularity';
import { progress } from 'popmotion';

const BlackHole = ({
  numStars = 200,
  colors = ['#2F302E', '#616064', '#5C4F43', '#353F4C', '#6A6151'],
  colorBlackhole = '#000000',
  colorAccretion = '#E8E6E6'
}) => {
  const createStars = (count, radius, color) =>
    Array.from({ length: count }, (_, i) => (
      <Cloud
        key={i}
        p={progress(0, numStars, i)}
        radius={radius}
        color={color}
        initialMinRadius={2}
        initialMaxRadius={3.5}
        minYAngle={80}
        maxYAngle={100}
        minDistance={1}
        maxDistance={0.3}
        distanceDuration={10000000}
        rotationSpeed={0.01}
      />
    ));

  const createAccretionDisk = (count, radius, color) =>
    Array.from({ length: count }, (_, i) => (
      <AccretionDiskCloud
        key={i}
        p={progress(0, numStars, i)}
        color={color}
        initialMinRadius={radius}
        initialMaxRadius={3.0}
        minYAngle={85}
        maxYAngle={95}
        minOpacity={0.0001}
        maxOpacity={1}
        opacityIncrement={0.03}
        rotationSpeed={0.01}
        gravityMin={0.1}
        gravityMax={1}
        gravityDuration={10000}
        resetDistance={0.1}
      />
    ));

  return (
    <>
      <Singularity color={colorBlackhole} radius={0.5} />
      {createAccretionDisk(numStars * 2, 0.01, colorAccretion)}
      {createStars(numStars, 0.01, colors[1])}
      {createStars(numStars, 0.03, colors[2])}
      {createStars(numStars, 0.05, colors[0])}
    </>
  );
};

export default BlackHole;
