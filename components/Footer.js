import { useState, useEffect } from 'react'
import Article from '@/components/Article'
import { getFooter } from '@/sanity/sanity-footer'

/**
 * Footer component.
 *
 * @returns {HTMLElement} Footer.
 */
const Footer = () => {
  const [footerData, setFooterData] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const data = await getFooter()
      setFooterData(data)
    }
    fetchData()
  }, [])


  return (
      <footer className="absolute bottom-0 w-full text-center text-light bg-black " >
        { /* create an article for the Kontoret name */}
      {footerData.map((footer) => (
        <Article key={footer._id} data={footer} />
        ))}
      </footer>
  )
}

export default Footer
