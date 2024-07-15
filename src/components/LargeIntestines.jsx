/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 LargeIntestines.gltf 
Author: funnyeducomics (https://sketchfab.com/funnyeducomics)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/large-intestines-1e2452480336412181f750a86fa88122
Title: Large intestines
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function LargeIntestines(props) {
  const { nodes, materials } = useGLTF('/LargeIntestines.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.MALE_F_1Digestive_Colon_GeoSG} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

export default LargeIntestines;