import React from 'react'
import { sanityClient } from '../sanity'

interface Props {
  newsPost: []
}
const news = ({ newsPost }: Props) => {
  return (
    <div>news</div>
  )
}

export default news

export const getServerSideProps = async () => {
  const query = `*[_type == "posts"]`
  const newsPost = sanityClient.fetch(query);

  return {
    props: { newsPost }
  }
}