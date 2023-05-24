import Article from '@/components/Article'
import { useEffect, useState } from 'react'
import { getAbout } from '@/sanity/sanity-om-oss'
import Head from 'next/head'

/**
 * About page.
 *
 * @returns {HTMLElement} - About page.
 */
const About = () => {
  const [aboutData, setAboutData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAbout()
      setAboutData(data)
    }
    fetchData()
  }, [])

  return (
    <main>
      <Head>
        <title>Allel - Om oss</title>
        <meta name="description" content="Allel - Om oss" />
      </Head>
      {/* create an article for each object in the array */}
      {aboutData.map((data) => (
        <Article key={data._id} data={data} />
      ))}
    </main>
  )
}

export default About
