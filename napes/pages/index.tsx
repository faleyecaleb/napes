import type { NextPage } from 'next'
import Departments from '../components/HomeComponents/Departments/Departments'
import ExecutiveMembers from '../components/HomeComponents/Executives/ExecutiveMembers'
import HeroSection from '../components/HomeComponents/HeroSection'
import NewsEvent from '../components/HomeComponents/NewsEvent/NewsEvent'
import PrincipalOfficers from '../components/HomeComponents/PrincipalOfficer/PrincipalOfficers'

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <Departments />

      <ExecutiveMembers />
      <PrincipalOfficers />
      <NewsEvent />
    </>
  )
}

export default Home
