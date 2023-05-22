import { valdNiva } from './valdNiva'
import { getPPVB } from '@/sanity/formulas/sanity-privatperson-projektering-villa-bygghandling'

const renderNumbers = async () => {
  const data = await getPPVB()
  return data
}

/**
 * A function that calculates the price for the privat person projektering villa bygghandling service.
 *
 * @param {number} antalMoten - The number of meetings.
 * @param {number} antalRum - The number of rooms.
 * @param {number} niva - The level of the service.
 * @returns {number} - the price.
 */
export async function privatpersonProjekteringVillaBygghandling (antalMoten, antalRum, niva) {
  try {
    const data = await renderNumbers()
    const sanityData = data[0]
    niva = valdNiva(niva, sanityData)
    const tidPerMote = sanityData.tidPerMote
    const bastidPrivatVillaBeskrivning = sanityData.bastidPrivatVillaBeskrivning
    const tidPerRum = sanityData.tidPerRum
    const prisPrivat = sanityData.prisPrivat

    const price = ((antalMoten * tidPerMote) + (bastidPrivatVillaBeskrivning * niva) + (antalRum * tidPerRum * niva)) * prisPrivat
    return price
  } catch (error) {
    throw new Error(error)
  }
}
