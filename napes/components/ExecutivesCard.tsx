import React from 'react'

interface Executives {
  image: string,
  title: string,
  name: string,
  desc: string,
}
const ExecutivesCard: React.FC<Executives> = ({ image, title, name, desc }) => {
  return (
    <div className='flex flex-col justify-center rounded shadow shadow-gray-600 bg-white items-center relative pl-3 pr-2  pb-10 to-blue-500'>
      <img className=' w-52 h-52 md:h-40 md:w-40 mt-6  lg:h-42 lg:w-42 rounded-full object-cover object-center md:-mt-14 top-0' src={image} alt={title} />
      <p className='text-white text-md mb-3'>{title}</p>
      <h2 className='font-bold text-gray-800 mb-3 text-xl'> {name} </h2>
      <p className='text-gray-700 self-center mb-5 pl-5'>{desc}</p>
      <button className='bg-black text-slate-200 px-5 py-2 rounded'>Learn More</button>
    </div>
  )
}

export default ExecutivesCard