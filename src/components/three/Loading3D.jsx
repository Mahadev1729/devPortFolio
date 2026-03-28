import React from "react";
import { useProgress } from "@react-three/drei";

export default function Loading3D() {
  const { progress } = useProgress();
  return (
    <div className="w-64 p-4 bg-zinc-900/80 rounded-lg backdrop-blur-md text-center text-sm text-zinc-200">
      <div className="mb-2">Loading scene</div>
      <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-400"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-2 text-xs text-zinc-400">{Math.round(progress)}%</div>
    </div>
  );
}
