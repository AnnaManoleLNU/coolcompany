import Form from '@/components/Form'
import Article from '@/components/Article'
import { useEffect, useState } from 'react'
import { getContact } from '@/sanity/sanity-kontakt'
import Head from 'next/head'

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
    <main>
      <Head>
        <title>Allel - Kontakt</title>
        <meta name="description" content="Allel - Kontakt" />
      </Head>
      <div className='block lg:flex'>
        <div className='flex-1 '>
          <Form />
        </div>
        {/* create an article for each object in the array */}
        <div className='flex-1 pl-4 lg:border-l-2 border-l-accent :border-l-0'>
          {contactData.map((data) => (
            <Article key={data._id} data={data} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Contact
