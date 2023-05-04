import { getProject } from '@/sanity/sanity-projekt'
import Article from '@/components/Article'
import ImageFull from '@/components/ImageFull'

export const getStaticPaths = async () => {
  const projectData = await getProject()
  const paths = projectData.map((project) => {
    return {
      params: { id: project.slug }
    }
  })

  return {
    paths,
    fallback: false // if a user requests a page that doesn't exist, show 404
  }
}

export const getStaticProps = async (context) => {
  const slug = context.params.id
  const projectData = await getProject()
  const data = projectData.filter((project) => project.slug === slug)

  return {
    props: { data }
  }
}

const ProjectDetails = ({ data }) => {
  return (
    <div>
      <ImageFull src={data[0].image} alt={data[0].alt} />
      {data.map((project) => (
        <Article key={project._id} data={project} />
      ))}
    </div>
  )
}

export default ProjectDetails
