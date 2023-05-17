// The variables that are used in the formula.
const besiktningPrivatProtokoll = 1
const besiktningPrivatDokumentation = 1
const prisPrivatBesiktningsman = 1

/**
 * A function that calculates the price for the privatperson besiktning service.
 *
 * @returns {number} price.
 */
export function privatpersonBesiktning(valdAntalRum, besiktningMilersattning, antalBesiktningstillfallen, dokumentation) {
    // if the answer is yes then add besiktningPrivatDokumentation to the formula
    // antalBesiktningstillfallen is the number of meetings

    let price = 0

    // choices for chosen number of rooms
    if (valdAntalRum === '1-5') {
        valdAntalRum = 1
        console.log('valdAntalRum is', valdAntalRum)
    }
    if (valdAntalRum === '6-12') {
        valdAntalRum = 2
    }
    if (valdAntalRum === '13-20') {
        valdAntalRum = 3
    }

    
    // chosen distance from Stockholm
    if (besiktningMilersattning === '0-20') {
        besiktningMilersattning = 1
        console.log('besiktningMilersattning is', besiktningMilersattning)
    }
    if (besiktningMilersattning === '21-30') {
        besiktningMilersattning = 2
    }
    if (besiktningMilersattning === '31-40') {
        besiktningMilersattning = 3
    }
    if (besiktningMilersattning === '41-50') {
        besiktningMilersattning = 4
    }
    if (besiktningMilersattning === '51-60') {
        besiktningMilersattning = 5
    }
    if (besiktningMilersattning === '61-70') {
        besiktningMilersattning = 6
    }
    if (besiktningMilersattning === '71-80') {
        besiktningMilersattning = 7
    }
    if (besiktningMilersattning === '81-90') {
        besiktningMilersattning = 8
    }
    if (besiktningMilersattning === '91-100') {
        besiktningMilersattning = 9
    }
    
    if (dokumentation === 'Ja') {
        price += (((valdAntalRum + besiktningMilersattning + besiktningPrivatProtokoll) * antalBesiktningstillfallen) + besiktningPrivatDokumentation) * prisPrivatBesiktningsman
        console.log('the price is', price)
    }

    if (dokumentation === 'Nej') {
        price += (((valdAntalRum + besiktningMilersattning + besiktningPrivatProtokoll) * antalBesiktningstillfallen)) * prisPrivatBesiktningsman
        console.log('the price is', price)
    }   

    return price
}