import { PortableText } from '@portabletext/react'

/**
 * Article component.
 *
 * @param {*} title - The title of the article.
 * @param {*} content - The content of the article.
 * @returns {HTMLElement} Article.
 */
const Article = ({ data }) => {
  return (
    <div className="flex justify-center">
      <div className="w-3/5 flex flex-col justify-center">
        <div className="text-mediumH mb-4">
          {data.map((title) => (
            <div key={title._id}>{title.title}</div>
          ))}
        </div>

        <div className="font-mono mb-4" >
          {data.map((content) => (
            <div key={content._id}>
              <PortableText value={content.content} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Article