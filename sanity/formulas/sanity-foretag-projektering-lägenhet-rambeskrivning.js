import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/sanity.client'

/**
 * A function that gets the data for the foretag projektering lägenhet rambeskrivning service.
 *
 * @returns {object} data.
 */
export async function getFPLR () {
  const query = groq`*[_type == 'foretag-projektering-lagenhet-rambeskrivning' ]  {
  _id,
  prisForetag,
  tidPerMote,
  bastidForetagBeskrivning,
  valOmfattningOvrigaUtrymmenLiten,
  valOmfattningOvrigaUtrymmenMellan,
  valOmfattningOvrigaUtrymmenStor,
  valOmfattningOvrigaUtrymmenMycketStor,
  nivaEnkel,
  nivaBas,
  nivaExklusiv,
  nivaExklusivPlus,
  forklaring,
  antalLagenheter1Till10,
  antalLagenheter11Till20,
  antalLagenheter21Till30,
  antalLagenheter31Till50,
  antalLagenheter51Till100,
  antalLagenheter101Till200,
  antalLagenheter201Till300,
  antalLagenheter301Till400,
  antalLagenheter401Till500
}`

  const data = await client.fetch(query)
  return data
}
