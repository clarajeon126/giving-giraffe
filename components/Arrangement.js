import { OrbitControls } from '@react-three/drei';
import { Canvas, extend, useThree } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react'
import { AxesHelper } from 'three';

//filler
import Cosmospink from './filler/cosmos/Cosmospink';
import Cosmospurple from './filler/cosmos/Cosmospurple';
import Gypsy from './filler/Gypsy';
import Rosecream from './filler/rose/Rosecream';
import Rosepeach from './filler/rose/Rosepeach';
import Rosepink from './filler/rose/Rosepink';
import Rosepurple from './filler/rose/Rosepurple';

//focals
import Anemoneorange from './focal/anemone/Anemoneorange';
import Anemonepink from './focal/anemone/Anemonepink';
import Anemonepurple from './focal/anemone/Anemonepurple';
import Anemonewhite from './focal/anemone/Anemonewhite';

import Peonyblue from './focal/peony/Peonyblue';
import Peonybpink from './focal/peony/Peonybpink';
import Peonycream from './focal/peony/Peonycream';
import Peonylpink from './focal/peony/Peonylpink';
import Peonymauve from './focal/peony/Peonymauve';
import Sunflower from './focal/Sunflower';

//foliage
import Dusty from './foliage/Dusty';
import Fern from './foliage/Fern';
import Silvers from './foliage/Silvers';

import Vase1 from './vase/Vase1';
import Vase2 from './vase/Vase2';
import Vase3 from './vase/Vase3';


const canvasStyle = {
  width: '100%',
  height: '100%'
}

//coords to place on the vase
let foliageCoords = [cC(0,4.5),cC(3.897,2.25), cC(3.897,-2.25),cC(1.528,0.853), 
                    cC(1.218,-2.183),cC(0,-4.5), cC(-1.528,-0.853), cC(-3.897,-2.25), 
                    cC(-3.897,2.25), cC(-1.218, 2.183)];

let focalCoords = [cC(0,1), cC(2,3.464), cC(2.765,-1.707), cC(-2,-3.464), cC(-2.5,0)];

let filler1Coords = [cC(0,3.25), cC(2.765,1.707), cC(4,0), cC(1.528,-0.853), cC(0,-3.25), cC(-2.765,-1.702), cC(-2.765, 1.707)]

let filler2Coords = [cC(1.218,2.183), cC(2.5,0), cC(2, 3.464), cC(0,-1), cC(-1.528, -0.853), cC(-4,0), cC(-1.528, 0.853), cC(-2, 3.464)]

function cC(xVal, yVal) {
  return {x: xVal, y: yVal};
}


//chosen flower
let foliage = 0
let focal = 0
let filler1 = 0
let filler2 = 0
let vaseNum = 0

let height = 6.5


