import React from 'react'
import { BoxBufferGeometry } from 'three'

export const Vase = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="blue"/>
    </mesh>
  )
}
