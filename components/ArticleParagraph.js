import { PortableText } from '@portabletext/react'

const ArticleParagraph = (props) => {
  // Modify the data.content value to include paragraph divisions
  const components = {
    block: {
      p: ({ children }) => (
        <p className="font-mono mb-10 text-smallP md:text-smallP lg:text-mediumP text-accent">
          {children}
        </p>
      )
    }
  }

  return (
    <PortableText value={props.value} components={components.block} />
  )
}

export default ArticleParagraph
