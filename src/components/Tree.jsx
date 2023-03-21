import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Tree = () => {
  const groupRef = useRef();
  const trunkRef = useRef();
  const leavesRef = useRef();

  // Load tree model
  const { nodes } = useLoader(GLTFLoader, "/tree.glb");

  // Rotate the leaves
  useFrame(({ clock }) => {
    leavesRef.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.2;
  });

  return (
    <group ref={groupRef}>
      {/* Trunk */}
      <mesh
        ref={trunkRef}
        geometry={nodes.Trunk.geometry}
        material={new THREE.MeshStandardMaterial({ color: "brown" })}
        castShadow
      />

      {/* Leaves */}
      <mesh
        ref={leavesRef}
        geometry={nodes.Leaves.geometry}
        material={new THREE.MeshStandardMaterial({ color: "green" })}
        castShadow
      />
    </group>
  );
};

export default Tree;
