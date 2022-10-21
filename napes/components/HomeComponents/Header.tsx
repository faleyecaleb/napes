import Image from 'next/image'
import React from 'react';
import Link from 'next/link'

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
          <ul className='hidden font-sans md:flex sm:flex items-end lg:items-end space-x-12 text-xl'>
            <li className='text-gray-600 hover:text-green-800 hover:border-l-2 hover:pl-2 transition-all hover:border-red-600'><Link href="/">Home</Link></li>
            <li className='text-gray-600 hover:text-green-800 hover:border-l-2 hover:pl-2 transition-all hover:border-red-600'><Link href="/department">Department</Link></li>
            <li className='text-gray-600 hover:text-green-800 hover:border-l-2 hover:pl-2 transition-all hover:border-red-600'><Link href="/account">Account</Link></li>
            <li className='text-gray-600 hover:text-green-800 hover:border-l-2 hover:pl-2 transition-all hover:border-red-600'><Link href="/executives">Executives</Link></li>
            <li className='text-gray-600 hover:text-green-800 hover:border-l-2 hover:pl-2 transition-all hover:border-red-600'><Link href="/principalOfficers">Principal Officers</Link></li>
            <li className='text-gray-600 hover:text-green-800 hover:border-l-2 hover:pl-2 transition-all hover:border-red-600'><Link href="/contact">Contact</Link></li>
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