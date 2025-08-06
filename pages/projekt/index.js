import GridImageSquare from '@/components/GridImageSquare'
import { useEffect, useState } from 'react'
import { getProject } from '@/sanity/sanity-projekt'
import Head from 'next/head'

/**
 * Project page.
 *
 * @returns {HTMLElement} - Project page.
 */
const Project = () => {
  const [projectData, setProjectData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProject()
      setProjectData(data)
    }
    fetchData()
  }, [])

  const images = projectData.map((project) => ({
    href: `/projekt/${project.slug}`,
    src: project.image,
    alt: project.title,
    caption: project.title,
    key: project._id
  }))

  return (
    <main>
      <Head>
        <title>Ditt företag - Projekt</title>
        <meta name="description" content="Ditt företag - Projekt" />
      </Head>
      <GridImageSquare images={images} />
    </main>
  )
}

export default Project
