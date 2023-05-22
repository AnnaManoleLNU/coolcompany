import { getPB } from '@/sanity/formulas/sanity-privatperson-besiktning.js'

// The data from Sanity.
const renderNumbers = async () => {
  const data = await getPB()
  return data
}

/**
 * A function that calculates the price for the privatperson besiktning service.
 *
 * @param {number} valdAntalRum - The number of rooms chosen.
 * @param {number} besiktningMilersattning - The distance from Stockholm chosen.
 * @param {number} antalBesiktningstillfallen - The number of visits chosen.
 * @param {number} dokumentation - if the customer has documentation.
 *
 * @returns {number} - the price.
 */
export async function privatpersonBesiktning (valdAntalRum, besiktningMilersattning, antalBesiktningstillfallen, dokumentation) {
  try {
    let price = 0

    const data = await renderNumbers()
    const sanityData = data[0]
    const besiktningPrivatProtokoll = sanityData.besiktningPrivatProtokoll
    let besiktningPrivatDokumentation = sanityData.besiktningPrivatDokumentation
    const prisPrivatBesiktningsman = sanityData.prisPrivatBesiktningsman

    // choices for chosen number of rooms
    if (valdAntalRum === '1-5') {
      valdAntalRum = sanityData.valdAntalRum1Till5
    }
    if (valdAntalRum === '6-12') {
      valdAntalRum = sanityData.valdAntalRum6Till12
    }
    if (valdAntalRum === '13-20') {
      valdAntalRum = sanityData.valdAntalRum13Till20
    }

    // chosen distance from Stockholm
    if (besiktningMilersattning === '0-20') {
      besiktningMilersattning = sanityData.besiktningMilersattning0Till20
    }
    if (besiktningMilersattning === '21-30') {
      besiktningMilersattning = sanityData.besiktningMilersattning21Till30
    }
    if (besiktningMilersattning === '31-40') {
      besiktningMilersattning = sanityData.besiktningMilersattning31Till40
    }
    if (besiktningMilersattning === '41-50') {
      besiktningMilersattning = sanityData.besiktningMilersattning41Till50
    }
    if (besiktningMilersattning === '51-60') {
      besiktningMilersattning = sanityData.besiktningMilersattning51Till60
    }
    if (besiktningMilersattning === '61-70') {
      besiktningMilersattning = sanityData.besiktningMilersattning61Till70
    }
    if (besiktningMilersattning === '71-80') {
      besiktningMilersattning = sanityData.besiktningMilersattning71Till80
    }
    if (besiktningMilersattning === '81-90') {
      besiktningMilersattning = sanityData.besiktningMilersattning81Till90
    }
    if (besiktningMilersattning === '91-100') {
      besiktningMilersattning = sanityData.besiktningMilersattning91Till100
    }

    if (dokumentation === 'Ja') {
      price = (((valdAntalRum + besiktningMilersattning + besiktningPrivatProtokoll) * antalBesiktningstillfallen) + besiktningPrivatDokumentation) * prisPrivatBesiktningsman
    }

    if (dokumentation === 'Nej') {
      besiktningPrivatDokumentation = 0
      price = (((valdAntalRum + besiktningMilersattning + besiktningPrivatProtokoll) * antalBesiktningstillfallen) + besiktningPrivatDokumentation) * prisPrivatBesiktningsman
    }

    return price
  } catch (error) {
    throw new Error(error)
  }
}
