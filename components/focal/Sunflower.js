/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Sunflower({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/focal/sunflowercp.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, -0.02]} rotation={[-0.84, 0.17, -3.04]} scale={[0.17, 0.17, 0.13]}>
        <mesh geometry={nodes.Sphere004.geometry} material={materials['Material.022']} />
        <mesh geometry={nodes.Sphere004_1.geometry} material={materials['Material.029']} />
        <mesh geometry={nodes.Sphere004_2.geometry} material={materials['Material.030']} />
        <mesh geometry={nodes.Sphere004_3.geometry} material={materials['Material.031']} />
        <mesh geometry={nodes.Sphere004_4.geometry} material={materials['Material.032']} />
      </group>
    </group>
  )
}
