import { getTjanster } from '@/sanity/sanity-tjanster'
import Article from '@/components/Article'
import ImageFull from '@/components/ImageFull'
import Head from 'next/head'
import Button from '@/components/Button'
import { useRouter } from 'next/router'

const ServiceDetailPage = ({ data }) => {
  const router = useRouter()
  const handleOnClick = () => {
    router.push('/tjanster')
  }
  return (
    <main>
      <Head>
        <title>Ditt företag - {data[0].title}</title>
        <meta name='description' content={data[0].title} />
      </Head>
      <div className='lg:px-20 lg:mb-24'>
        <ImageFull src={data[0].image} alt={data[0].alt} />
        {data.map((tjanst) => (
          <Article key={tjanst._id} data={tjanst} />
        ))}
        <div className='flex justify-end'>
          <Button buttonText={'alla tjänster'} onClick={handleOnClick} />
        </div>
      </div>
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
