// Should also come from sanity.io


/**
 * Check the value of the selected level and convert it to a number.
 *
 * @param {string} niva - The value of the selected level.
 */
export function valdNiva (niva) {
  if (niva === 'Enkel') {
    niva = 1
  }
  if (niva === 'Bas') {
    niva = 2
  }
  if (niva === 'Exklusiv') {
    niva = 3
  }
  if (niva === 'Exklusiv Plus') {
    niva = 4
  }

  return niva
}