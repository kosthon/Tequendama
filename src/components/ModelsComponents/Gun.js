/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: Dries Deryckere (https://sketchfab.com/deryckeredries)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/gun-a66b52ede9af472a9a9e0946154d603c
Title: Gun
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/gun/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-1.217, 0.523, -0.182]} scale={0.1}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Material__180} position={[0, 0, 0]} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Material__180} position={[0, 0, 0]} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Material__183} position={[0, 0, 0]} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Material__183} position={[0, 0, 0]} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Material__183} position={[0, 0, 0]} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Material__184} position={[0, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
