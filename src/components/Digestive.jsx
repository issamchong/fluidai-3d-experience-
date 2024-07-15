/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 Digestive.gltf 
Author: issamchong (https://sketchfab.com/issamchong)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/digestive-obj-mtl-e6977bfff4a5429b8a8e08ac8858ea7a
Title: Digestive_obj_mtl
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Digestive(props) {
  const { nodes, materials } = useGLTF('/Digestive.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.MALE_F_1Digestive_Bileduct_GeoSG} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.MALE_F_1Digestive_Colon_GeoSG} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.MALE_F_1Digestive_Gall_Bladder_GeoSG} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.MALE_F_1Digestive_Liver_GeoSG} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.MALE_F_1Digestive_Mouth_GeoSG} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.MALE_F_1Digestive_Small_Intestine_GeoSG} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.MALE_F_1Digestive_Stomach_GeoSG} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.MALE_F_1Digestive_Tongue_GeoSG} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.MALE_F_1Digestove_Falciform_Ligament_GeoSG} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.MALE_F_1Endocrine_Pancreas_GeoSG} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.MALE_F_1Male_Skeletal_Lower_Canine_Left_GeoSG} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.MALE_F_1Male_Skeletal_Lower_Canine_Left_GeoSG} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.MALE_F_1Male_Skeletal_Lower_Canine_Left_GeoSG} />
      </group>
    </group>
  )
}

export default Digestive;