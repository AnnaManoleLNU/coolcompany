import GridImageSquare from '@/components/GridImageSquare'
import Hero from '../components/Hero'
import { useEffect, useState, useRef } from 'react'
import { getProject } from '@/sanity/sanity-projekt'
import ButtonFocus from '@/components/ButtonFocus'
import { useRouter } from 'next/router'
import ScrollUpButton from '@/components/ScrollUpButton'

/**
 * Home page.
 *
 * @returns {HTMLElement} - Home page.
 */
export default function Home () {
  const [projectData, setProjectData] = useState([])

  const router = useRouter()
  const calculatorClick = () => {
    router.push('/kalkylator')
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
    key: project.title
  }))

  // Scroll to new projects section
  const newProjectsRef = useRef(null)

  const scrollToNewProjects = () => {
    if (newProjectsRef.current) {
      newProjectsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }
  }

  return (
    <main>

      <Hero heading='Allel Elektrokonsult AB' message='En kostnadseffektiv el-konsult i Stockholm med anor sedan 1968' allProjectsClick={scrollToNewProjects} />

      <section className="lg:my-44 lg:px-16 scroll-m-10 mb-12" id="new-projects" ref={newProjectsRef}>
        <GridImageSquare images={images} />
      </section>

      <section className='flex flex-col justify-center items-center text-center lg:mx-44 lg:my-20 my-0' >
        <h3 className='font-mono border-t-2 p-8 border-accent'>Vi har lång erfarenhet av kontrolluppdrag och elbesiktningar. Alla typer av entreprenader och även projekteringar kan vi ha kontroll över. Vi utför både förbesiktningar och slutbesiktningar och levererar enkla och tydliga protokoll. Vi kan granska fakturor och äta-arbeten, vi vet vad saker ska kosta!</h3>
        <ButtonFocus buttonText={'kalkylator'} onClick={calculatorClick} />
      </section>

      <ScrollUpButton />

    </main>
  )
}
