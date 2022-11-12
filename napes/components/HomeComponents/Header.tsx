import Image from 'next/image'
import React, { useState } from 'react';
import Link from 'next/link'
import { useAuth } from '../../context/AuthContext';
import { auth } from '../../config/firebase';

const Header: React.FC = ({ modalControl }) => {
  const navRef = React.useRef();
  const { user, logout, data, allUser } = useAuth();

  const [menuClicked, setMenuClicked] = useState(false);

  const clickMenu = () => {
    setMenuClicked((prev) => !prev);
    console.log(menuClicked);

  };




  const show = () => {
    modalControl(true)
  }

  const logoutUser = () => {
    logout(auth)
  }

  return (
    <header className='relative'>
      <div className='hidden sm:flex bg-white z-10 justify-around items-center'>
        <div className='hidden md:block'>
          <Image className='' objectFit='contain' src={"/images/napes.png"} width="90" height="90"></Image>
        </div>
        <div className='hidden md:flex flex-col justify-center items-center'>
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
        <div className='hidden md:flex'>
          <Image src={"/images/yabatechLogo.png"} objectFit='contain' width={100} height={80}></Image>
        </div>
      </div>

      <div className='sm:hidden flex w-full h-16 items-center px-6 justify-between bg-cyan-500 shadow-md'>
        <div onClick={clickMenu} className='space-y-1 cursor-pointer'>
          <div className={`${menuClicked ? " rotate-45 w-10" : "block"} bg-white w-6 h-1 transition duration-500 ease-in-out`}></div>
          <div className={`${menuClicked ? "hidden" : "bg-white w-6 h-1 transition duration-500 ease-in-out"}`}></div>
          <div className={`${menuClicked ? "-rotate-45 w-10 " : "rotate-0 "} bg-white w-6 h-1`}></div>
        </div>
        <img className='w-20' src="/images/napes.png" alt="" />
        <div className='rounded-full p-3 bg-gray-600'>
          <p className='bg-white p-1 rounded-full'></p>
        </div>
      </div>


      <div className={`${menuClicked ? 'translate-x-0' : ' -translate-x-full'} bg-cyan-600 rounded-tr-sm rounded-br-sm text-white font-sans w-full absolute h-screen transition-transform duration-500 ease-in-out`}>
        <div className='bg-cyan-800 flex items-start space-x-3 py-5'>
          <img className='w-1/4 rounded-full' src="/images/css.jpg" alt="" />
          <div>
            <h2 className='font-bold text-lg text-slate-100'>Caleb Faleye</h2>
            <p className='text-gray-200 text-sm'>f/nd/19/3450040</p>
          </div>
        </div>
        <div className='flex flex-col items-start justify-between space-y-8 text-xl mt-4 pl-5'>
          <div className='flex space-x-4 items-center'>
            <img className='w-1/6 rounded-full' src="/images/angular.jpg" alt="" />
            <p>Dashboard</p>
          </div>
          <div className='flex space-x-4 items-center'>
            <img className='w-1/6 rounded-full' src="/images/javascript.jpg" alt="" />
            <p>Withdraw</p>
          </div>
          <div className='flex space-x-4 items-center'>
            <img className='w-1/6 rounded-full' src="/images/node.js.jpg" alt="" />
            <p>Trading</p>
          </div>
          <div className='flex space-x-4 items-center'>
            <img className='w-1/6 rounded-full' src="/images/java.jpg" alt="" />
            <p>Refer</p>
          </div>
          <div className='flex space-x-4 items-center'>
            <img className='w-1/6 rounded-full' src="/images/github.jpg" alt="" />
            <p>Profile</p>
          </div>
          <div className='bg-red-800 py-2 cursor-pointer px-10 rounded-sm shadow'>
            <p onClick={logoutUser} className="cursor-pointer">Logout</p>
          </div>
        </div>
      </div>
    </header>

  )
}

export default Header