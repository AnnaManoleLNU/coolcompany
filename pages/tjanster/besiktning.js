import Article from "@/components/Article"
import { groq } from "next-sanity"
import { client } from "@/lib/sanity.client"

const query = groq`*[_type == 'tjanster' && title == 'Besiktning' ] {
  _id,
  title,
  content,
}`

export const getStaticProps = async () => {
  const data = await client.fetch(query)
  return { props: { data } }

}

const Besiktning = ({data}) => {
  return (
    <div>
      <Article
        data={data} />
    </div>
  );
}

export default Besiktning