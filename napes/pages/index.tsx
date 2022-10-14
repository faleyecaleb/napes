import type { NextPage } from 'next'
import ExecutiveMembers from '../components/HomeComponents/Executives/ExecutiveMembers'
import Footer from '../components/HomeComponents/Footer/Footer'
import Header from '../components/HomeComponents/Header'
import HeroSection from '../components/HomeComponents/HeroSection'
import NewsEvent from '../components/HomeComponents/NewsEvent/NewsEvent'
import PrincipalOfficers from '../components/HomeComponents/PrincipalOfficer/PrincipalOfficers'

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <NewsEvent />
      <ExecutiveMembers />
      <PrincipalOfficers />
    </>
  )
}

export default Home
