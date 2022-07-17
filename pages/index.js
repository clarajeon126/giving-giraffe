import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect, useRef } from "react";
import { useGLTF } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive'

import PreviewFlowerIcon from '../public/PreviewFlower.svg'
//components
import { Arrangement } from '../components/Arrangement';
import { Card } from '../components/Card';

//vase
import OrangeVase from '../public/FlowerThumbnails/Vases/OrangeVase.png'
import WhiteVase from '../public/FlowerThumbnails/Vases/WhiteVase.png'
import YellowVase from '../public/FlowerThumbnails/Vases/YellowVase.png'

//focal
import DarkPurpleAnemone from '../public/FlowerThumbnails/Anemone/darkpurple.png'
import LightPinkAnemone from '../public/FlowerThumbnails/Anemone/lightpink.png'
import OrangeAnemone from '../public/FlowerThumbnails/Anemone/orange.png'
import WhiteAnemone from '../public/FlowerThumbnails/Anemone/white.png'

import BrightPinkPeony from '../public/FlowerThumbnails/Peony/BrightPink.png'
import BrownPeony from '../public/FlowerThumbnails/Peony/BrownPink.png'
import CreamPeony from '../public/FlowerThumbnails/Peony/Cream.png'
import LightBluePeony from '../public/FlowerThumbnails/Peony/LightBlue.png'
import LightPinkPeony from '../public/FlowerThumbnails/Peony/LightPink.png'

import Sunflower from '../public/FlowerThumbnails/Sunflower/Sunflower.png'

//filler
import LightPinkCosmos from '../public/FlowerThumbnails/Cosmos/lightpink.png'
import LightPurpleCosmos from '../public/FlowerThumbnails/Cosmos/lightpurple.png'
import WhiteYellowCosmos from '../public/FlowerThumbnails/Cosmos/whiteyellow.png'

import CreamSprayRose from '../public/FlowerThumbnails/SprayRose/Cream.png'
import LightPeachSprayRose from '../public/FlowerThumbnails/SprayRose/LightPeach.png'
import LightPinkSprayRose from '../public/FlowerThumbnails/SprayRose/LightPink.png'
import LightPurpleSprayRose from '../public/FlowerThumbnails/SprayRose/LightPurple.png'

import Gyps from '../public/FlowerThumbnails/Gyps/Gyps.png'

//fern
import SilverDollarEucalyptus from '../public/FlowerThumbnails/SilverDollarEucalyptus/Straight.png'
import DustyMiller from '../public/FlowerThumbnails/DustyMiller/DustyMiller.png'
import LeatherLeafFern from '../public/FlowerThumbnails/LeatherLeafFern/leatherleaffern.png'

//names for the 3d models to import separately
let foliageNums = ["/foliage/silverscp.glb", "/foliage/dustycp.glb", "/foliage/ferncp.glb"]
let fillerNums = ["/filler/cosmos/cosmospinkcp.glb", "/filler/cosmos/cosmospurplecp.glb",
                  "/filler/rose/rosecreamcp.glb", "/filler/rose/rosepeachcp.glb",
                  "/filler/rose/rosepinkcp.glb","/filler/rose/rosepurplecp.glb", "/filler/gypsycp.glb"]
let focalNums = ["/focal/anemone/anemoneorangecp.glb", "/focal/anemone/anemonepinkcp.glb", 
                  "/focal/anemone/anemonepurplecp.glb",  "/focal/anemone/anemonewhitecp.glb",
                  "/focal/peony/peonybluecp.glb", "/focal/peony/peonybpinkcp.glb", "/focal/peony/peonycreamcp.glb",
                  "/focal/peony/peonylpinkcp.glb", "/focal/peony/peonymauvecp.glb", "/focal/sunflowercp.glb"]
let vaseNums = ["/vase/vase1cp.glb", "/vase/vase2cp.glb", "/vase/vase3cp.glb"]



export const VaseList = [
  [1, "White Vase", "Vase Subtext", WhiteVase],
  [2, "Red Vase", "Some call it early", OrangeVase],
  [3, "Yellow Vase", "Vase Subtext", YellowVase]
  ];

