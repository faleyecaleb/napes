import React from 'react'
import PrincipalOfficersCard from './PrincipalOfficersCard';



const PrincipalOfficers: React.FC = () => {
  return (
    <section className='bg-slate-100 py-10'>
      <h2 className='text-4xl font-bold  text-center'>Principal Officers</h2>
      <div className='grid  gap-y-5 sm:grid-cols-1 md:grid-cols-2 sm:px-5 py-10 md:px-20 sm:gap-5'>
        <PrincipalOfficersCard title='Speaker' name='John Doe' desc='Hi, I am the Speaker of NAPES Yabatech chapter and i am a boy with big head. If you dont get it, forget about it' avatar='/images/yabatechLogo.png' bgColor='bg-green-800' />
        <PrincipalOfficersCard title='Speaker' name='John Doe' desc='I am the Speaker of NAPES Yabatech chapter and i am a boy with big head. If you dont get it, forget about it' avatar='/images/yabatechLogo.png' bgColor='bg-white' />
        <PrincipalOfficersCard title='Speaker' name='John Doe' desc='I am the Speaker of NAPES Yabatech chapter and i am a boy with big head. If you dont get it, forget about it' avatar='/images/yabatechLogo.png' bgColor='bg-green-800 md:bg-white' />
        <PrincipalOfficersCard title='Speaker' name='John Doe' desc='I am the Speaker of NAPES Yabatech chapter and i am a boy with big head. If you dont get it, forget about it' avatar='/images/yabatechLogo.png' bgColor='bg-white md:bg-green-800' />
      </div>

    </section>
  )
}

export default PrincipalOfficers