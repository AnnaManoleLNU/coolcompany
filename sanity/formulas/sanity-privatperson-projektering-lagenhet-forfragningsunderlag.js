import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/sanity.client'

/**
 * A function that gets the data for the privat person projektering lagenhet forfragningsunderlag service.
 *
 * @returns {object} data
 */
export async function getPPLF () {
  const query = groq`*[_type == 'privatperson-projektering-lagenhet-forfragningsunderlag' ]  {
  _id,
  prisPrivat,
  tidPerMote,
  bastidPrivatLagenhetBeskrivning,
  bastidPrivatLagenhetRitningar,
  tidPerRum,
  nivaEnkel,
  nivaBas,
  nivaExklusiv,
  nivaExklusivPlus,
  forklaring
}`
  const data = await client.fetch(query)
  return data
}
