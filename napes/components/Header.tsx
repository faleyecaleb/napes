import Image from 'next/image'
import React from 'react'

const Header: React.FC = () => {


  return (
    <header className='flex justify-between items-center'>
      <div className='w-24 ml-10 md:ml-20'>
        <img className='w-full' src="/images/napes.png" alt="" />
      </div>
      <div className='flex flex-col space-y-4 justify-center items-center'>
        <div className='flex flex-col items-end justify-center'>
          <h1 className={`hidden md:text-xl md:block  lg:block lg:text-2xl font-semibold tracking-wide`}>National Association Of Polytechnic Engineering Student (NAPES)</h1>
          <span className='hidden md:block text-orange-500 font-bold '>YCT CHAPTER</span>
        </div>
        <nav>
          <ul className='hidden md:flex sm:flex items-end lg:items-end space-x-12 text-xl '>
            <li className='hover:text-green-800'><a href="#">Home</a></li>
            <li className='hover:text-green-800'><a href="#">Department</a></li>
            <li className='hover:text-green-800'><a href="#">Account</a></li>
            <li className='hover:text-green-800'><a href="#">Gallery</a></li>
            <li className='hover:text-green-800'><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className='w-20 mr-10 md:mr-20'>
        <img className='w-full' src="/images/yabatechLogo.png" alt="" />
      </div>
    </header>
  )
}

export default Header