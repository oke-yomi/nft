import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FormEvent, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Header from '../components/header'
import Hero from '../components/home/hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const [walletAddress, setWalletAddress] = useState('')
  const walletAddressRef = useRef<HTMLInputElement>(null);
  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (walletAddressRef.current) {
      const walletAddress = walletAddressRef.current.value;

      if(walletAddress === '') return;

      console.log(walletAddress);

      walletAddressRef.current.value = ''
      

      // router.push(`/nfts/${walletAddress}`)
    }
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Assets || Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='h-screen w-full flex flex-col'>
        <Header />

        <Hero />
      </main>
    </>
  )
}
