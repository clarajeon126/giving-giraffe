import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect, useRef } from "react";
import OrangeVase from '../assets/FlowerThumbnails/Vases/OrangeVase.png'
import WhiteVase from '../assets/FlowerThumbnails/Vases/WhiteVase.png'
import YellowVase from '../assets/FlowerThumbnails/Vases/YellowVase.png'
import { Arrangement } from '../components/Arrangement';
import { Card } from '../components/Card';

import DarkPurpleAnemone from '../assets/FlowerThumbnails/Anemone/darkpurple.png'
import LightPinkAnemone from '../assets/FlowerThumbnails/Anemone/lightpink.png'
import OrangeAnemone from '../assets/FlowerThumbnails/Anemone/orange.png'
import WhiteAnemone from '../assets/FlowerThumbnails/Anemone/white.png'

import LightPinkCosmos from '../assets/FlowerThumbnails/Cosmos/lightpink.png'
import LightPurpleCosmos from '../assets/FlowerThumbnails/Cosmos/lightpurple.png'
import WhiteYellowCosmos from '../assets/FlowerThumbnails/Cosmos/whiteyellow.png'

import Gyps from '../assets/FlowerThumbnails/Gyps/Gyps.png'

import Sunflower from '../assets/FlowerThumbnails/Sunflower/Sunflower.png'

import DustyMiller from '../assets/FlowerThumbnails/DustyMiller/DustyMiller.png'

import LeatherLeafFern from '../assets/FlowerThumbnails/LeatherLeafFern/leatherleaffern.png'

import BrightPinkPeony from '../assets/FlowerThumbnails/Peony/BrightPink.png'
import BrownPeony from '../assets/FlowerThumbnails/Peony/BrownPink.png'
import CreamPeony from '../assets/FlowerThumbnails/Peony/Cream.png'
import LightBluePeony from '../assets/FlowerThumbnails/Peony/LightBlue.png'
import LinkPinkPeony from '../assets/FlowerThumbnails/Peony/LightPink.png'

import SilverDollarEucalyptus from '../assets/FlowerThumbnails/SilverDollarEucalyptus/Straight.png'

import CreamSprayRose from '../assets/FlowerThumbnails/SprayRose/Cream.png'
import LightPeachSprayRose from '../assets/FlowerThumbnails/SprayRose/LightPeach.png'
import LightPinkSprayRose from '../assets/FlowerThumbnails/SprayRose/LightPink.png'
import LightPurpleSprayRose from '../assets/FlowerThumbnails/SprayRose/LightPurple.png'

export const VaseList = [
  [1, "Red Vase", "Some call it early", OrangeVase],
  [2, "White Vase", "Vase Subtext", WhiteVase],
  [3, "Yellow Vase", "Vase Subtext", YellowVase]
  ];

