import React, { useRef, useMemo, useLayoutEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { mix, degreesToRadians } from 'popmotion';

const AccretionDiskCloud = ({
  p,
  color = '#E8E6E6',
  initialMinRadius = 0.1,
  initialMaxRadius = 5.5,
  minYAngle = 80,
  maxYAngle = 100,
  minOpacity = 0,
  maxOpacity = 1,
  opacityIncrement = 0.01,
  rotationSpeed = 0.01,
  gravityMin = 0.3,
  gravityMax = 1,
  gravityDuration = 19000,
  resetDistance = 0.1
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

  const initialOpacity = useMemo(() => {
    const distanceFraction = (initialDistance.current - initialMinRadius) / (initialMaxRadius - initialMinRadius);
    return mix(minOpacity, maxOpacity, distanceFraction);
  }, [initialDistance, initialMinRadius, initialMaxRadius, minOpacity, maxOpacity]);

  const opacity = useRef({ value: initialOpacity });

  const vertexShader = `
    varying float vAlpha;
    void main() {
      vec3 transformed = position;
      float distance = length(position);
      vAlpha = 1.0 - distance / ${initialMaxRadius.toFixed(1)};
      gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
    }
  `;

  const fragmentShader = `
    uniform vec3 color;
    uniform float opacity;
    varying float vAlpha;
    void main() {
      gl_FragColor = vec4(color, opacity * vAlpha);
    }
  `;

  const material = useMemo(() => new THREE.ShaderMaterial({
    uniforms: {
      color: { value: new THREE.Color(color) },
      opacity: opacity.current,
    },
    vertexShader,
    fragmentShader,
    transparent: true,
  }), [color]);

  useLayoutEffect(() => {
    ref.current.position.copy(initialPosition);
    opacity.current.value = minOpacity; // Start with initial opacity
  }, [initialPosition, minOpacity]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const gravity = mix(gravityMax, gravityMin, elapsedTime / gravityDuration);
    const currentLength = ref.current.position.length();
    ref.current.position.setLength(currentLength * gravity);

    ref.current.position.applyAxisAngle(
      new THREE.Vector3(0, 1, 0),
      rotationSpeed
    );

    opacity.current.value = Math.min(maxOpacity, opacity.current.value + opacityIncrement);

    if (ref.current.position.length() < resetDistance) {
      ref.current.position.copy(initialPosition);
      opacity.current.value = initialOpacity;
    }

    material.uniforms.opacity.value = opacity.current.value;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.01, 10]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

export default AccretionDiskCloud;
