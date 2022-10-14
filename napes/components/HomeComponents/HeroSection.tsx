import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

const HeroSection = () => {

  return (
    <section className='flex justify-center text-white space-x-20 pt-10 items-center bg-green-800 w-full'>
      <div className='flex flex-col justify-around sm:justify-around h-60  w-full px-10 md:w-full lg:w-1/2'>
        <h2 className='md:text-4xl sm:text-2xl text-2xl font-extrabold'>Enjoy Your Right Of Being A NAPESITE</h2>
        <p className='text-lg sm:text-xl my-5 lg:my-0'>Pay your dues to enjoy unlimited benefits from NAPES and avoid denial of semester registration</p>
        <div className='space-x-5 flex items-center '>
          <Link href="">
            <a className='bg-red-600  text-white px-4 py-2 rounded hover:bg-green-800 shadow text-lg font-bold shadow-gray-800'>Pay Your Dues</a>
          </Link>
          {/* <Link href={"/"}>
            <a className='bg-red-600 p-2 rounded hover:bg-white hover:text-black shadow shadow-black'>Explore</a>
          </Link> */}
        </div>
      </div>
      <div className='hidden md:-mb-1.5 sm:block'>
        <Image objectFit='contain' width={500} height={400} src={"/images/girly.png"}></Image>
      </div>
    </section>
  )
}

export default HeroSection