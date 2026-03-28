import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

export default function FloatingPlanet({
  id,
  position,
  color = "#60a5fa",
  label,
  onClick,
}) {
  const mesh = useRef();
  const labelRef = useRef();
  const [hover, setHover] = useState(false);

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.4;
      mesh.current.position.y +=
        Math.sin(state.clock.elapsedTime * 0.6 + mesh.current.uuid.length) *
        0.002;
      const targetScale = hover ? 1.12 : 1.0;
      mesh.current.scale.lerp(
        { x: targetScale, y: targetScale, z: targetScale },
        0.08,
      );
    }
    if (labelRef.current) {
      labelRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <group position={position.toArray()}>
      <mesh
        ref={mesh}
        onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
        onPointerOut={(e) => (e.stopPropagation(), setHover(false))}
        onClick={(e) => (e.stopPropagation(), onClick && onClick())}
        castShadow
      >
        <sphereGeometry args={[0.9, 48, 48]} />
        <meshStandardMaterial
          color={color}
          metalness={0.6}
          roughness={0.25}
          emissive={color}
          emissiveIntensity={0.02}
          transparent
          opacity={0.95}
        />
      </mesh>

      <Text
        ref={labelRef}
        position={[0, -1.4, 0]}
        fontSize={0.18}
        color="#c7d2fe"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
}
