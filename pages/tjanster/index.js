import { useEffect, useState } from 'react'
import GridImageSquare from '@/components/GridImageSquare'
import { getTjanster } from '@/sanity/sanity-tjanster'
import Head from 'next/head'

/**
 * Services page.
 *
 * @returns {HTMLElement} - Services page.
 */
const Services = () => {
  const [tjansterData, setTjansterData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTjanster()
      setTjansterData(data)
    }
    fetchData()
  }, [])

  const images = tjansterData.map((tjanst) => ({
    href: `/tjanster/${tjanst.slug}`,
    src: tjanst.image,
    alt: tjanst.title,
    caption: tjanst.title,
    key: tjanst._id
  }))

  return (
    <main>
      <Head>
        <title>Allel - Tjänster</title>
        <meta name="description" content="Allel - Tjänster" />
      </Head>
      <GridImageSquare images={images} />
    </main>
  )
}

export default Services
