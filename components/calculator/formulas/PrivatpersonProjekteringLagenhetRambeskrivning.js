import { valdNiva } from './valdNiva.js'

// The variables that are used in the formula.
const tidPerMote = 1 // 
const bastidPrivatLagenhetBeskrivning = 1 // 
const tidPerRum = 1 //
const prisPrivat = 1 // 


/**
 * A function that calculates the price for the privat person projektering lagenhet rambeskrivning service.
 *
 * @returns {number} price.
 */
export function privatpersonProjekteringLagenhetRambeskrivning (antalMoten, antalRum, niva) {
  niva = valdNiva(niva)
  const price = ((antalMoten * tidPerMote) + (bastidPrivatLagenhetBeskrivning * niva) + (antalRum * tidPerRum * niva)) * prisPrivat
  console.log('the price is', price)
  return price
}