import { valdNiva } from "./valdNiva"
import { getPPVR } from "@/sanity/formulas/sanity-privatperson-projektering-villa-rambeskrivning"

const renderNumbers = async () => {
  const data = await getPPVR()
  return data
}

/**
 * A function that calculates the price for the privat person projektering rambeskrivning service.
 *
 * @returns {number} the price for the service.
 */
export async function privatpersonProjekteringVillaRambeskrivning(antalMoten, antalRum, niva) {
  try {
    niva = valdNiva(niva);

    const data = await renderNumbers();
    const sanityData = data[0];
    console.log('sanityData', sanityData);
    const tidPerMote = sanityData.tidPerMote;
    const bastidPrivatVillaBeskrivning = sanityData.bastidPrivatVillaBeskrivning;
    const tidperRum = sanityData.tidPerRum;
    const prisPrivat = sanityData.prisPrivat;
    const price = ((antalMoten * tidPerMote) + (bastidPrivatVillaBeskrivning * niva) + (antalRum * tidperRum * niva)) * prisPrivat;
    console.log('price', price);
    return price;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}