/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 Stomach.gltf 
Author: funnyeducomics (https://sketchfab.com/funnyeducomics)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/stomach-aaeaf37092b94825ab52a4c77e9ec0b5
Title: Stomach
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Stomach(props) {
  const { nodes, materials } = useGLTF('/Stomach.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.MALE_F_1Digestive_Stomach_GeoSG} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

export default Stomach