export const Arrangement = (props) => {
  const [chosenFlowers, setChosenFlowers] = useState(props.chosenFlowerArr)
  const [vaseType, setVaseType] = useState(props.vaseNum)

  function rotationValue(coord){
    let rad = Math.sqrt(Math.pow(coord.x, 2) + Math.pow(coord.y, 2));
    let sinE = (rad / 2) / height
    let angle = Math.asin(sinE)
    return angle;
  }
  
  function rotationYValue(coord){
    if(coord.x == 0){
      if(coord.y > 0){
        return 180
      }
      else {
        return 0
      }
    }
    else if(coord.y == 0){
      if(coord.x > 0){
        return 90
      }
      else{
        return 0
      }
    }
    else {
      let ratio = coord.y / coord.x
  
      let angle = Math.atan(Math.abs(ratio)) * (1/ Math.PI) * 180
  
      if(coord.x > 0 && coord.y >> 0){
        angle += 90
      }
      else if(coord.x < 0 && coord.y > 0){
        angle += 90
      }
  
      if(coord.x < 0){
        angle = 360 - angle
      }
      return angle
    }
    return 0;
  }
  
  function radValue(coord){
    let rad = Math.sqrt(Math.pow(coord.x, 2) + Math.pow(coord.y, 2));
    return rad;
  }
  

  function foliageCreator(coord){
    let num = chosenFlowers[0]
  
    let roty = rotationYValue(coord);
  
    let rotz = rotationValue(coord);
  
    if(num == 0){
      //nothing
    }
    //silver dollar
    else if(num == 1){
      return (
        <Silvers position={[0,0,0]} rotation-z={rotz} rotation-y={roty}  scale={[0.8,2.2,0.8]}/>
      )
    }
    //dusty miller
    else if(num == 2){
      return (
        <Dusty position={[0,0,0]} rotation-z={rotz} rotation-y={roty}  scale={[1.5,3.8,1.5]}/>
      )
    }
    //fern
    else if(num == 3){
      return (
        <Fern position={[0,0,0]} rotation-z={rotz} rotation-y={roty}  scale={[1.5,4,1.5]}/>
      )
    }
  }
  
  function fillerCreator(isFiller1, coord){
    let num = chosenFlowers[1]
  
    if(!isFiller1){
      num = chosenFlowers[2]
    }
    console.log(num)
    let roty = rotationYValue(coord);
    
    let rotz = rotationValue(coord);
  
    if(num == 0){
      //nothing
    }
    //cosmospink
    else if(num == 1){
      return ( <Cosmospink position={[0,0,0]} rotation-z={rotz} rotation-y={roty} scale={[3,4.5,3]}/> )
    }
    //cosmospurple
    else if(num == 2){
      return ( <Cosmospurple position={[0,0,0]} rotation-z={rotz} rotation-y={roty} scale={[3,4.5,3]}/> )
    }
    //rosecream
    else if(num == 3){
      return ( <Rosecream position={[0,0,0]} rotation-z={rotz} rotation-y={roty} scale={[3,4.5,3]}/> )
    }
    //rosepeach
    else if(num == 4){
      return ( <Rosepeach position={[0,0,0]} rotation-z={rotz} rotation-y={roty} scale={[3,4.5,3]}/> )
    }
    //rosepink
    else if(num == 5){
      return ( <Rosepink position={[0,0,0]} rotation-z={rotz} rotation-y={roty} scale={[3,4.5,3]}/> )
    }
    //rosepurple
    else if(num == 6){
      return ( <Rosepurple position={[0,0,0]} rotation-z={rotz} rotation-y={roty} scale={[3,4.5,3]}/> )
    }
    //gypsy
    else if(num == 7){
      return ( <Gypsy position={[0,0,0]} rotation-z={rotz} rotation-y={roty} scale={[3.2,4.2,3.2]}/> )
    }
  }
  
  function focalCreator(coord){
    let num = chosenFlowers[3]
  
    let roty = rotationYValue(coord);
    
    let rotz = rotationValue(coord);
    
    if(num == 0){
      //nothing
    }
    //anemoneorange
    else if(num == 1){
      return ( <Anemoneorange position={[0,2,0]} rotation-z={rotz} rotation-y={roty}  scale={[2, 4,2]}/> )
    }
    //anemonepink
    else if(num == 2){
      return ( <Anemonepink position={[0,2,0]} rotation-z={rotz} rotation-y={roty}  scale={[2, 4,2]}/> )
    }
    //anemonepurple
    else if(num == 3){
      return ( <Anemonepurple position={[0,2,0]} rotation-z={rotz} rotation-y={roty}  scale={[2, 4,2]}/> )
    }
    //anemonewhite
    else if(num == 4){
      return ( <Anemonewhite position={[0,2,0]} rotation-z={rotz} rotation-y={roty}  scale={[2, 4,2]}/> )
    }
    //peonyblue
    else if(num == 5){
      return ( <Peonyblue position={[0,2,0]} rotation-z={rotz} rotation-y={roty}  scale={[2.5,5,2.5]}/> )
    }
    //peonybpink
    else if(num == 6){
      return ( <Peonybpink position={[0,2,0]} rotation-z={rotz} rotation-y={roty}  scale={[2.5,5,2.5]}/> )
    }
    //peonycream
    else if(num == 7){
      return ( <Peonycream position={[0,2,0]} rotation-z={rotz} rotation-y={roty}  scale={[2.5,5,2.5]}/> )
    }
    //peonylpink
    else if(num == 8){
      return ( <Peonylpink position={[0,2,0]} rotation-z={rotz} rotation-y={roty}  scale={[2.5,5,2.5]}/> )
    }
    //peonymauve
    else if(num == 9){
      return ( <Peonymauve position={[0,2,0]} rotation-z={rotz} rotation-y={roty}  scale={[2.5,5,2.5]}/> )
    }
    //Sunflower
    else if(num == 10){
      return ( <Sunflower position={[0,2,0]} rotation-z={rotz} rotation-y={roty}  scale={[2,3.8,2]}/> )
    }
  
  }
  function vaseCreator(){
    let vaseNum = vaseType
    if(vaseNum == 0){
  
    }
    else if(vaseNum == 1){
      return( <Vase1 position={[0,-14,0]}  scale={[10,10,10]}/>
      )
    }
    else if(vaseNum == 2){
      return(<Vase2 position={[0,-14,0]} rotation-y={Math.PI / 2}  scale={[10,10,10]}/>
      )
    }
    else if(vaseNum == 3){
      return (<Vase3 position={[0,-14,0]} scale={[10,10,10]}/>
      )
    }
  }
  
  function filler1Thing(coord){
    return fillerCreator(true, coord)
    
  }
  function filler2Thing(coord){
    return fillerCreator(false, coord)
  }

  useEffect(() => {
    console.log("flowers loaded up")
    setChosenFlowers(props.chosenFlowerArr)
    setVaseType(props.vaseNum)
  }, [props.chosenFlowerArr])


  return (
    <Canvas style={canvasStyle} camera={{ fov: 75, position: [0, 0, 35] }}>
      <ambientLight intensity={.3}/>
      <spotLight intensity={3} angle={0.2 + Math.PI /2} penumbra={0.5} position={[0, 50, 30]} castShadow />
      <spotLight intensity={3} angle={-0.2 + Math.PI /2} penumbra={0.5} position={[0, 50, -30]} castShadow />

      <Suspense fallback={null}>
        {vaseCreator()}
        {foliageCoords.map(foliageCreator)}
        {filler1Coords.map(filler1Thing)}
        {filler2Coords.map(filler2Thing)}
        {focalCoords.map(focalCreator)}

      </Suspense>
      <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

