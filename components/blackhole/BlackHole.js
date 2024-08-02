// BlackHole.js
import React from 'react';
import AccretionDiskCloud from './AccretionDiskCloud';
import Cloud from './GalacticCloud';
import Singularity from './Singularity';
import { progress } from 'popmotion';

const BlackHole = ({
  colors = ['#2F302E', '#5F6263', '#302B4C', '#4D4636', '#6A6151', '#8C7746', '#BCCEE2',"#202422"],
  colorBlackhole = '#000000',
  colorAccretion = '#E8E6E6'
}) => {
  const createStars = (count, radius, minRadius, maxRadius, color) =>
    Array.from({ length: count }, (_, i) => (
      <Cloud
        key={i}
        radius={radius}
        p={progress(0, count, i)}
        color={color}
        initialMinRadius={minRadius}
        initialMaxRadius={maxRadius}
        minYAngle={80}
        maxYAngle={100}
        minDistance={1}
        maxDistance={0.3}
        distanceDuration={100000000}
        rotationSpeed={0.001}
      />
    ));

  const createAccretionDisk = (count, radius, color) =>
    Array.from({ length: count }, (_, i) => (
      <AccretionDiskCloud
        key={i}
        p={progress(0, count, i)}
        color={color}
        initialMinRadius={radius}
        initialMaxRadius={3.0}
        minYAngle={85}
        maxYAngle={95}
        minOpacity={0.0001}
        maxOpacity={1}
        opacityIncrement={0.1}
        rotationSpeed={0.01}
        gravityMin={0.01}
        gravityMax={1}
        gravityDuration={10000000}
        resetDistance={0.6}
      />
    ));

  return (
    <>
      <Singularity color={colorBlackhole} radius={0.5} />
      {createAccretionDisk(200 * 2, 0.01, colorAccretion)}
      {createStars(100, 0.05, 2, 3.5, colors[0])}
      {createStars(100, 0.01, 2, 3.5, colors[1])}
      {createStars(200, 0.02, 2, 4.5, colors[2])}
      {createStars(200, 0.03, 2, 4.5, colors[3])}
      {createStars(200, 0.03, 2, 4.5, colors[4])}
      {createStars(100, 0.01, 2, 4.5, colors[5])}
      {createStars(100, 0.01, 2, 4.5, colors[6])}
      {createStars(100, 0.3, 2, 4.5, colors[7])}
    </>
  );
};

export default BlackHole;
