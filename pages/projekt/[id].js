import { getProject } from '@/sanity/sanity-projekt'
import Article from '@/components/Article'
import Head from 'next/head'
import ImageSquare from '@/components/ImageSquare'

const ProjectDetails = ({ data }) => {
  return (
    <main>
      <Head>
        <title>Allel - {data[0].title}</title>
        <meta name="description" content={data[0].title} />
      </Head>
      <div className='flex flex-col md:flex-col md:gap-14 lg:flex-row lg:gap-20'>
        <div className='border-l-0 lg:border-r-2 border-accent lg:pr-6'>
        <ImageSquare src={data[0].image} alt={data[0].alt} forGrid={false} />
        </div>
        {data.map((project) => (
          <Article key={project._id} data={project} />
        ))}
      </div>
    </main>
  )
}

export const getServerSideProps = async (context) => {
  const slug = context.params.id
  const projectData = await getProject()
  const data = projectData.filter((project) => project.slug === slug)

  return {
    props: { data }
  }
}

export default ProjectDetails
