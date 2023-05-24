import { getProject } from '@/sanity/sanity-projekt'
import Article from '@/components/Article'
import ImageFull from '@/components/ImageFull'
import Head from 'next/head'

const ProjectDetails = ({ data }) => {
  return (
    <main>
      <Head>
        <title>Allel - {data[0].title}</title>
          <meta name="description" content={data[0].title} />
      </Head>
      <ImageFull src={data[0].image} alt={data[0].alt} />
      {data.map((project) => (
        <Article key={project._id} data={project} />
      ))}
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
