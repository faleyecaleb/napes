import React from 'react'
import ExecutivesCard from './ExecutivesCard'



const ExecutiveMembers: React.FC = () => {
  return (
    <section className=' bg-gray-300 gap-10 py-14 mb-20 md:px-10'>
      <h2 className='text-3xl mb-5 font-bold text-center md:mb-20 lg:text-4xl'>Meet All Your Executives</h2>
      <div className='grid grid-cols-1 gap-10 mb-20 md:px-10 md:gap-y-14 sm:grid-cols-2 lg:grid-cols-4'>
        <ExecutivesCard image='/images/beautiful.jpg' title='President' name='Faleye Caleb' desc='I am the President of Mechatronics engineering oya send your aza' />
        <ExecutivesCard image='/images/beautiful.jpg' title='President' name='Faleye Caleb' desc='I am the President of Mechatronics engineering oya send your aza' />
        <ExecutivesCard image='/images/beautiful.jpg' title='President' name='Faleye Caleb' desc='I am the President of Mechatronics engineering oya send your aza' />
        <ExecutivesCard image='/images/beautiful.jpg' title='President' name='Faleye Caleb' desc='I am the President of Mechatronics engineering oya send your aza' />
      </div>
    </section>
  )
}

export default ExecutiveMembers