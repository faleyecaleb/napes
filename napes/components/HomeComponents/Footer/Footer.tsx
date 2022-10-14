import React from 'react';
import FooterContact from './FooterContact';
import { MdLocationPin, MdCall, MdEmail, MdFacebook } from 'react-icons/md';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className='bg-gray-800 text-lg pt-5 '>
      <img className='hidden md:block bg-white rounded-full ml-8' width={150} height={150} src="/images/napes.png" alt="" />
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8 md:grid-cols-4 text-slate-200  py-10 px-10 border-b-2'>
        <div className=''>
          <p className='sm:text-center md:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa magni, quidem ipsum dolorem quod tenetur distinctio neque rem quibusdam dicta laborum sed, </p>
        </div>
        <div className='mx-auto sm:mx-0'>
          <h2 className='text-2xl ml-7 font-bold text-center sm:text-start'>Contact</h2>
          <FooterContact address='105 Herbert Macaulay Way' iconName={<><MdLocationPin /></>} />
          <FooterContact address='Phone: 0901 234 22 12' iconName={<><MdCall /></>} />
          <FooterContact address='mailus@napes.com' iconName={<><MdEmail /></>} />
          <FooterContact address='www.facebook.com/napes' iconName={<><MdFacebook /></>} />
        </div>
        <nav>
          <ul className='flex flex-col items-center sm:items-start'>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/'}>Department</Link></li>
            <li><Link href={'/'}>Account</Link></li>
            <li><Link href={'/'}>Gallery</Link></li>
            <li><Link href={'/'}>Contact</Link></li>
          </ul>
        </nav>
        <div className='flex flex-col items-center sm:items-start'>
          <h3 className='text-2xl ml-7 font-bold'>Our Vision</h3>
          <p className='text-center sm:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eos reiciendis magni obcaecati .</p>
        </div>
        {/* <div className='flex justify-center col-span-4'>
          <p>kdflsdfs</p>
          <p>sdfsdf</p>
          <p>sdfsdf</p>
        </div> */}
      </div>
      <div className='md:flex md:justify-between md:items-center md:py-5 md:px-10 text-white sm:block '>
        <p className='text-center p-1'>Copyright &copy; 2022. All right reserved</p>
        <p className='bg-green-800 shadow text-center p-2 md:bg-transparent'>Developed By Somebody</p>
      </div>
    </footer>
  )
}

export default Footer