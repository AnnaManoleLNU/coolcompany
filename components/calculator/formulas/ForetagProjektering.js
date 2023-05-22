import { valdNiva } from './valdNiva.js'
import { getFPLR } from '@/sanity/formulas/sanity-foretag-projektering-lägenhet-rambeskrivning.js'

const renderNumbers = async () => {
  const data = await getFPLR()
  return data
}

/**
 * A function that calculates the price for ForetagProjektering.
 *
 * @param {number} antalLagenheter - number of apartments.
 * @param {number} antalMoten - number of meetings.
 * @param {number} niva - level of the service.
 * @param {number} valOmfattningOvrigaUtrymmen - choice of the scope of other areas.
 * @returns {number} - the price for ForetagProjektering.
 */
export async function foretagProjektering (antalLagenheter, antalMoten, niva, valOmfattningOvrigaUtrymmen) {
  try {
    const data = await renderNumbers()
    const sanityData = data[0]
    niva = valdNiva(niva, sanityData)
    const prisForetag = sanityData.prisForetag
    const tidPerMote = sanityData.tidPerMote
    const bastidForetagBeskrivning = sanityData.bastidForetagBeskrivning

    // choice for antalLagenheter
    if (antalLagenheter === '1-10') {
      antalLagenheter = sanityData.antalLagenheter1Till10
    }
    if (antalLagenheter === '11-20') {
      antalLagenheter = sanityData.antalLagenheter11Till20
    }
    if (antalLagenheter === '21-30') {
      antalLagenheter = sanityData.antalLagenheter21Till30
    }
    if (antalLagenheter === '31-50') {
      antalLagenheter = sanityData.antalLagenheter31Till50
    }
    if (antalLagenheter === '51-100') {
      antalLagenheter = sanityData.antalLagenheter51Till100
    }
    if (antalLagenheter === '101-200') {
      antalLagenheter = sanityData.antalLagenheter101Till200
    }
    if (antalLagenheter === '201-300') {
      antalLagenheter = sanityData.antalLagenheter201Till300
    }
    if (antalLagenheter === '301-400') {
      antalLagenheter = sanityData.antalLagenheter301Till400
    }
    if (antalLagenheter === '401-500') {
      antalLagenheter = sanityData.antalLagenheter401Till500
    }

    // choice for valOmfattningOvrigaUtrymmen
    if (valOmfattningOvrigaUtrymmen === 'Liten') {
      valOmfattningOvrigaUtrymmen = sanityData.valOmfattningOvrigaUtrymmenLiten
    }
    if (valOmfattningOvrigaUtrymmen === 'Mellan') {
      valOmfattningOvrigaUtrymmen = sanityData.valOmfattningOvrigaUtrymmenMellan
    }
    if (valOmfattningOvrigaUtrymmen === 'Stor') {
      valOmfattningOvrigaUtrymmen = sanityData.valOmfattningOvrigaUtrymmenStor
    }
    if (valOmfattningOvrigaUtrymmen === 'Mycket stor') {
      valOmfattningOvrigaUtrymmen = sanityData.valOmfattningOvrigaUtrymmenMycketStor
    }

    const price = (((bastidForetagBeskrivning + antalLagenheter + (antalLagenheter * valOmfattningOvrigaUtrymmen)) * niva) + (antalMoten * tidPerMote)) * prisForetag

    return price
  } catch (error) {
    throw new Error(error)
  }
}
