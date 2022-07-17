import Image from 'next/image'
import React, { Suspense, useEffect, useState } from 'react'
import styles from '../styles/recipient.module.css'
import card from '../public/card.png'
export const Card = (props) => {
  console.log(props.Preview)
  const PreviewTest = props.Preview
  return (
    <div className={styles.centered}>
        <div className={PreviewTest ? styles.previewLetter : styles.cardImg} >
          {PreviewTest ?
          (<div className={styles.rightpanel}>
              <p className={styles.textWrap}>To: {atob(props.Recipient)}</p>
              <p className={styles.textWrap}>{atob(props.Content)}</p>
              <p className={styles.textWrap}>From: {atob(props.Gifter)}</p>
            </div>
            ) :
            (<div className={styles.rightpanel}>
              <p className={styles.textWrap}>To: {props.Recipient}</p>
              <p className={styles.textWrap}>{props.Content}</p>
              <p className={styles.textWrap}>From: {props.Gifter}</p>
            </div>
          )
        }
        </div>
    </div>


  )
}

