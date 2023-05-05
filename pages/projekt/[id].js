import { getTjanster } from '@/sanity/sanity-tjanster'
import Article from '@/components/Article'
import ImageFull from '@/components/ImageFull'

const ServiceDetailPage = ({ data }) => {
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
  const tjansterData = await getTjanster()
  const data = tjansterData.filter((tjanst) => tjanst.slug === slug)
  
  console.log(data[0].image)
  console.log(slug)
  
  return {
    props: { data }
  }
}

export default ServiceDetailPage
