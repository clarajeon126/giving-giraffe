/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Vase1({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('../vase1cp.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Sphere001.geometry} material={materials['Material.003']} position={[0, -0.43, 4.11]} scale={[1, 1.31, 0.74]} />
    </group>
  )
}

useGLTF.preload('../vase1cp.glb')