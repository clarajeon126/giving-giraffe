import { OrbitControls } from '@react-three/drei';
import { Canvas, extend } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react'
import Sunflower from './Sunflower';
import Vase1 from './Vase1';

const canvasStyle = {
  width: '100vw',
  height: '88vh'
}

let foliageCoords = [cC(0,4.5),cC(3.897,2.25), cC(3.897,-2.25),cC(1.528,0.853), 
                    cC(1.218,-2.183),cC(0,-4.5), cC(-1.528,-0.853), cC(-3.897,-2.25), 
                    cC(-3.897,2.25), cC(-1.218, 2.183)];

let focalCoords = [cC(0,1), cC(2,3.464), cC(2.765,-1.707), cC(-2,-3.464), cC(-2.5,0)];

let filler1Coords = [cC(0,3.25), cC(2.765,1.707), cC(4,0), cC(1.528,-0.853), cC(0,-3.25), cC(-2.765,-1.702), cC(-2.765, 1.707)]

let filler2Coords = [cC(1.218,2.183), cC(2.5,0), cC(2, 3.464), cC(0,-1), cC(-1.528, -0.853), cC(-4,0), cC(-1.528, 0.853), cC(-2, 3.464)]

//chosen flowers
let foliage = 1
let focal = 2
let filler1 = 1
let filler2 = 2

function rotationValue(coord){
  let rad = Math.sqrt(Math.pow(coord.x, 2) + Math.pow(coord.y, 2));
  return Math.PI * (rad / 180);
}

function cC(xVal, yVal) {
  return {x: xVal, y: yVal};
}

export const Arrangement = (props) => {
  const [chosenFlowers, setChosenFlowers] = useState(props.chosenFlowerArr)
  const [vaseType, setVaseType] = useState(props.vaseNum)

  useEffect(() => {
    console.log("flowers loaded up")

    //decode the ide
  }, [])

  return (
    <Canvas style={canvasStyle}>
      <ambientLight intensity={1} />
      {/* <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow /> */}
      <Suspense fallback={null}>
        <Vase1 />
        {/* {foliageCoords.map((coord) => (
          <div className="user">{user}</div>
        ))} */}
        <Sunflower position={[0,0,0]} scale={[0.1,0.1,0.1]} rotation-x={Math.PI / 9} />
        <Sunflower scale={[0.1,0.1,0.1]} rotation-x={0} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}

