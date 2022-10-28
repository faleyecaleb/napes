import Image from 'next/image'
import React from 'react';
import Link from 'next/link'
import { useAuth } from '../../context/AuthContext';
import { auth } from '../../config/firebase';

const Header: React.FC = ({ modalControl }) => {
  const navRef = React.useRef();
  const { user, logout, data, allUser } = useAuth()




  const show = () => {
    modalControl(true)
  }

  const logoutUser = () => {
    logout(auth)
  }

  return (
    <header className='flex bg-white z-10 justify-around items-center'>
      <div className=''>
        <Image className='' objectFit='contain' src={"/images/napes.png"} width="90" height="90"></Image>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col items-end justify-center'>
          <h1 className={`hidden md:text-xl md:block  lg:block lg:text-3xl font-semibold`}>National Association Of Polytechnic Engineering Student (NAPES)</h1>
          <span className='hidden md:block text-red-500 font-bold '>YCT CHAPTER</span>
        </div>
        <nav className='flex items-center'>
          <ul className='hidden font-sans md:flex sm:flex items-end lg:items-end space-x-12 text-xl'>
            <li className='text-gray-600 hover:text-green-800 hover:border-l-2 hover:pl-2 transition-all hover:border-red-600'><Link href="/">Home</Link></li>
            <li className='text-gray-600 hover:text-green-800 hover:border-l-2 hover:pl-2 transition-all hover:border-red-600'><Link href="/department">Department</Link></li>
            <li className='text-gray-600 hover:text-green-800 hover:border-l-2 hover:pl-2 transition-all hover:border-red-600'><Link href="/executives">Executives</Link></li>
            <li className='text-gray-600 hover:text-green-800 hover:border-l-2 hover:pl-2 transition-all hover:border-red-600'><Link href="/principalOfficers">Principal Officers</Link></li>
            <li className='text-gray-600 hover:text-green-800 hover:border-l-2 hover:pl-2 transition-all hover:border-red-600'><Link href="/contact">Contact</Link></li>
          </ul>
          <div className='ml-10 transition font-sans text-sm duration-200 ease-in bg-red-600 px-2 py-1 cursor-pointer rounded shadow-lg text-slate-100 hover:bg-white hover:border hover:text-red-600'>
            {user ? <div>
              <span onClick={logoutUser}>Logout</span>
            </div>
              :
              <span onClick={show} >Login/Register</span>
            }

          </div>
        </nav>
      </div>
      <div className='flex'>
        <Image src={"/images/yabatechLogo.png"} objectFit='contain' width={100} height={80}></Image>
      </div>
    </header>
  )
}

export default Header