export const FlowerList = [
  [
    [
      1,
      "Cream Spray Rose",
      "Flower Description",
      CreamSprayRose
    ],
    [
      2,
      "Light Peach Spray Rose",
      "Flower Description",
      LightPeachSprayRose
    ],
    [
      3,
      "Light Purple Spray Rose",
      "Flower Description",
      LightPurpleSprayRose
    ],
    [
      4,
      "Light Pink Spray Rose",
      "Flower Description",
      LightPinkSprayRose
    ],
    [
      5,
      "Cream Cosmos",
      "Flower Description",
      WhiteYellowCosmos
    ],
    [
      6,
      "Light Pink Cosmos",
      "Flower Description",
      LightPinkCosmos
    ],
    [
      7,
      "Light Purple Cosmos",
      "Flower Description",
      LightPurpleCosmos
    ],
    [
      8,
      "Gyps",
      "Flower Description",
      Gyps
    ]
  ],
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
      "White Anemone",
      "Flower Description",
      WhiteAnemone
    ],
    [
      2,
      "Orange Anemone",
      "Flower Description",
      OrangeAnemone
    ],
    [
      3,
      "Dark Purple Anemone",
      "Flower Description",
      DarkPurpleAnemone
    ],
    [
      4,
      "Light Pink Anemone",
      "Flower Description",
      LightPinkAnemone
    ],
    [
      5,
      "Light Blue Peony",
      "Flower Description",
      LightBluePeony
    ],
    [
      6,
      "Light Pink Peony",
      "Flower Description",
      LinkPinkPeony
    ],
    [
      7,
      "Bright Pink Peony",
      "Flower Description",
      BrightPinkPeony
    ],
    [
      8,
      "Cream Peony",
      "Flower Description",
      CreamPeony
    ],
    [
      9,
      "Red Cream Peony",
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


  const [vase, setVase] = useState(-1);
  const [copy, setCopy] = useState(false);


  const [fillers, setFillers] = useState([]);
  const [foliage, setFoliage] = useState(-1);
  const [focal, setFocal] = useState(-1);
  const flowersSelected = [fillers, foliage, focal];

  const [noteGifter, setNoteGifter] = useState("");

  const [noteContent, setNoteContent] = useState("");

  const [noteRecipient, setNoteRecipient] = useState("");

  const [noteChoice, setNoteChoice] = useState(true);
  
  const note = [noteContent, noteRecipient, noteGifter];


  const [step, setStep] = useState(1);
  const [URL, setURL] = useState();

  const URLGeneration = () => {
    const Content = [vase, flowersSelected.join('-'), note.join('-')]
    const ContentSpaced = Content.join('_')
    console.log(ContentSpaced)
    setStep(4)
    setURL(ContentSpaced)
    URLDecoding(ContentSpaced)
    return ContentSpaced
  }
  const URLDecoding = (URL) => {
    const Decoding_URL = URL.split('_')
    //const vase_inputted = JSON.parse(parseInt(Decoding_URL[0]))
    const vase_inputted = parseInt(Decoding_URL[0])

    const flowersUnmapped = Decoding_URL[1].split("-").map(input => {
      if(input.includes(",")) {
        return ((input)).split(",").map(inputo => {
          return (parseInt(inputo) + 1)
        })
      } else{
        return ([parseInt(input) + 1, parseInt(input) + 1])
      }
    })

    const messageEncoded = Decoding_URL[2].split('-').map(input => atob(input))
    const CompleteDecode = [vase_inputted, flowersUnmapped, messageEncoded]
    console.log(CompleteDecode)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Creating a gift</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
            
            <div onClick={() => {
              setVase(vaseArray[0])
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
              
            <div className={styles.flowerBed}> 
            {layerOfFlowers && layerOfFlowers.map((flower, flowerIndex) => (

              
            <div className={styles.entireFlower} onClick={() => {
              //setFlowers(flowers.splice(layerIndex, 1, flowers[layerIndex].push(FlowerList[layerIndex][flowerIndex][0])))
              if (layerIndex == 0) {
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
              } else if (layerIndex == 1) {
                
                //setFoliage(oldArray => [...oldArray, flowerIndex])
                setFoliage(flowerIndex)
                console.log(flowersSelected)
              } else if (layerIndex == 2) {
                setFocal(flowerIndex)
                //setFocal(oldArray => [...oldArray, flowerIndex])
                console.log(flowersSelected)
              }
              }}>
                {(layerIndex == 0 && fillers.includes(flowerIndex)) || (layerIndex == 1 && foliage == flowerIndex) || (layerIndex == 2 && focal == flowerIndex) ? 
              (
              <div>
               {(layerIndex == 0 && flowerIndex == 0) ? (<p className={styles.flowerLabel}>Fillers</p>) : 
                (null)}
                {(layerIndex == 1 && flowerIndex == 0) ? (<p className={styles.flowerLabel}>Foliage</p>) : 
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
                {(layerIndex == 0 && flowerIndex == 0) ? (<p className={styles.flowerLabel}>Fillers</p>) : 
                (null)}
                {(layerIndex == 1 && flowerIndex == 0) ? (<p className={styles.flowerLabel}>Foliage</p>) : 
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
            navigator.clipboard.writeText("http://GivingGiraffe.com/" + URL)
            setCopy(true)
        }}>
          <text className={styles.link}>http://GivingGiraffe.com/{URL}</text>
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
          <Arrangement vaseNum={vase} chosenFlowerArr={flowersSelected}/>
        ) : (<Card Gifter={noteGifter} Recipient={noteRecipient} Content={noteContent} Preview={"true"}></Card>)}
          </div>
      </main>
    </div>
  )
}
