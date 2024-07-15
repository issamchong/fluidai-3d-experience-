import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Liver({ position, scale }) {
  const { nodes, materials } = useGLTF('/Liver.gltf');
  const groupRef = useRef();

  return (
    <group ref={groupRef} position={position}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.LiverDigestive_Liver_GeoSG}
        scale={scale}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

export default Liver;
