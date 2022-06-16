import { useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {getPosts} from '../lib';

import IndexPage from './components/IndexPage'


export default function Home() {
  const [ allPost, setAllPost ] = useState ( {} );
  useEffect ( () => {
  setAllPost(getPosts());
  }, [] );
  
  console.log (allPost)
  console.log (allPost)
  console.log (allPost)
  console.log (allPost)
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Raphael Ejeogo</title>
        <meta name="description" content="Raphael Ejeogo's Portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className='px-0 font-default ' >
        
           <IndexPage className='px-0 ' getPosts={getPosts} />
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
