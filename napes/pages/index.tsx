import { useState } from 'react'
import type { NextPage } from 'next'
import Departments from '../components/HomeComponents/Departments/Departments'
import ExecutiveMembers from '../components/HomeComponents/Executives/ExecutiveMembers'
import HeroSection from '../components/HomeComponents/HeroSection'
import NewsEvent from '../components/HomeComponents/NewsEvent/NewsEvent'
import PrincipalOfficers from '../components/HomeComponents/PrincipalOfficer/PrincipalOfficers'
import RegisterModal from '../components/RegisterModal'
import Header from '../components/HomeComponents/Header'
import LoginModal from '../components/LoginModal'
import { useAuth } from '../context/AuthContext'




const Home: NextPage = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(true);
  const { user } = useAuth();


  return (
    <>
      {
        user ?

          <div>
            {/* {showRegisterModal && <RegisterModal registerModal={setShowRegisterModal} loginModal={setShowLoginModal} />}

            {showLoginModal && <LoginModal modal={showLoginModal} registerModal={setShowRegisterModal} loginModal={setShowLoginModal} />} */}
            <Header modalControl={setShowRegisterModal} />
            <HeroSection />

            <Departments />

            <ExecutiveMembers />
            <PrincipalOfficers />
            <NewsEvent />
          </div>
          :
          <div>
            {showRegisterModal && <RegisterModal registerModal={setShowRegisterModal} loginModal={setShowLoginModal} />}

            {showLoginModal && <LoginModal modal={showLoginModal} registerModal={setShowRegisterModal} loginModal={setShowLoginModal} />}
          </div>
      }
    </>
  )
}

export default Home
