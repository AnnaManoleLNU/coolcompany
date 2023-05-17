import { valdNiva } from './valdNiva.js'

// The variables that are used in the formula.
const bastidForetagBeskrivning = 1
const tidPerMote = 1
const prisForetag = 1


/**
 * A function that calculates the price for the foretag projektering service.
 *
 * @returns {number} price.
 */
export function foretagProjektering (antalLagenheter, antalMoten, niva, valOmfattningOvrigaUtrymmen) {

  niva = valdNiva(niva)

  // choice for antalLagenheter
  if (antalLagenheter === '1-10') {
    antalLagenheter = 1
  } 
  if (antalLagenheter === '11-20') {
    antalLagenheter = 2
  }
  if (antalLagenheter === '21-30') {
    antalLagenheter = 3
  }
  if (antalLagenheter === '31-50') {
    antalLagenheter = 4
  }
  if (antalLagenheter === '51-100') {
    antalLagenheter = 5
  }
  if (antalLagenheter === '101-200') {
    antalLagenheter = 6
  }
  if (antalLagenheter === '201-300') {
    antalLagenheter = 7
  }
  if (antalLagenheter === '301-400') {
    antalLagenheter = 8
  }
  if (antalLagenheter === '401-500') {
    antalLagenheter = 9
  }

  // choice for valOmfattningOvrigaUtrymmen
  if (valOmfattningOvrigaUtrymmen === 'Liten') {
    valOmfattningOvrigaUtrymmen = 1
  }
  if (valOmfattningOvrigaUtrymmen === 'Mellan') {
    valOmfattningOvrigaUtrymmen = 2
  }
  if (valOmfattningOvrigaUtrymmen === 'Stor') {
    valOmfattningOvrigaUtrymmen = 3
  }
  if (valOmfattningOvrigaUtrymmen === 'Mycket stor') {
    valOmfattningOvrigaUtrymmen = 4
  }
  
  const price = (((bastidForetagBeskrivning + antalLagenheter + (antalLagenheter * valOmfattningOvrigaUtrymmen)) * niva) + (antalMoten * tidPerMote)) * prisForetag
  console.log('the price is', price)
  return price
}