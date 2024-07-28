import React, { useRef, useLayoutEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { mix, degreesToRadians } from 'popmotion';

const Cloud = ({
    p,
    radius = 0.05,
    color = '#FFFFFF',
    initialMinRadius = 2,
    initialMaxRadius = 3.5,
    minYAngle = 80,
    maxYAngle = 100,
    minDistance = 1,
    maxDistance = 0.3,
    distanceDuration = 10000000,
    rotationSpeed = 0.01
  }) => {
    const ref = useRef(null);
    const initialDistance = useRef(mix(initialMinRadius, initialMaxRadius, Math.random()));
    const yAngle = useRef(mix(degreesToRadians(minYAngle), degreesToRadians(maxYAngle), Math.random()));
    const initialPosition = useMemo(() => {
      const xAngle = degreesToRadians(360) * p;
      const position = new THREE.Vector3();
      position.setFromSphericalCoords(initialDistance.current, yAngle.current, xAngle);
      return position;
    }, [p]);
  
    useLayoutEffect(() => {
      ref.current.position.copy(initialPosition);
    }, [initialPosition]);
  
    useFrame(({ clock }) => {
      const elapsedTime = clock.getElapsedTime();
      const distance = mix(minDistance, maxDistance, elapsedTime / distanceDuration);
      const currentLength = ref.current.position.length();
      ref.current.position.setLength(currentLength * distance);
  
      ref.current.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), rotationSpeed);
    });
  
    const vertexShader = `
      varying float vAlpha;
      void main() {
        vec3 transformed = position;
        float distance = length(position);
        vAlpha = 1.0 - distance;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
      }
    `;
  
    const fragmentShader = `
      varying float vAlpha;
      uniform vec3 color;
      void main() {
        gl_FragColor = vec4(color, vAlpha);
      }
    `;
  
    const material = useMemo(() => new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        color: { value: new THREE.Color(color) },
      },
      transparent: true,
    }), [color]);
  
    return (
      <mesh ref={ref}>
        <icosahedronGeometry args={[radius, 2]} />
        <primitive attach="material" object={material} />
      </mesh>
    );
  };
  
  export default Cloud;
