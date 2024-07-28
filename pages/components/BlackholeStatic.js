'use client';
import React from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";
import dynamic from "next/dynamic";

const color_cloud = "#363c45";
let colors = ["#453e36", "#40382d", "#3b3224", "#362b1b", "#312511"];
const color_blackhole = "#000000";
const color_accretion = "#a87732";

const AccretionDisc = ({ p }) => {
    const ref = useRef(null);

    useLayoutEffect(() => {
        const distance = mix(0.1, 5.5, Math.random());
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
        const gravity = mix(1, 0.3, elapsedTime / 19000); // Adjust the values as needed
        const currentLength = ref.current.position.length();

        ref.current.position.setLength(currentLength * gravity);

    });


    return (
        <mesh ref={ref}>
            <sphereGeometry args={[0.01, 10]} />
            <meshBasicMaterial color={color_accretion} />
        </mesh>
    );
};


const Icosahedron = () => (
    <mesh rotation-x={0.35}>
        <sphereGeometry args={[0.5, 32]} />
        <meshLambertMaterial color={color_blackhole} />
    </mesh>
);

const Star = ({ p, radius, color }) => {
    const ref = useRef(null);

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



function Scene({ numStars = 200}) {
    const gl = useThree((state) => state.gl);
    const time = useTime();

    useFrame(({ camera }) => {
        camera.position.setFromSphericalCoords(
            8,
            degreesToRadians(90),
            time.get() * 0.0001
        );
        camera.fov = 20;
        camera.updateProjectionMatrix();
        camera.lookAt(0, 0, 0);
    
        
    });

    useLayoutEffect(() => gl.setPixelRatio(window.devicePixelRatio));

    const stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push(<Star p={progress(0, numStars, i)} radius="0.05" color={colors[0]}/>);
    }
    const clouds = [];
    for (let i = 0; i < numStars; i++) {
        clouds.push(<Star p={progress(0, numStars, i)} radius="0.01" color={colors[1]} />);
    }

    const blobs = [];
    for (let i = 0; i < numStars; i++) {
        blobs.push(<Star p={progress(0, numStars, i)} radius="0.03" color={colors[2]} />);
    }
    const accretionDiscs = [];
    for (let i = 0; i < numStars*5; i++) {
        accretionDiscs.push(<AccretionDisc p={progress(0, numStars, i)} />);
    }
    return (
        <>
            <Icosahedron />
            {accretionDiscs}
            {clouds}
            {blobs}
            {stars}
        </>
    );
}

export default function BlackholeStatic({ numStars = 200 }) {
    return (
        <div className="container" style={{ height: "200px" ,display: "inline"}}>
            <Canvas gl={{ antialias: true }} >
                <ambientLight intensity={10} />
                <Scene numStars={numStars} />
            </Canvas>
        </div>
    );
}