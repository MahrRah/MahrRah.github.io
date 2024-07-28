'use client';
import React, { useRef, useLayoutEffect } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useTransform, useScroll, useTime } from 'framer-motion';
import { degreesToRadians, progress, mix } from 'popmotion';
import * as THREE from 'three';

// Color definitions
const colors = ['#2F302E', '#616064', '#5C4F43', '#353F4C', '#6A6151'];
const colorBlackhole = '#000000';
const colorAccretion = '#E8E6E6';

// AccretionDisc component
const AccretionDisc = ({ p }) => {
//   const ref = useRef(null);
  const ref = useRef(null);
  const initialDistance = useRef(mix(0.1, 5.5, Math.random()));
  const yAngle = useRef(mix(degreesToRadians(80), degreesToRadians(100), Math.random()));

  useLayoutEffect(() => {
    const xAngle = degreesToRadians(360) * p;
    ref.current.position.setFromSphericalCoords(initialDistance.current, yAngle.current, xAngle);
  }, [p]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const gravity = mix(1, 0.3, elapsedTime / 19000); // Adjust the values as needed
    const currentLength = ref.current.position.length();
    ref.current.position.setLength(currentLength * gravity);

    // Add swirling motion
    const rotationSpeed = 0.00003; // Adjust this value for speed of rotation
    ref.current.position.applyAxisAngle(
      new THREE.Vector3(0, 1, 0), 
      rotationSpeed * elapsedTime
    );
  });


  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.01, 10]} />
      <meshBasicMaterial color={colorAccretion} />
    </mesh>
  );
};

// Icosahedron component
const Icosahedron = () => (
  <mesh rotation-x={0.35}>
    <sphereGeometry args={[0.5, 32]} />
    <meshLambertMaterial color={colorBlackhole} />
  </mesh>
);

// Star component
const Star = ({ p, radius, color }) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const distance = mix(2, 3.5, Math.random());
    const yAngle = mix(degreesToRadians(80), degreesToRadians(100), Math.random());
    const xAngle = degreesToRadians(360) * p;
    ref.current.position.setFromSphericalCoords(distance, yAngle, xAngle);
  });

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const distance = mix(1, 0.3, elapsedTime / 10000000); // Adjust the values as needed
    const currentLength = ref.current.position.length();
    ref.current.position.setLength(currentLength * distance);
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[radius, 2]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

// Scene component
const Scene = ({ numStars = 200 }) => {
  const gl = useThree((state) => state.gl);
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(scrollYProgress, [0, 1], [0.0001, degreesToRadians(90)]);
  const distance = useTransform(scrollYProgress, [0, 1], [10, 8]);
  const time = useTime();

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(distance.get(), yAngle.get(), time.get() * 0.0001);
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  useLayoutEffect(() => gl.setPixelRatio(window.devicePixelRatio));

  const createStars = (count, radius, color) =>
    Array.from({ length: count }, (_, i) => <Star key={i} p={progress(0, numStars, i)} radius={radius} color={color} />);
  const createAccretionDisk = (count, radius, color) =>
    Array.from({ length: count }, (_, i) => <AccretionDisc key={i} p={progress(0, numStars, i)} radius={radius} color={color} />);


  return (
    <>
      <Icosahedron />
      {createAccretionDisk(numStars * 5, 0.01, colorAccretion)}
      {createStars(numStars, 0.01, colors[1])}
      {createStars(numStars, 0.03, colors[2])}
      {createStars(numStars, 0.05, colors[0])}
    </>
  );
};

// Main component
export default function Blackhole({ numStars = 200 }) {
  return (
    <div className="container">
      <Canvas gl={{ antialias: true }}>
        <ambientLight intensity={10} />
        <Scene numStars={numStars} />
      </Canvas>
    </div>
  );
}
