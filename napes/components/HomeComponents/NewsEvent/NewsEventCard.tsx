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
      <article className='flex cursor-pointer rounded overflow-hidden flex-col bg-white hover:-translate-y-4 transition-all '>
        <img src={image} className='' alt="" />
        <p className='mt-5 mb-2 mx-2 font-bold text-lg'>{title}</p>
        <p className='mx-2 mb-5 text-sm'>{dateCreated}</p>
      </article>
    </Link>
  )
}

export default NewsEventCard