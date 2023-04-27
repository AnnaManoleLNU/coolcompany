import Article from "@/components/Article"
import { groq } from "next-sanity"
import { client } from "@/lib/sanity.client"

const query = groq`*[_type == 'tjanster' && title == 'Kontrolluppdrag' ] {
  _id,
  title,
  content,
}`

export const getStaticProps = async () => {
  const data = await client.fetch(query)
  
  console.log(data)

  return { props: { data } }
}

const Kontrolluppdrag = ({data}) => {
  return (
    <div>
      <Article data={data} />

    </div>
  )
}

export default Kontrolluppdrag