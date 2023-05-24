import { getTjanster } from '@/sanity/sanity-tjanster'
import Article from '@/components/Article'
import ImageFull from '@/components/ImageFull'
import Head from 'next/head'

const ServiceDetailPage = ({ data }) => {
  return (
    <main>
      <Head>
        <title>Allel - {data[0].title}</title>
        <meta name='description' content={data[0].title} />
      </Head>
      <ImageFull src={data[0].image} alt={data[0].alt} />
      {data.map((tjanst) => (
        <Article key={tjanst._id} data={tjanst} />
      ))}
    </main>
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
