import { PortableText } from '@portabletext/react'

/**
 * The article component.
 *
 * @param {*} data - The article data.
 *
 * @returns {HTMLElement} - The article component.
 */
const Article = ({ data }) => {
  return (
    <article className="flex justify-center w-full mt-9">
      <div className="w-full flex flex-col justify-center">
        <div className="text-mediumH mb-4 mt-4">
          <h1 key={data._id}
            className="font-sans text-smallH md:text-smallH lg:text-mediumH"
          >{data.title}</h1>
        </div>
        <div className="font-mono mb-4 text-smallP md:text-smallP lg:text-mediumP" key={data._id}>
            <PortableText value={data.content} />
        </div>
      </div>
    </article>
  )
}

export default Article
