import { valdNiva } from "./valdNiva"

// The variables that are used in the formula.
const tidPerMote = 1 //
const bastidPrivatVillaRitningar = 1 //
const tidPerRum = 1 //
const prisPrivat = 1 //

/**
 * A function that calculates the price for the privat person projektering villa bygghandling service.
 *
 * @returns {number} price
 */
export function privatpersonProjekteringVillaBygghandling (antalMoten, antalRum, niva) {
  
  niva = valdNiva(niva)
  
  const price = ((antalMoten * tidPerMote) + ((bastidPrivatVillaRitningar * niva) + (antalRum * tidPerRum * niva))) * prisPrivat

  console.log('the price is', price)
  return price
}