import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import FloatingPlanet from "./FloatingPlanet";
import * as THREE from "three";

export default function MainScene({ onSelect }) {
  const group = useRef();

  useFrame((state, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.03;
  });

  const planets = [
    { id: "about", pos: [-3.5, 0.6, -1.5], color: "#7c3aed", label: "About" },
    { id: "skills", pos: [-1.2, 1.2, -2.2], color: "#06b6d4", label: "Skills" },
    {
      id: "projects",
      pos: [1.5, 0.8, -1.8],
      color: "#60a5fa",
      label: "Projects",
    },
    {
      id: "contact",
      pos: [3.2, 0.4, -2.5],
      color: "#f472b6",
      label: "Contact",
    },
  ];

  return (
    <group ref={group}>
      {/* soft ground plane */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.6, 0]}
        receiveShadow
      >
        <planeGeometry args={[60, 60]} />
        <meshStandardMaterial color="#030317" metalness={0.2} roughness={0.6} />
      </mesh>

      {planets.map((p, i) => (
        <FloatingPlanet
          key={p.id}
          id={p.id}
          position={new THREE.Vector3(...p.pos)}
          color={p.color}
          label={p.label}
          onClick={() => onSelect && onSelect(p.id)}
        />
      ))}
    </group>
  );
}
