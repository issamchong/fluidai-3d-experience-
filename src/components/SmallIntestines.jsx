/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 SmallIntestines.gltf 
Author: funnyeducomics (https://sketchfab.com/funnyeducomics)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/small-intestines-450ab3b2c6684d9f8c0b8e330eaa945b
Title: Small intestines
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function SmallIntestines(props) {
  const { nodes, materials } = useGLTF('/SmallIntestines.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.MALE_F_1Digestive_Small_Intestine_GeoSG} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

export default SmallIntestines;