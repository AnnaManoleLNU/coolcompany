import { getTjanster } from '@/sanity/sanity-tjanster'
import Article from '@/components/Article'
import ImageFull from '@/components/ImageFull'

const ServiceDetailPage = ({ data }) => {
  console.log(data)
  return (
    <div className='flex flex-col justify-center items-center'>
      <ImageFull src={data[0].image} alt={data[0].alt} />
      {data.map((tjanst) => (
        <Article key={tjanst._id} data={tjanst} />
      ))}
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const slug = context.params.id
  const tjansterData = await getTjanster()
  const data = tjansterData.filter((tjanst) => tjanst.slug === slug)

  return {
    props: { data }
  }
}

export default ServiceDetailPage
