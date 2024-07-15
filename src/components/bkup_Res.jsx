import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three';

export function Respiratory(props) {
  const { nodes, materials } = useGLTF('/Respiratory.gltf');

  // Load bump map textures from public/textures folder
  const bumpTextures = {
    Muscles_Diaphragm: useRef(new TextureLoader().load('/textures/Muscles_Diaphragm_Bump.jpg')),
    Respiratoy_Larynx: useRef(new TextureLoader().load('/textures/Respiratoy_Larynx_Bump.jpg')),
    Respiratoy_Lungs: useRef(new TextureLoader().load('/textures/Respiratoy_Lungs_Bump.jpg')),
    Respiratoy_Trachea: useRef(new TextureLoader().load('/textures/Respiratoy_Trachea_Bump.jpg')),
  };

  // Assign bump maps to materials
  materials.MALE_F_1Muscles_Diaphragm_mat.bumpMap = bumpTextures.Muscles_Diaphragm.current;
  materials.MALE_F_1Respiratoy_Lung_mat.bumpMap = bumpTextures.Respiratoy_Lungs.current;
  materials.MALE_F_1Respiratoy_Bronchi_mat.bumpMap = bumpTextures.Respiratoy_Lungs.current; // Assuming both lungs share the same bump texture
  materials.MALE_F_1Respiratoy_Trachea_Geo_MALE_F_1Respiratoy_Bronchi_mat_0.bumpMap = bumpTextures.Respiratoy_Trachea.current;
  materials.MALE_F_1Respiratory_Larynx_Cricothyroid_Ligament_mat.bumpMap = bumpTextures.Respiratoy_Larynx.current;
  materials.MALE_F_1Respiratory_Larynx_Cricothyroid_Ligament_mat.bumpMap = bumpTextures.Respiratoy_Larynx.current;

  // Set bump scale (optional)
  materials.MALE_F_1Muscles_Diaphragm_mat.bumpScale = 0.2;
  materials.MALE_F_1Respiratoy_Lung_mat.bumpScale = 0.2;
  materials.MALE_F_1Respiratoy_Bronchi_mat.bumpScale = 0.2;
  materials.MALE_F_1Respiratoy_Trachea_Geo_MALE_F_1Respiratoy_Bronchi_mat_0.bumpScale = 0.2;
  materials.MALE_F_1Respiratory_Larynx_Cricothyroid_Ligament_mat.bumpScale = 0.2;
  materials.MALE_F_1Respiratory_Larynx_Cricothyroid_Ligament_mat.bumpScale = 0.2;

  return (
    <group scale={0.02} position={[0.5, -1, 0]} {...props} dispose={null}>
      <group position={[-80, 82.536, 1.711]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.121, 1.38, -1.185]}>
          <group position={[0.121, 0.331, -81.351]}>
            <group rotation={[Math.PI / 2, -1.058, 0]}>
              <mesh geometry={nodes.MALE_F_1Respiratoy_Diaphragm_Geo_MALE_F_1Muscles_Diaphragm_mat_0.geometry} material={materials.MALE_F_1Muscles_Diaphragm_mat} position={[-0.397, 0, -0.143]} rotation={[0, 1.076, 0]} />
            </group>
            <group position={[-0.611, 0.257, 0]} rotation={[Math.PI / 2, -1.058, 0]}>
              <mesh geometry={nodes.MALE_F_1Respiratoy_Lung_Geo_Right_MALE_F_1Respiratoy_Lung_mat_0.geometry} material={materials.MALE_F_1Respiratoy_Lung_mat} position={[0.279, 0, -0.496]} rotation={[0, 1.091, 0]} />
              <mesh geometry={nodes.MALE_F_1Respiratoy_Lung_Geo_Left_MALE_F_1Respiratoy_Lung_mat_0.geometry} material={materials.MALE_F_1Respiratoy_Lung_mat} position={[0.279, 0, -0.496]} rotation={[0, 1.091, 0]} />
              <mesh geometry={nodes.MALE_F_1Respiratoy_Bronchi_Geo_Right_MALE_F_1Respiratoy_Bronchi_mat_0.geometry} material={materials.MALE_F_1Respiratoy_Bronchi_mat} position={[0.279, 0, -0.496]} rotation={[0, 1.091, 0]} />
              <mesh geometry={nodes.MALE_F_1Respiratoy_Bronchi_Geo_Left_MALE_F_1Respiratoy_Bronchi_mat_0.geometry} material={materials.MALE_F_1Respiratoy_Bronchi_mat} position={[0.279, 0, -0.496]} rotation={[0, 1.091, 0]} />
              <mesh geometry={nodes.MALE_F_1Respiratoy_Trachea_Geo_MALE_F_1Respiratoy_Bronchi_mat_0.geometry} material={materials.MALE_F_1Respiratoy_Bronchi_mat} position={[0.279, 0, -0.496]} rotation={[0, 1.091, 0]} />
            </group>
            <group position={[-0.611, 0.257, 0]} rotation={[Math.PI / 2, -1.058, 0]}>
              <mesh geometry={nodes.MALE_F_1Respiratory_Cricothyroid_Ligament_Geo_MALE_F_1Respiratory_Larynx_Cricothyroid_Ligament_mat_0.geometry} material={materials.MALE_F_1Respiratory_Larynx_Cricothyroid_Ligament_mat} position={[0.279, 0, -0.496]} />
              <mesh geometry={nodes.MALE_F_1Respiratoy_Epiglotis_Geo_MALE_F_1Respiratory_Larynx_Cricothyroid_Ligament_mat_0.geometry} material={materials.MALE_F_1Respiratory_Larynx_Cricothyroid_Ligament_mat} position={[0.279, 0, -0.496]} />
              <mesh geometry={nodes.MALE_F_1Respiratoy_Epiglotis_Inner_Geo_MALE_F_1Respiratory_Larynx_Cricothyroid_Ligament_mat_0.geometry} material={materials.MALE_F_1Respiratory_Larynx_Cricothyroid_Ligament_mat} position={[0.279, 0, -0.496]} rotation={[0, 1.091, 0]} />
              <mesh geometry={nodes.MALE_F_1Respiratoy_Thyroid_Cartliage_Geo_MALE_F_1Respiratory_Larynx_Cricothyroid_Ligament_mat_0.geometry} material={materials.MALE_F_1Respiratory_Larynx_Cricothyroid_Ligament_mat} position={[0.279, 0, -0.496]} rotation={[0, 1.091, 0]} />
              <mesh geometry={nodes.MALE_F_1Respiratoy_True_Vocal_Fold_Geo_Left_MALE_F_1Respiratory_Larynx_Cricothyroid_Ligament_mat_0.geometry} material={materials.MALE_F_1Respiratory_Larynx_Cricothyroid_Ligament_mat} position={[0.279, 0, -0.496]} rotation={[0, 1.091, 0]} />
              <mesh geometry={nodes.MALE_F_1Respiratoy_True_Vocal_Fold_Geo_Right_MALE_F_1Respiratory_Larynx_Cricothyroid_Ligament_mat_0.geometry} material={materials.MALE_F_1Respiratory_Larynx_Cricothyroid_Ligament_mat} position={[0.279, 0, -0.496]} rotation={[0, 1.091, 0]} />
            </group>
            <mesh geometry={nodes.MALE_F_1Respiratoy_Thyroid_Membrane_Geo_MALE_F_1Respiratoy_Larynx_mat_0.geometry} material={materials.MALE_F_1Respiratoy_Larynx_mat} position={[-0.042, 0.257, 0]} rotation={[Math.PI / 2, -1.058, 0]} />
          </group>
        </group>
      </group>
    </group>
  );
}

export default Respiratory;
