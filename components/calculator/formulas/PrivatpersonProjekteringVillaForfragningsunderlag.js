import { valdNiva } from './valdNiva.js'

// The variables that are used in the formula.
const tidPerMote = 1 // 
const bastidPrivatVillaBeskrivning = 1 //
const bastidPrivatVillaRitningar = 1 //
const tidPerRum = 1 // 
const prisPrivat = 1 //

/**
 * A function that calculates the price for the privat person projektering forfragningsunderlag service.
 *
 * @returns {number} the price for the service.
 */
export function privatpersonProjekteringVillaForfragningsunderlag(antalMoten, antalRum, niva) {

  niva = valdNiva(niva)

  const price = ((antalMoten * tidPerMote) + (bastidPrivatVillaBeskrivning * niva) + ((bastidPrivatVillaRitningar * niva) + (antalRum * tidPerRum * niva))) * prisPrivat
  console.log('the price is', price)
  return price
}