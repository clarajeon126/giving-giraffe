import React, { Suspense, useEffect, useState } from 'react'
import styles from '../styles/recipient.module.css'

export const Card = (props) => {
  console.log(props.Preview)
  const PreviewTest = props.Preview
  return (
    <div>
      {PreviewTest ?
      (<div className={styles.cardpreview}>
        
      <div className={styles.leftpanel}>

      </div>
      <div className={styles.rightpanel}>
      <p>To: {atob(props.Recipient)}</p>
      <p>{atob(props.Content)}</p>
      <p>From: {atob(props.Gifter)}</p>
      </div>
      </div>)
       : (
      <div className={styles.card}>
      <div className={styles.leftpanel}>
      </div>
      <div className={styles.rightpanel}>
      <p>To: {props.Recipient}</p>
      <p>{props.Content}</p>
      <p>From: {props.Gifter}</p>
      </div>
      </div>
      ) }

      </div>
  )
}

