import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/sanity.client'

/**
 * A function that gets the privatpersonProjekteringVillaBygghandling schema from Sanity in JSON format.
 *
 * @returns {object} - The privatpersonProjekteringVillaBygghandling data.
 */
export async function getPPVB () {
  const query = groq`*[_type == 'privatperson-projektering-villa-bygghandling' ]  {
  _id,
  prisPrivat,
  tidPerMote,
  bastidPrivatVillaBeskrivning,
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
