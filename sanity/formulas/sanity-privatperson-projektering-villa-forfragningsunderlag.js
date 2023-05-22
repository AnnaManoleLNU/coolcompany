import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/sanity.client'

/**
 * Gets the privatpersonProjekteringVillaFörfrågningsunderlag schema from Sanity in JSON format.
 *
 * @returns {object} - The privatpersonProjekteringVillaFörfrågningsunderlag data.
 */
export async function getPPVF () {
  const query = groq`*[_type == 'privatperson-projektering-villa-forfragningsunderlag' ]  {
  _id,
  prisPrivat,
  tidPerMote,
  bastidPrivatVillaBeskrivning,
  bastidPrivatVillaRitningar,
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
