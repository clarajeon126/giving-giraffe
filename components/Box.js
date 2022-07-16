import React, { useEffect, useState } from 'react'
import boxAnim from "../public/boxanim.gif"
import Image from 'next/image'
import styles from '../styles/recipient.module.css'


export const Box = (props) => {
  

  
  return (
    <div className={styles.boxMain}>
        <div className={styles.boxAnim} >
            <Image onClick={props.clickFunc} src={boxAnim} />

        </div>
        <h2>click to open !</h2>
    </div>
  )
}
