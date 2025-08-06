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
        <title>Ditt företag - Om oss</title>
        <meta name="description" content="Ditt företag - Om oss" />
      </Head>
      {/* create an article for each object in the array */}
      {aboutData.map((data, index) => (
        <div key={data._id} className=' lg:px-24 lg:mb-24'>
          <Article key={data._id} data={data} />

        </div>
      ))}
    </main>
  )
}

export default About
