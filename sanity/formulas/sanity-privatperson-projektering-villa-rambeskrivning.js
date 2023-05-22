import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/sanity.client'

/**
 * Gets the privatpersonProjekteringVillaRambeskrivning schema from Sanity in JSON format.
 *
 * @returns {object} - The privatpersonProjekteringVillaRambeskrivning data.
 */
export async function getPPVR () {
  const query = groq`*[_type == 'privatperson-projektering-villa-rambeskrivning' ]  {
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

  return client.fetch(query)
}
