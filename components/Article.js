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
    <div className="flex justify-center">
      <div className="w-3/5 flex flex-col justify-center">
        <div className="text-mediumH mb-4 mt-4">
          <div key={data._id}
            className="font-sans text-smallH md:text-smallH lg:text-mediumH"
          >{data.title}</div>
        </div>
        <div className="font-mono mb-4 text-smallP md:text-smallP lg:text-mediumP" >
          <div key={data._id}>
            <PortableText value={data.content} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
