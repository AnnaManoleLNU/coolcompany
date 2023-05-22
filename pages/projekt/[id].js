import { getProject } from '@/sanity/sanity-projekt'
import Article from '@/components/Article'
import ImageFull from '@/components/ImageFull'

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

export const getServerSideProps = async (context) => {
  const slug = context.params.id
  const projectData = await getProject()
  const data = projectData.filter((project) => project.slug === slug)

  return {
    props: { data }
  }
}

export default ProjectDetails
