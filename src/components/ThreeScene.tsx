"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PerspectiveCamera, Environment } from "@react-three/drei";
import * as THREE from "three";

function CheeseDimsum() {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.y = time * 0.2;
        meshRef.current.rotation.z = Math.sin(time * 0.5) * 0.1;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={meshRef} castShadow receiveShadow>
                {/* Procedural Dimsum Shape: A squashed sphere with pleat-like distortion */}
                <sphereGeometry args={[1, 32, 32]} />
                <MeshDistortMaterial
                    color="#FBBF24" // Cheese Yellow
                    speed={3}
                    distort={0.4}
                    radius={0.8}
                    emissive="#D97706"
                    emissiveIntensity={0.2}
                    roughness={0.3}
                    metalness={0.1}
                />
            </mesh>

            {/* Some "toppings" or details */}
            {[...Array(6)].map((_, i) => (
                <mesh key={i} position={[
                    Math.cos((i / 6) * Math.PI * 2) * 0.5,
                    0.6,
                    Math.sin((i / 6) * Math.PI * 2) * 0.5
                ]}>
                    <boxGeometry args={[0.2, 0.1, 0.2]} />
                    <meshStandardMaterial color="#92400E" />
                </mesh>
            ))}
        </Float>
    );
}

export default function ThreeScene() {
    return (
        <div className="w-full h-full min-h-[400px]">
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} castShadow />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

                <CheeseDimsum />

                <Environment preset="sunset" />
            </Canvas>
        </div>
    );
}
