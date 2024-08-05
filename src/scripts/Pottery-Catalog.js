import { makePottery } from "./Pottery-Wheel.js"

const potteryInventory = [];

export const toSellOrNotToSell = (pottery) => {
    if (pottery.cracked){
        return;
    }
    if (pottery.weight >= 6) {
        pottery.price = 40
    } else {
        pottery.price = 20
    }

    potteryInventory.push(pottery)
    
} 
export const usePottery = () =>{

    return potteryInventory.slice();
}
