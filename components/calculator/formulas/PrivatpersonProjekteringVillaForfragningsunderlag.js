import { valdNiva } from './valdNiva.js'
import { getPPVF } from '@/sanity/formulas/sanity-privatperson-projektering-villa-forfragningsunderlag.js'

const renderNumbers = async () => {
  const data = await getPPVF()
  return data
}

/**
 * A function that calculates the price for the privat person projektering forfragningsunderlag service.
 *
 * @param {number} antalMoten - The number of meetings.
 * @param {number} antalRum - The number of rooms.
 * @param {number} niva - The level of the service.
 * @returns {number} the price for the service.
 */
export async function privatpersonProjekteringVillaForfragningsunderlag (antalMoten, antalRum, niva) {
  try {
    const data = await renderNumbers()
    const sanityData = data[0]
    niva = valdNiva(niva, sanityData)
    const tidPerMote = sanityData.tidPerMote
    const bastidPrivatVillaBeskrivning = sanityData.bastidPrivatVillaBeskrivning
    const bastidPrivatVillaRitningar = sanityData.bastidPrivatVillaRitningar
    const tidperRum = sanityData.tidPerRum
    const prisPrivat = sanityData.prisPrivat
    const price = ((antalMoten * tidPerMote) + (bastidPrivatVillaBeskrivning * niva) + ((bastidPrivatVillaRitningar * niva) + (antalRum * tidperRum * niva))) * prisPrivat
    return price
  } catch (error) {
    throw new Error(error)
  }
}