export const FlowerList = [
  [
    [
      1,
      "Silver Dollar Eucalyptus",
      "Flower Description",
      SilverDollarEucalyptus
    ],
    [
      2,
      "Dusty Miller",
      "Flower Description",
      DustyMiller
    ],
    [
      3,
      "Leatherleaf Fern",
      "Flower Description",
      LeatherLeafFern
    ]
  ],  
  [
    [
      1,
      "Light Pink Cosmos",
      "Flower Description",
      LightPinkCosmos
    ],
    [
      2,
      "Light Purple Cosmos",
      "Flower Description",
      LightPurpleCosmos
    ],
    [
      3,
      "Cream Spray Rose",
      "Flower Description",
      CreamSprayRose
    ],
    [
      4,
      "Light Peach Spray Rose",
      "Flower Description",
      LightPeachSprayRose
    ],
    [
      5,
      "Light Pink Spray Rose",
      "Flower Description",
      LightPinkSprayRose
    ],
    [
      6,
      "Light Purple Spray Rose",
      "Flower Description",
      LightPurpleSprayRose
    ]
  ],
  [

    [
      1,
      "Orange Anemone",
      "Flower Description",
      OrangeAnemone
    ],
    [
      2,
      "Light Pink Anemone",
      "Flower Description",
      LightPinkAnemone
    ],
    [
      3,
      "Dark Purple Anemone",
      "Flower Description",
      DarkPurpleAnemone
    ],
    [
      4,
      "White Anemone",
      "Flower Description",
      WhiteAnemone
    ],

    [
      5,
      "Light Blue Peony",
      "Flower Description",
      LightBluePeony
    ],
    [
      6,
      "Bright Pink Peony",
      "Flower Description",
      BrightPinkPeony
    ],
    [
      7,
      "Cream Peony",
      "Flower Description",
      CreamPeony
    ],
    [
      8,
      "Light Pink Peony",
      "Flower Description",
      LightPinkPeony
    ],
    [
      9,
      "Mauve Peony",
      "Flower Description",
      BrownPeony
    ],
    [
      10,
      "Sunflower",
      "Flower Description",
      Sunflower
    ]
  ]
];

