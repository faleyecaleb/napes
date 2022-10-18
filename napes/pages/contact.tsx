import React from 'react';
import ContactCard from '../components/ContactConponents/ContactCard';
import { MdLocationPin, MdCall, MdEmail, MdFacebook, MdTimer } from 'react-icons/md';

const contact = () => {
  return (
    <section className=''>
      <div className='bg-green-100 text-center py-20'>
        <h1 className='text-4xl text-gray-800 font-sans font-bold'>Contact Us</h1>
      </div>
      <div className='text-center py-10'>
        <h2 className='text-xl font-bold'>Get In Touch</h2>
      </div>
      <div className='grid grid-cols-1 sm:px-20 sm:grid-cols-2 gap-5'>
        <ContactCard title='Opening Hours' icon={<MdTimer color='white' />} desc1='06:00am to 05:00pm' />
        <ContactCard title='Phone' icon={<MdCall color='white' />} desc1='+234 9099 9022 21' desc2='+234 2132 5483 22' />
        <ContactCard title='Email' icon={<MdEmail color='white' />} desc1='example@gmail.com' desc2='mail.napes@n.com' />
        <ContactCard title='Address' icon={<MdLocationPin color='white' />} desc1='105 Herbert Macaulay Way' />
      </div>
    </section>
  )
}

export default contact