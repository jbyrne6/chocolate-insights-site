import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/cocoa-icon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Chocolate Insights
        </h1>
        <h2 className={styles.description}>
          {"We are an organization dedicated to supporting all of those involved in the craft chocolate process. From when the cacao is being grown to the moment the end product hits the consumer's taste buds."}
        </h2>
      </main>
    </div>
  )
}

export default Home
