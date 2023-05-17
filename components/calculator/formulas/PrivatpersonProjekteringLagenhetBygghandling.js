import { valdNiva } from './valdNiva.js'
// The variables that are used in the formula.
const tidPerMote = 1 //
const bastidPrivatLagenhetRitningar = 1 // 
const tidPerRum = 1 //
const prisPrivat = 1 // 

/**
 * A function that calculates the price for the privat person projektering lagenhet bygghandling service.
 *
 * @returns {number} price.
 */
export function privatpersonProjekteringLagenhetBygghandling (antalMoten, antalRum, niva) {
  niva = valdNiva(niva)
  
  const price = ((antalMoten * tidPerMote) + ((bastidPrivatLagenhetRitningar * niva) + (antalRum * tidPerRum * niva))) * prisPrivat
  console.log('the price is', price)
  return price
}