/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Rosecream({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/filler/rose/rosecreamcp.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={[0.04, 0.04, 0.05]}>
        <mesh geometry={nodes['List-02_1'].geometry} material={materials.green} />
        <mesh geometry={nodes['List-02_2'].geometry} material={materials.rose} />
      </group>
    </group>
  )
}
