"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import {
  OrbitControls,
  PerspectiveCamera,
  Text,
} from "@react-three/drei";
import * as THREE from "three";

/* =======================
   NEURAL TEXT
======================= */
function NeuralText() {
  const textRef = useRef<THREE.Mesh>(null!);

  useFrame(({ camera, clock }) => {
    const t = clock.getElapsedTime();

    camera.position.z = THREE.MathUtils.lerp(2.2, 6, t / 4);

    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(t * 0.2) * 0.15;
      textRef.current.position.y = Math.sin(t * 0.4) * 0.08;
    }
  });

  return (
    <Text
      ref={textRef}
      font="/fonts/SpaceGrotesk-Bold.ttf"
      fontSize={1.4}
      letterSpacing={0.08}
      position={[0, 0, 0]}
      rotation={[0, -0.15, 0]}
    >
      Neuronex’26
      <meshBasicMaterial
        color="#00ffff"
        wireframe
        transparent
        opacity={0.9}
      />
    </Text>
  );
}

/* =======================
   BACKGROUND WAVES
======================= */
function BackgroundWaves() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    mesh.current.rotation.z = t * 0.03;
  });

  return (
    <mesh ref={mesh} position={[0, 0, -4]}>
      <planeGeometry args={[30, 18, 120, 120]} />
      <meshBasicMaterial
        color="#00ffff"
        wireframe
        opacity={0.08}
        transparent
      />
    </mesh>
  );
}

/* =======================
   HERO SECTION
======================= */
export default function HeroSection2() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/bg-v.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY — BELOW CANVAS */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* THREE CANVAS — TOP */}
      <Canvas className="absolute inset-0 z-20">
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />

        <ambientLight intensity={0.6} />
        <pointLight position={[4, 4, 6]} intensity={1.4} color="#00ffff" />

        <Suspense fallback={null}>
          <BackgroundWaves />
          <NeuralText />
        </Suspense>

        <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
      </Canvas>
    </section>
  );
}
