import Head from 'next/head'
import { useEffect, useState } from 'react';
import { Arrangement } from '../../components/Arrangement';
import { Card } from '../../components/Card';

import styles from '../../styles/recipient.module.css'
import Image from 'next/image'
import lettercover from "../../public/lettercover.png"
import boxAnim from "../../public/boxanim.gif"

import { useGLTF } from '@react-three/drei';

export async function getServerSideProps(context) {
  const { id } = context.params;

  return {
      props: {
        id
      }
  }

}

let foliageNums = ["/foliage/silverscp.glb", "/foliage/dustycp.glb", "/foliage/ferncp.glb"]
let fillerNums = ["/filler/cosmos/cosmospinkcp.glb", "/filler/cosmos/cosmospurplecp.glb",
                  "/filler/rose/rosecreamcp/glb", "/filler/rose/rosepeachcp/glb",
                  "/filler/rose/rosepinkcp/glb","/filler/rose/rosepurplecp/glb", "/filler/gypsycp.glb"]
let focalNums = ["/focal/anemone/anemoneorangecp.glb", "/focal/anemone/anemonepinkcp.glb", 
                  "/focal/anemone/anemonepurplecp.glb",  "/focal/anemone/anemonewhitecp.glb",
                  "/focal/peony/peonybluecp.glb", "/focal/peony/peonybpinkcp.glb", "/focal/peony/peonycreamcp.glb",
                  "/focal/peony/peonylpinkcp.glb", "/focal/peony/peonymauvecp.glb", "/focal/sunflowercp.glb"]
let vaseNums = ["/vase/vase1cp.glb", "/vase/vase2cp.glb", "/vase/vase3cp.glb"]

const URLDecoding = (URL) => {
  const Decoding_URL = URL.split('_')
  const vase_inputted = parseInt(Decoding_URL[0])

  const flowersUnmapped = Decoding_URL[1].split("-").map(input => {
    if(input.includes(",")) {
      return input.split(",")
    } else{
      return input
    }
  }) 

  const messageEncoded = Decoding_URL[2].split('-').map(input => atob(input))
  const CompleteDecode = [vase_inputted, flowersUnmapped, messageEncoded]
  let chosenones = [flowersUnmapped[0][0], flowersUnmapped[0][1], flowersUnmapped[1], flowersUnmapped[2]]

  useGLTF.preload(fillerNums[chosenones[0] - 1])
  useGLTF.preload(fillerNums[chosenones[1] - 1])
  useGLTF.preload(focalNums[chosenones[2] - 1])
  useGLTF.preload(foliageNums[chosenones[3] - 1])
  useGLTF.preload(vaseNums[vase_inputted + 1])


  console.log(CompleteDecode)

  return CompleteDecode
}

export default function Recipient(props) {
  const URLDecoding = (URL) => {
    const Decoding_URL = URL.split('_')
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
    return CompleteDecode
  }

  let entireGift = URLDecoding(props.id);
  console.log(entireGift)
  
  const [chosenFlowers, setChosenFlowers] = useState([entireGift[1][0][0], entireGift[1][0][1], entireGift[1][1][0], entireGift[1][2][0]])
  const [recipientName, setRecipientName] = useState(entireGift[2][1])
  const [noteText, setNoteText] = useState(entireGift[2][0])
  const [vaseType, setVaseType] = useState(entireGift[0])
  const [gifterName, setGifterName] = useState(entireGift[2][2])  

  const [cardOpen, setCardOpen] = useState(false);

  useEffect(() => {
    console.log("useeffect was ran")
    // decode props
  }, [])

  return (
    
    <div className={styles.container}>
      <Head>
        <title>Specially Made For {recipientName}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!cardOpen ? (
        <div>
              <h1 className={styles.title}>
                Giving Giraffe
              </h1>

              <h3 className={styles.botText}>
                specially made for {recipientName}
              </h3>
              <Image src={boxAnim} />
              <Arrangement style={{display: "none" }} chosenFlowerArr={chosenFlowers} vaseNum={vaseType}/>

              <Image onClick={() => {setCardOpen(true)}} className={styles.letterImg} src={lettercover}/>
        </div>)
        : 
        (
            <div>
            <h1 className={styles.title}>
            Giving Giraffe
            </h1>
            <p className={styles.cardClose} onClick={() => {setCardOpen(false)}}>Close Card</p>
            <Card Gifter={gifterName} Recipient={recipientName} Content={noteText}></Card>
            </div>
        )}
      </main> 
    </div>
  )
}

