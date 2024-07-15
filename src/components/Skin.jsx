import React from 'react';
import { useGLTF } from '@react-three/drei';

const Skin = (props) => {
  const { nodes, materials } = useGLTF('/Skin.gltf'); // Replace with your actual path

  // Ensure all materials support transparency
  if (materials) {
    for (const material of Object.values(materials)) {
      if (material) {
        material.transparent = true; // Enable transparency
        material.opacity = props.opacity !== undefined ? props.opacity : 1.0; // Default opacity is 1.0 (fully opaque)
      }
    }
  }

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.MALE_F_1Male_Body_No_Genitals_Geo001SG} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.MALE_F_1Male_Body_No_Genitals_Geo001SG} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.MALE_F_1Male_Body_No_Genitals_Geo001SG} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.MALE_F_1Male_Body_No_Genitals_Geo001SG} />
      </group>
    </group>
  );
};

export default Skin;
