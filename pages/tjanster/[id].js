import { getTjanster } from "@/sanity/sanity-tjanster"
import Article from "@/components/Article"
import ImageFull from "@/components/ImageFull"

export const getStaticPaths = async () => {
  const tjansterData = await getTjanster();
  const paths = tjansterData.map((tjanst) => {
    return {
      params: { id: tjanst.slug }
    }
  });

  return {
    paths,
    fallback: false // if a user requests a page that doesn't exist, show 404
  }
}

export const getStaticProps = async (context) => {
  const slug = context.params.id
  const tjansterData = await getTjanster()
  const data = tjansterData.filter((tjanst) => tjanst.slug === slug)

  return {
    props: { data }
  }
}

const ServiceDetailPage = ({ data }) => {
  return (
    <div>
      <ImageFull src={data[0].image} alt={data[0].alt} />
      {data.map ((project) => (
        <Article key={project._id} data={project} />
      ))}
    </div>
  )


}

export default ServiceDetailPage







