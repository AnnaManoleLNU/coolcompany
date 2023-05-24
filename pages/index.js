import GridImageSquare from '@/components/GridImageSquare'
import Hero from '../components/Hero'
import { useEffect, useState } from 'react'
import { getProject } from '@/sanity/sanity-projekt'
import Button from '@/components/Button'

/**
 * Home page.
 *
 * @returns {HTMLElement} - Home page.
 */
export default function Home () {
  const [projectData, setProjectData] = useState([])

  const calculatorClick = () => {
    window.location.href = '/kalkylator'
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProject()
      setProjectData(data)
    }
    fetchData()
  }, [])

  // get the first 4 projects
  const images = projectData.slice(0, 4).map((project) => ({
    href: `/projekt/${project.slug}`,
    src: project.image,
    alt: project.title,
    caption: project.title,
    key: project._id
  }))

  return (
    <main>
      <Hero heading='Allel Elektrokonsult AB' message='En kostnadseffektiv el-konsult i Stockholm med anor sedan 1968' />

      <GridImageSquare images={images} />

      <div className='flex flex-col justify-center items-center text-center  mt-10'>
        <h3 className='font-mono'>Vi har lång erfarenhet av kontrolluppdrag och elbesiktningar. Alla typer av entreprenader och även projekteringar kan vi ha kontroll över. Vi utför både förbesiktningar och slutbesiktningar och levererar enkla och tydliga protokoll. Vi kan granska fakturor och äta-arbeten, vi vet vad saker ska kosta!</h3>
        <Button buttonText={'kalkylator'} onClick={calculatorClick} />
      </div>

    </main>
  )
}
