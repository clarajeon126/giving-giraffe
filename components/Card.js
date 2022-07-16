import React, { Suspense, useEffect, useState } from 'react'
import styles from '../styles/recipient.module.css'

export const Card = (props) => {

  return (
    <div className={styles.card}>
      <div className={styles.leftpanel}>
      </div>
      <div className={styles.rightpanel}>
      <p>To: {props.Gifter}</p>
      <p>{props.Content}</p>

      <p>From: {props.Recipient}</p>
      </div>
    </div>
  )
}