export default function Home() {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const [previewMode, setpreviewMode] = useState(false);

  const [vase, setVase] = useState(-1);
  const [reloading, setReloading] = useState(false);

  const [copy, setCopy] = useState(false);

  const [fillers, setFillers] = useState([]);
  const [foliage, setFoliage] = useState(-1);
  const [focal, setFocal] = useState(-1);
  const flowersSelected = [foliage, fillers, focal];

  const [noteGifter, setNoteGifter] = useState("");

  const [noteContent, setNoteContent] = useState("");

  const [noteRecipient, setNoteRecipient] = useState("");

  const [noteChoice, setNoteChoice] = useState(true);
  
  const note = [noteContent, noteRecipient, noteGifter];


  const [step, setStep] = useState(1);
  const [URL, setURL] = useState();

  function returnFlowerArr(){
    let filler1,filler2;
    if(fillers.length <= 0){
      filler1 = 0
      filler2 = 0
    }
    else if(fillers.length <= 1){
      filler2 = 0
    }
    else {
      filler1 = fillers[0]
      filler2 = fillers[1]
    }
    return [filler1, filler2, foliage + 1, focal + 1];
  }

  //to preload the models
  useEffect(() => {
    let flwrA = returnFlowerArr()

    console.log("here")
    useGLTF.preload(fillerNums[flwrA[0] - 1 ])
    useGLTF.preload(fillerNums[flwrA[1] - 1])
    useGLTF.preload(focalNums[flwrA[2] - 1])
    useGLTF.preload(foliageNums[flwrA[3] - 1])
    useGLTF.preload(vaseNums[vase + 1])
  
  }, [fillers,foliage,focal,vase])

  //join the flowers order is filler, focal, foliage
  const URLGeneration = () => {
    const Content = [vase, flowersSelected.join('-'), note.join('-')]
    const ContentSpaced = Content.join('_')
    console.log(ContentSpaced)
    setStep(4)
    setURL(ContentSpaced)
    return ContentSpaced
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Creating a gift</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
 

      <main className={styles.mobileMain}>
        <h1 className={styles.brandName}>Giving Giraffe</h1>
        {!previewMode ? (
        <div className={styles.mobileStep}>
          <p className={styles.mobileStepBreadCrumb}>Step {step == 1 ? ("One") : (step == 2 ? ("Two") : (step == 3 ? ("Three") : ("Complete")))}</p>
          <h2 className={styles.mobileStepHeading}>{step == 1 ? ("Select a vase") : (step == 2 ? ("Select Flowers") : (step == 3 ? ("Write a note") : ("Thank you")))}</h2>
          <p className={styles.mobileDescription}>{step == 1 ? ("The vase is an important often overlooked component of the flowering arrangement process. Be sure to choose wisely for the wrong vase may convey the wrong message.") : (step == 2 ? ("Select the flowers for your gift") : (step == 3 ? ("Optionally you can add a note") : ("We're delighted that you took the time to create a gift for someone using our tool. We hope your recipient appreciates your efforts as much as we do.")))}</p>
          <div className={styles.mobileStepContent}>
          {step == 1 ? (
            "Select Vase"
            ) : (step == 2 ? (
            "Customize Flowers"
            ) :
            (step == 3 ? 
            ("Write Note Here")
            :
            ("Link")
            ))}
          </div> 
        </div>): (
          <div className={styles.mobilePreview}>
            <Arrangement vaseNum={vase} chosenFlowerArr={(fillers.length >= 2) ? [foliage + 1, fillers[0] + 1, fillers[1] + 1, focal + 1] : [foliage + 1, fillers[0] + 1, fillers[0] + 1, focal + 1]}/>
          </div>
        )}
        {step !== 4 ? 
        (<div className={styles.navigation}>
          {step !== 1 ? 
          (<button className={styles.Button} onClick={ () => setStep(step - 1) }><strong className={styles.buttonText}>Previous</strong></button>) : 
          (<button className={styles.ButtonOff} onClick={ () => setStep(step) }><strong className={styles.buttonText}>Previous</strong></button>)
          }
          <button className={styles.ButtonPreview} onClick={ () => setpreviewMode(true) }><Image src={PreviewFlowerIcon} /></button>

          {step !== 3 ? 
          (
          ((step == 1) && (vase !== -1)) || (step == 2) && foliage !== -1 && fillers !== -1 && focal !== -1 ? 
          (<button className={styles.Button} onClick={ () => setStep(step + 1) }><strong className={styles.buttonText}>Next</strong></button>) :
          (<button className={styles.ButtonOff} onClick={ () => setStep(step) }><strong className={styles.buttonText}>Next</strong></button>)
          ) : 
          (<button className={styles.ButtonComplete} onClick={ () => URLGeneration() }><strong className={styles.buttonText}>Generate Gift</strong></button>)
          }
        </div>) : null}
      </main>


      <main className={styles.main}>
        <div>
        <div className={styles.branding} onClick={() => { 
          setStep(1)
        }}>
        <h1 className={styles.title}>
          Giving Giraffe
        </h1>
        <h3 className={styles.subtitle}>
          Personalized Digital Gifting
        </h3>
        </div>
        {step == 1 ? (
        <div className={styles.step}>
          <div className={styles.information}>
            <p className={styles.stepBreadCrumb}>Step One</p>
            <h2 className={styles.stepHeading}>Select a vase</h2>
            <p className={styles.stepParagraph}> 
              The vase is an important often overlooked component of the
              flowering arrangement process. Be sure to choose wisely for
              the wrong vase may convey the wrong message. 
            </p>
          <div className={styles.vaseList}>
            {VaseList && VaseList.map((vaseArray, i) => (
            
            <div key={i} onClick={() => {
              setVase(vaseArray[0])
              setReloading(true)
              setTimeout(function() {
                setReloading(false)
              }, 1);
              console.log(vase)
              }}>
              {vase !== i + 1 ? (
              <div className={styles.vaseItem}> <Image src={vaseArray[3]} className={styles.vaseImage}></Image><p className={styles.vaseTitle}>{vaseArray[1]}</p> 
              {/* <p className={styles.vaseSubtext}> {vaseArray[2]}</p> */}
              </div> ) : 
              <div className={styles.vaseItem}> <Image src={vaseArray[3]} className={styles.vaseImageSelected}></Image><p className={styles.vaseTitle}>{vaseArray[1]}</p> 
              
              {/* <p className={styles.vaseSubtext}>{vaseArray[2]}</p> */}
              </div>}
               
            </div>
            ))}

          </div>
          </div>
        </div>) : 
        (null)
        }

        {step == 2 ? (
        <div className={styles.step}>
          
          <div className={styles.information}>
            <p className={styles.stepBreadCrumb}>Step Two</p>
            
            <h2 className={styles.stepHeading}>Select Flowers</h2>
            <p className={styles.stepParagraph}> 
              Select the up to two fillers, one foliage, and one focal to include in your gift.
            </p>
            
            {FlowerList && FlowerList.map((layerOfFlowers, layerIndex) => (
              
            <div key={layerIndex} className={styles.flowerBed}> 
            {layerOfFlowers && layerOfFlowers.map((flower, flowerIndex) => (

              
            <div key={layerIndex} className={styles.entireFlower} onClick={() => {
              setReloading(true)
              setTimeout(function() {
                setReloading(false)
              }, 1);
              //setFlowers(flowers.splice(layerIndex, 1, flowers[layerIndex].push(FlowerList[layerIndex][flowerIndex][0])))
              if (layerIndex == 1) {
                if (fillers?.includes(flowerIndex)) {
                  setFillers(fillers.filter(indexOfFlower => indexOfFlower != flowerIndex))
                } else if (fillers.length < 2) {
                  setFillers(oldArray => [...oldArray, flowerIndex])
                 } else {
                  const currentFillers = fillers.pop()
                  setFillers(oldArray => [...oldArray, flowerIndex])
                 }

                //setFillers(flowerIndex)
                console.log(flowersSelected)
              } else if (layerIndex == 0) {
                
                //setFoliage(oldArray => [...oldArray, flowerIndex])
                setFoliage(flowerIndex)
                console.log(flowersSelected)
              } else if (layerIndex == 2) {
                setFocal(flowerIndex)
                //setFocal(oldArray => [...oldArray, flowerIndex])
                console.log(flowersSelected)
              }
              }}>
                {(layerIndex == 1 && fillers.includes(flowerIndex)) || (layerIndex == 0 && foliage == flowerIndex) || (layerIndex == 2 && focal == flowerIndex) ? 
              (
              <div>
               {(layerIndex == 0 && flowerIndex == 0) ? (<p className={styles.flowerLabel}>Foliage</p>) : 
                (null)}
                {(layerIndex == 1 && flowerIndex == 0) ? (<p className={styles.flowerLabel}>Fillers</p>) : 
                (null)}
                {(layerIndex == 2 && flowerIndex == 0) ? (<p className={styles.flowerLabel}>Focal</p>) : 
                (null)}
                
                <div className={styles.tooltipSelected}>
                <div className={styles.flowerThumbnailSelected}>
                  <Image src={flower[3]}></Image>
                </div>
                  <span className={styles.tooltiptextSelected}>{FlowerList[layerIndex][flowerIndex][1]}</span>
                </div>
              </div>
              ) :
              (
              <div>
                {(layerIndex == 0 && flowerIndex == 0) ? (<p className={styles.flowerLabel}>Foliage</p>) : 
                (null)}
                {(layerIndex == 1 && flowerIndex == 0) ? (<p className={styles.flowerLabel}>Fillers</p>) : 
                (null)}
                {(layerIndex == 2 && flowerIndex == 0) ? (<p className={styles.flowerLabel}>Focal</p>) : 
                (null)}
                <div className={styles.tooltip}>
                  <div className={styles.flowerThumbnail}>
                  <Image src={flower[3]}></Image>
                  </div>
                  <span className={styles.tooltiptext}>{FlowerList[layerIndex][flowerIndex][1]}</span>
                </div>
              </div>
              )}
            </div>
              ))
}</div>
            ))
            }
          </div>
        </div>) : 
        (null)
        }

        {step == 3 ? 
        (
          <div className={styles.step}>
            <div className={styles.information}>
                <p className={styles.stepBreadCrumb}>Step Three</p>
                <h2 className={styles.stepHeading}>Write a note</h2>
                <p className={styles.stepParagraph}> 
                  Optionally you can add a note to your gift
                </p>
                <div>
                  <input className={styles.checkbox} type="checkbox" 
                  defaultChecked={noteChoice}
                  onChange={() => setNoteChoice(!noteChoice)}
                  ></input>
                  <label className={styles.checkLabel}>I would like to include a note</label>
                </div>
                
                {noteChoice ? (
                  <div className={styles.entirenote}>
                  <div>
                  <label className={styles.inputLabel} for="fname">To: </label>
                  <input className={styles.ToInput}  onChange={(e) => {setNoteRecipient(btoa(e.target.value))
                  console.log(atob(noteRecipient))}}
                  type="text" id="fname" name="fname"></input>
                  </div>
                  <div>
                  <textarea onChange={(e) => {setNoteContent(btoa(e.target.value))
                console.log(atob(noteContent) ) 
                }}
                  placeholder="Type your message here..."
                  >

                  </textarea>
                  </div>
                  <div>
                  <label className={styles.inputLabel} for="fname">From: </label>
                  <input className={styles.FromInput} onChange={(e) => {setNoteGifter(btoa(e.target.value))
                  console.log(atob(noteGifter))}}
                  type="text" id="fname" name="fname"></input>
                  </div>
                  </div>
                ) : (
                  null
                  )} 
               
              </div>
            </div>
        ) : (null)}

        
        {step == 4 ? 
        (<div className={styles.step}>
          
        <div className={styles.information}>
          
          
          <h2 className={styles.stepHeading}>Thank you for gifting with Giving Giraffe</h2>

          <p className={styles.stepParagraph}> 
            We're delighted that you took the time to create a gift for someone using our tool. We hope your recipient appreciates your efforts as much as we do. 
          </p>
          <div className={styles.linkHolder} onClick={ () => {
            navigator.clipboard.writeText("http://GivingGiraffe.co/Recipient/" + URL)
            setCopy(true)
        }}>
          <text className={styles.link}>http://GivingGiraffe.co/Recipient/{URL}</text>
          {!copy ? (          
          <p className={styles.selectedLabel}>Click to copy link to clipboard</p>) :       (<p className={styles.selectedLabel}>Copied to Clipboard</p>)}
          </div>
        </div>
        </div>) : null
          }

        {step !== 4 ? 
        (<div className={styles.navigation}>
          {step !== 1 ? 
          (<button className={styles.Button} onClick={ () => setStep(step - 1) }>Previous</button>) : 
          (<button className={styles.ButtonOff} onClick={ () => setStep(step) }>Previous</button>)
          }
          {step !== 3 ? 
          (
          ((step == 1) && (vase !== -1)) || (step == 2) && foliage !== -1 && fillers !== -1 && focal !== -1 ? 
          (<button className={styles.Button} onClick={ () => setStep(step + 1) }>Next</button>) :
          (<button className={styles.ButtonOff} onClick={ () => setStep(step) }>Next</button>)
          ) : 
          (<button className={styles.ButtonComplete} onClick={ () => URLGeneration() }>Generate Gift</button>)
          }
        </div>) : null}
        </div>
        <div className={styles.preview}>

        {step !== 3 ? 
        (
          <Arrangement vaseNum={vase} chosenFlowerArr={(fillers.length >= 2) ? [foliage + 1, fillers[0] + 1, fillers[1] + 1, focal + 1] : [foliage + 1, fillers[0] + 1, fillers[0] + 1, focal + 1]}/>
        ) : (<Card Gifter={noteGifter} Recipient={noteRecipient} Content={noteContent} Preview={"true"}></Card>)}
          </div>
      </main>
    </div>
  )
}
