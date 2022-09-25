import React from 'react'
import { useRouter } from 'next/router'
import { Link } from 'next/link'

const Collection = () => {
  const router = useRouter()
  console.info(router.query.collectionId)
  return (
    <Link href='/'>
      <h1>{router.query.collectionId}</h1>
    </Link>
  )
}

export default Collection
