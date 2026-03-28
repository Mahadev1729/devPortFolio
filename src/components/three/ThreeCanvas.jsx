import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import MainScene from "./MainScene";
import Loading3D from "./Loading3D";

export default function ThreeCanvas({ onSelect }) {
  const fogColor = "#0b1020";

  return (
    <Canvas
      shadows
      camera={{ position: [0, 2.5, 8], fov: 50 }}
      style={{ position: "absolute", inset: 0, zIndex: 0 }}
    >
      <color attach="background" args={[fogColor]} />
      <fog attach="fog" args={[fogColor, 8, 20]} />

      <ambientLight intensity={0.35} />
      <pointLight position={[10, 10, 10]} intensity={1.0} />

      <Suspense fallback={<Html center>{<Loading3D />}</Html>}>
        <Stars
          radius={100}
          depth={50}
          count={4000}
          factor={4}
          saturation={0}
          fade
        />
        <MainScene onSelect={onSelect} />
      </Suspense>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
      />
    </Canvas>
  );
}
