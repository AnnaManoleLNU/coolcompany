import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/sanity.client'

/**
 * A function that gets the data for the privat person besiktning service.
 *
 * @returns {object} data
 */
export async function getPB () {
  const query = groq`*[_type == 'privatperson-besiktning' ]  {
  _id,
  besiktningPrivatProtokoll,
  besiktningPrivatDokumentation,
  prisPrivatBesiktningsman,
  valdAntalRum1Till5,
  valdAntalRum6Till12,
  valdAntalRum13Till20,
  besiktningMilersattning0Till20,
  besiktningMilersattning21Till30,
  besiktningMilersattning31Till40,
  besiktningMilersattning41Till50,
  besiktningMilersattning51Till60,
  besiktningMilersattning61Till70,
  besiktningMilersattning71Till80,
  besiktningMilersattning81Till90,
  besiktningMilersattning91Till100,
  forklaring
}`

  const data = await client.fetch(query)
  return data
}
