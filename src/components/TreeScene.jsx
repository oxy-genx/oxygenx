import React from "react";
import { Canvas } from "react-three-fiber";
import Tree from "./Tree";

import * as THREE from "three";


const TreeScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      shadowMap
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.outputEncoding = THREE.sRGBEncoding;
      }}
    >
      {/* Tree */}
      <Tree />

      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeBufferGeometry args={[10, 10]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Ambient light */}
      <ambientLight intensity={0.3} />

      {/* Directional light */}
      <directionalLight
        position={[0, 5, 5]}
        intensity={0.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </Canvas>
  );
};

export default TreeScene;
