/**
 * A function that sets the level of the service according to the user input. Data is fetched from Sanity.
 *
 * @param {string} niva - The level of the service.
 * @param {object} data - The data from Sanity.
 * @returns {number} - the level of the service.
 */
export function valdNiva (niva, data) {
  if (niva === 'Enkel') {
    niva = data.nivaEnkel
  }
  if (niva === 'Bas') {
    niva = data.nivaBas
  }
  if (niva === 'Exklusiv') {
    niva = data.nivaExklusiv
  }
  if (niva === 'Exklusiv Plus') {
    niva = data.nivaExklusivPlus
  }

  return niva
}
