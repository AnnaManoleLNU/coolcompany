import { valdNiva } from './valdNiva.js'
import { getPPLB } from '@/sanity/formulas/sanity-privatperson-projektering-lagenhet-bygghandling.js'

// The data from sanity.
const renderNumbers = async () => {
  const data = await getPPLB()
  return data
}

/**
 * A function that calculates the price for the privat person projektering lagenhet bygghandling service.
 *
 * @param {number} antalMoten - The number of meetings.
 * @param {number} antalRum - The number of rooms.
 * @param {number} niva - The level of the service.
 * @returns {number} price - The price for the service.
 */
export async function privatpersonProjekteringLagenhetBygghandling (antalMoten, antalRum, niva) {
  try {
    const data = await renderNumbers()
    const sanityData = data[0]
    niva = valdNiva(niva, sanityData)
    const tidPerMote = sanityData.tidPerMote
    const bastidPrivatLagenhetRitningar = sanityData.bastidPrivatLagenhetRitningar
    const tidPerRum = sanityData.tidPerRum
    const prisPrivat = sanityData.prisPrivat
    const price = ((antalMoten * tidPerMote) + ((bastidPrivatLagenhetRitningar * niva) + (antalRum * tidPerRum * niva))) * prisPrivat
    return price
  } catch (error) {
    throw new Error(error)
  }
}
