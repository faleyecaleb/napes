import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ExecutiveMembers from '../components/ExecutiveMembers'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ExecutiveMembers />
    </>
  )
}

export default Home
