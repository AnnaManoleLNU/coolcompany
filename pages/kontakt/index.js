import Form from '@/components/Form'
import Article from '@/components/Article'
import { useEffect, useState } from 'react'
import { getContact } from '@/sanity/sanity-kontakt'

/**
 * The contact page.
 *
 * @returns {HTMLElement} - Contact page.
 */
const Contact = () => {
  const [contactData, setContactData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getContact()
      setContactData(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <Form />

      {/* create an article for each object in the array */}
      <div>
        {contactData.map((data) => (
          <Article key={data._id} data={data} />
        ))}
      </div>
    </div>
  )
}

export default Contact
