import Image from 'next/image'
import React from 'react'

const Header: React.FC = () => {
  const navRef = React.useRef()
  console.log(navRef);

  return (
    <header className='flex justify-around items-center'>
      <div className=''>
        <Image className='' objectFit='contain' src={"/images/napes.png"} width="90" height="90"></Image>
      </div>
      <div className='flex flex-col space-y-4 justify-center items-center'>
        <div className='flex flex-col items-end justify-center'>
          <h1 className={`hidden md:text-xl md:block  lg:block lg:text-3xl font-semibold`}>National Association Of Polytechnic Engineering Student (NAPES)</h1>
          <span className='hidden md:block text-red-500 font-bold '>YCT CHAPTER</span>
        </div>
        <nav>
          <ul className='hidden md:flex sm:flex items-end lg:items-end space-x-12 text-xl font-bold'>
            <li className='text-gray-600 hover:text-green-800 hover:border-l-2 hover:pl-2 transition-all hover:border-red-600'><a href="#">Home</a></li>
            <li className='text-gray-600 hover:text-green-800 hover:border-l-2 hover:pl-2 transition-all hover:border-red-600'><a href="#">Department</a></li>
            <li className='text-gray-600 hover:text-green-800 hover:border-l-2 hover:pl-2 transition-all hover:border-red-600'><a href="#">Account</a></li>
            <li className='text-gray-600 hover:text-green-800 hover:border-l-2 hover:pl-2 transition-all hover:border-red-600'><a href="#">Gallery</a></li>
            <li className='text-gray-600 hover:text-green-800 hover:border-l-2 hover:pl-2 transition-all hover:border-red-600'><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className='flex'>
        <Image src={"/images/yabatechLogo.png"} objectFit='contain' width={100} height={80}></Image>
      </div>
    </header>
  )
}

export default Header