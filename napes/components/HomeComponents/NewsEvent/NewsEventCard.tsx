import React from 'react';
import Link from 'next/link';

interface NewsEvent {
  image: string,
  title: string,
  dateCreated: string
}
const NewsEventCard: React.FC<NewsEvent> = ({ image, title, dateCreated }) => {
  return (
    <Link href={`https://www.google.com/${title}`}>
      <article className='flex transition ease-in-out dura cursor-pointer rounded overflow-hidden flex-col bg-white hover:scale-110 shadow-lg '>
        <img src={image} className='' alt="" />
        <p className='mt-5 mb-2 mx-2 font-bold text-lg'>{title}</p>
        <p className='mx-2 mb-5 text-sm'>{dateCreated}</p>
      </article>
    </Link>
  )
}

export default NewsEventCard