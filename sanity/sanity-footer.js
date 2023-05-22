import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/sanity.client'

/**
 * Gets the footer schema from Sanity in JSON format.
 *
 * @returns {object} - The footer schema.
 */
export async function getFooter () {
  const query = groq`*[_type == 'kontakt' && title == 'Kontoret']  {
  _id,
  content
}`

  return client.fetch(query)
}
