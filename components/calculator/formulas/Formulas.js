// Calculate the price - 8 combinations and 8 formulas
import { foretagProjektering } from "./ForetagProjektering";
import { privatpersonBesiktning } from "./PrivatpersonBesiktning";
import { privatpersonProjekteringLagenhetBygghandling } from "./PrivatpersonProjekteringLagenhetBygghandling";
import { privatpersonProjekteringLagenhetForfragningsunderlag } from "./PrivatpersonProjekteringLagenhetForfragningsunderlag";
import { privatpersonProjekteringLagenhetRambeskrivning } from "./PrivatpersonProjekteringLagenhetRambeskrivning";
import { privatpersonProjekteringVillaBygghandling } from "./PrivatpersonProjekteringVillaBygghandling";
import { privatpersonProjekteringVillaForfragningsunderlag } from "./PrivatpersonProjekteringVillaForfragningsunderlag";
import { privatpersonProjekteringVillaRambeskrivning } from "./PrivatpersonProjekteringVillaRambeskrivning";

/**
 * A function to calculate a service and set the price as the result.
 *
 * @param {Event} e - the event.
 * @param {*} setPrice - the price to be set.
 */
export async function calculateService(e, options) {
  let price 
  e.preventDefault()

  console.log('the options are', options)

  let hasPrivatPerson = false;
  let hasForetag = false;
  let hasVilla = false;
  let hasLagenhet = false;
  let hasRambeskrivning = false;
  let hasForfragningsunderlag = false;
  let hasBygghandling = false;
  let hasBesiktning = false;
  let hasProjektering = false;

  for (const key in options) {
    if (options[key] === "Privat person") {
      hasPrivatPerson = true;
    }
    if (options[key] === "Besiktning") {
      hasBesiktning = true;
    }

    if (options[key] === "Företag") {
      hasForetag = true;
    }

    if (options[key] === "Villa") {
      hasVilla = true;
    }

    if (options[key] === "Lägenhet") {
      hasLagenhet = true;
    }

    if (options[key] === "Rambeskrivning") {
      hasRambeskrivning = true;
    }

    if (options[key] === "Förfrågningsunderlag") {
      hasForfragningsunderlag = true;
    }

    if (options[key] === "Bygghandling") {
      hasBygghandling = true;
    }

    if (options[key] === "Projektering") {
      hasProjektering = true;
    }

    if (hasPrivatPerson && hasBesiktning) {
      price = privatpersonBesiktning(options["Antal rum? (ROK)"], options["Avstånd i mil från Stockholm"], options["Antal besiktningstillfällen"], options["Finns det dokumentation att granska?"])

      console.log(options["Antal rum? (ROK)"], options["Avstånd i mil från Stockholm"], options["Antal besiktningstillfällen"], options["Finns det dokumentation att granska?"])
    }

    if (hasPrivatPerson && hasProjektering && hasVilla && hasRambeskrivning) {
      price = await privatpersonProjekteringVillaRambeskrivning(options["Antal möten"], options["Antal rum"], options["Nivå"])
    }

    if (hasPrivatPerson && hasProjektering && hasVilla && hasForfragningsunderlag) {
     price = privatpersonProjekteringVillaForfragningsunderlag(options["Antal möten"], options["Antal rum"], options["Nivå"])
    }
     
    if (hasPrivatPerson && hasProjektering && hasVilla && hasBygghandling) {
      price = privatpersonProjekteringVillaBygghandling(options["Antal möten"], options["Antal rum"], options["Nivå"])
    }

    if (hasPrivatPerson && hasProjektering && hasLagenhet && hasRambeskrivning) {
      price = privatpersonProjekteringLagenhetRambeskrivning(options["Antal möten"], options["Antal rum"], options["Nivå"])
    }

    if (hasPrivatPerson && hasProjektering && hasLagenhet && hasForfragningsunderlag) {
      price = privatpersonProjekteringLagenhetForfragningsunderlag(options["Antal möten"], options["Antal rum"], options["Nivå"])
    }

    if (hasPrivatPerson && hasProjektering && hasLagenhet && hasBygghandling) {
      price = privatpersonProjekteringLagenhetBygghandling(options["Antal möten"], options["Antal rum"], options["Nivå"])
    }

    if (hasForetag && hasProjektering) {
      price = foretagProjektering(options["Antal lägenheter"], options["Antal möten"], options["Nivå"], options["Omfattning övriga utrymmen"])
    }

  }
  return price
}
