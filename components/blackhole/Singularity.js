import React from 'react';

const Singularity = ({ color = '#000000', radius = 0.5 }) => (
  <mesh rotation-x={0.35}>
    <sphereGeometry args={[radius, 32]} />
    <meshLambertMaterial color={color} />
  </mesh>
);

export default Singularity;
