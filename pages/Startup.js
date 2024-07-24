'use client';
import React from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";

const color_cloud = "#363c45";
const color_blackhole = "#2306f9";
const color_accretion = "#a87732";

const AccretionDisc = ({ p }) => {
    const ref = useRef(null);
    const { clock } = useThree();

    useLayoutEffect(() => {
        const distance = mix(2, 3.5, Math.random());
        const yAngle = mix(
            degreesToRadians(80),
            degreesToRadians(100),
            Math.random()
        );
        const xAngle = degreesToRadians(360) * p;
        ref.current.position.setFromSphericalCoords(distance, yAngle, xAngle);
    });

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        const distance = mix(0.4, 0.0, elapsedTime / 100000); // Adjust the values as needed
        const currentLength = ref.current.position.length();
        ref.current.position.setLength(currentLength * distance);
    });


    return (
        <mesh ref={ref}>
            <icosahedronGeometry args={[0.01, 3]} />
            <meshBasicMaterial color={color_cloud} />
        </mesh>
    );
};


const Icosahedron = () => (
    <mesh rotation-x={0.35}>
        <sphereGeometry args={[0.5, 32]} />
        <meshLambertMaterial color={color_blackhole} />
    </mesh>
);

const Star = ({ p }) => {
    const ref = useRef(null);
    const { clock } = useThree();

    useLayoutEffect(() => {
        const distance = mix(2, 3.5, Math.random());
        const yAngle = mix(
            degreesToRadians(80),
            degreesToRadians(100),
            Math.random()
        );
        const xAngle = degreesToRadians(360) * p;
        ref.current.position.setFromSphericalCoords(distance, yAngle, xAngle);
    });

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        const distance = mix(1, 0.3, elapsedTime / 1000000); // Adjust the values as needed
        const currentLength = ref.current.position.length();
        ref.current.position.setLength(currentLength * distance);
    });


    return (
        <mesh ref={ref}>
            <icosahedronGeometry args={[0.05, 2]} />
            <meshBasicMaterial color={color_cloud} />
        </mesh>
    );
};



function Scene({ numStars = 200 }) {
    const gl = useThree((state) => state.gl);
    const { scrollYProgress } = useScroll();
    const yAngle = useTransform(
        scrollYProgress,
        [0, 1],
        [0.001, degreesToRadians(180)]
    );
    const distance = useTransform(scrollYProgress, [0, 1], [10, 5]);
    const time = useTime();

    useFrame(({ camera }) => {
        camera.position.setFromSphericalCoords(
            distance.get(),
            yAngle.get(),
            time.get() * 0.0005
        );
        camera.updateProjectionMatrix();
        camera.lookAt(0, 0, 0);
    });

    useLayoutEffect(() => gl.setPixelRatio(0.3));

    const stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push(<Star p={progress(0, numStars, i)} />);
    }
    const accretionDiscs = [];
    for (let i = 0; i < numStars; i++) {
        accretionDiscs.push(<AccretionDisc p={progress(0, numStars, i)} />);
    }
    return (
        <>
            <Icosahedron />
            {accretionDiscs}
            {stars}
        </>
    );
}

export default function Startup({ numStars = 100 }) {
    return (
        <div className="container">

            <Canvas gl={{ antialias: false }}>
                <ambientLight intensity={10} />
                <Scene />
            </Canvas>
        </div>
    );
}