import { valdNiva } from './valdNiva.js'
import { getPPLR } from '@/sanity/formulas/sanity-privatperson-projektering-lagenhet-rambeskrivning.js'

const renderNumbers = async () => {
  const data = await getPPLR()
  return data
}

/**
 * A function that calculates the price for the privat person projektering lagenhet rambeskrivning service.
 *
 * @param {number} antalMoten - The number of meetings.
 * @param {number} antalRum - The number of rooms.
 * @param {number} niva - The level of the service.
 * @returns {number} price - The price for the service.
 */
export async function privatpersonProjekteringLagenhetRambeskrivning (antalMoten, antalRum, niva) {
  try {
    const data = await renderNumbers()
    const sanityData = data[0]
    niva = valdNiva(niva, sanityData)
    const tidPerMote = sanityData.tidPerMote
    const bastidPrivatLagenhetBeskrivning = sanityData.bastidPrivatLagenhetBeskrivning
    const tidPerRum = sanityData.tidPerRum
    const prisPrivat = sanityData.prisPrivat

    const price = ((antalMoten * tidPerMote) + (bastidPrivatLagenhetBeskrivning * niva) + (antalRum * tidPerRum * niva)) * prisPrivat
    return price
  } catch (error) {
    throw new Error(error)
  }
}
