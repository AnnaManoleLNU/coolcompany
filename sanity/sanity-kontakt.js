// The module that queries the Sanity API kontakt.

import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/sanity.client'

/**
 * Gets the contact schema from Sanity in JSON format. Sort by created date ascending.
 *
 * @returns {object} - The contact schema.
 */
export async function getContact () {
  const query = groq`*[_type == 'kontakt' ] | order(_createdAt asc) {
  _id,
  title,
  content
}`

  return client.fetch(query)
}
