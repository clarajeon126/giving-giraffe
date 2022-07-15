import { Canvas } from '@react-three/fiber';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/recipient.module.css'


export async function getServerSideProps(context) {
const { id } = context.params;
return {
    props: {
      id
    }
}

}
export default function Recipient(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Specially Made For(Recipient)testf</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
          Clara's Portion {props.id}
        </h1>
        <Canvas></Canvas>
      </main>
    </div>
  )
}
