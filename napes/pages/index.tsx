import type { NextPage } from 'next'
<<<<<<< HEAD
<<<<<<< HEAD
import Departments from '../components/HomeComponents/Departments/Departments'
import ExecutiveMembers from '../components/HomeComponents/Executives/ExecutiveMembers'
=======
import ExecutiveMembers from '../components/HomeComponents/Executives/ExecutiveMembers'
import Footer from '../components/HomeComponents/Footer/Footer'
import Header from '../components/HomeComponents/Header'
>>>>>>> executives
import HeroSection from '../components/HomeComponents/HeroSection'
import NewsEvent from '../components/HomeComponents/NewsEvent/NewsEvent'
import PrincipalOfficers from '../components/HomeComponents/PrincipalOfficer/PrincipalOfficers'
=======
import Head from 'next/head'
import Image from 'next/image'
import ExecutiveMembers from '../components/ExecutiveMembers'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
>>>>>>> main

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
<<<<<<< HEAD
<<<<<<< HEAD
      <Departments />

      <ExecutiveMembers />
      <PrincipalOfficers />
      <NewsEvent />
=======
      <NewsEvent />
      <ExecutiveMembers />
      <PrincipalOfficers />
>>>>>>> executives
=======
      <ExecutiveMembers />
>>>>>>> main
    </>
  )
}

export default Home
