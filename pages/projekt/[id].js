import Article from '@/components/Article'
import ImageFull from '@/components/ImageFull'
import { getProject } from '@/sanity/sanity-projekt'

const ProjektDetailPage = ({ data }) => {
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
  const projektData = await getProject()
  const data = projektData.filter((tjanst) => tjanst.slug === slug)
  
  return {
    props: { data }
  }
}

export default ProjektDetailPage
