import { makePottery } from "./Pottery-Wheel.js"
import { usePottery } from "./Pottery-Catalog.js"

export const potteryList = () => {

    let potteryHTML = ''
    //call `usePottery()` inside the function to get the list of sellable pottery items.
    const sellableItems = usePottery()

    for (const pottery of sellableItems) {
        potteryHTML += `
        <section class="pottery" id="pottery--${pottery.id}">
            <h2 class="pottery__shape">${pottery.shape}</h2>
            <div class="pottery__properties">
                Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
            </div>
            <div class="pottery__price">Price is $${pottery.price}</div>
        </section>
        `
    }
    return potteryHTML;
}

