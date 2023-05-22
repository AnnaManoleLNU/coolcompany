import { valdNiva } from './valdNiva.js'
import { getPPLF } from '@/sanity/formulas/sanity-privatperson-projektering-lagenhet-forfragningsunderlag.js'

// The data from sanity.
const renderNumbers = async () => {
  const data = await getPPLF()
  return data
}

/**
 * A function that calculates the price for the privat person projektering lagenhet forfragningsunderlag service.
 *
 * @param {number} antalMoten - The number of meetings.
 * @param {number} antalRum - The number of rooms.
 * @param {number} niva - The level of the service.
 * @returns {number} - the price.
 */
export async function privatpersonProjekteringLagenhetForfragningsunderlag (antalMoten, antalRum, niva) {
  try {
    const data = await renderNumbers()
    const sanityData = data[0]
    niva = valdNiva(niva, sanityData)
    const tidPerMote = sanityData.tidPerMote
    const bastidPrivatLagenhetBeskrivning = sanityData.bastidPrivatLagenhetBeskrivning
    const bastidPrivatLagenhetRitningar = sanityData.bastidPrivatLagenhetRitningar
    const tidPerRum = sanityData.tidPerRum
    const prisPrivat = sanityData.prisPrivat

    const price = ((antalMoten * tidPerMote) + (bastidPrivatLagenhetBeskrivning * niva) + ((bastidPrivatLagenhetRitningar * niva) + (antalRum * tidPerRum * niva))) * prisPrivat
    return price
  } catch (error) {
    throw new Error(error)
  }
}
