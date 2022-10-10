import Image from 'next/image'
import React from 'react'

const Header: React.FC = () => {
  const navRef = React.useRef()
  console.log(navRef);

  return (
    <header className='flex justify-between items-center'>
      <div className=''>
        <Image className='' objectFit='contain' src={"/images/napes.png"} width="120" height="120"></Image>
      </div>
      <div className='flex flex-col space-y-4 justify-center items-center'>
        <div className='flex flex-col items-end justify-center'>
          <h1 className={`hidden md:text-xl md:block  lg:block lg:text-2xl font-semibold tracking-wide`}>National Association Of Polytechnic Engineering Student (NAPES)</h1>
          <span className='hidden md:block text-red-500 font-bold '>YCT CHAPTER</span>
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
      <div className='flex'>
        <Image src={"/images/yabatechLogo.png"} objectFit='contain' width={130} height={105}></Image>
      </div>
    </header>
  )
}

export default Header