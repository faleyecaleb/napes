import React from 'react'
import ExecutivesCard from './ExecutivesCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ExecutiveMembers: React.FC = () => {
  return (
    <section className=' bg-green-800 gap-10 pt-5 pb-5'>
      <h2 className='text-3xl mb-5 font-bold text-center text-slate-100 md:mb-10 lg:text-4xl'>Meet All Your Executives</h2>
      <div className='grid grid-cols-1 md:px-16 sm:grid-cols-2 md:grid-cols-4 gap-5'>
        <ExecutivesCard image='/images/beautiful.jpg' title='President' name='Faleye Caleb' desc='I am the President of Mechatronics engineering oya send your aza' />
        <ExecutivesCard image='/images/beautiful.jpg' title='President' name='Faleye Caleb' desc='I am the President of Mechatronics engineering oya send your aza' />
        <ExecutivesCard image='/images/beautiful.jpg' title='President' name='Faleye Caleb' desc='I am the President of Mechatronics engineering oya send your aza' />
        <ExecutivesCard image='/images/beautiful.jpg' title='President' name='Faleye Caleb' desc='I am the President of Mechatronics engineering oya send your aza' />

      </div>

    </section>
  )
}

export default ExecutiveMembers