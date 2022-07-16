import React, { useEffect, useState } from 'react'
import boxAnim from "../public/boxanim.gif"
import Image from 'next/image'
import styles from '../styles/recipient.module.css'

export const Box = (props) => {
  const [giftClicked, setGiftClicked] = useState(false);
  

  return (
    <div className={!giftClicked ? styles.boxMain : styles.noDisplay}>
        <div className={styles.boxAnim} >
            <Image onClick={() => setGiftClicked(true)} src={boxAnim} ></Image>
        </div>
        <h2>click to open !</h2>
    </div>
  )
}
