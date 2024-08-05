import { toSellOrNotToSell, usePottery } from "./Pottery-Catalog.js";
import { makePottery } from "./Pottery-Wheel.js";
import { firePottery } from "./kiln.js";

// Make 5 pieces of pottery at the wheel
const mug = makePottery("Mug", 6.3, 6);
const vase = makePottery("Vase", 7.0, 8);
const bowl = makePottery("Bowl", 4.2, 5);
const plate = makePottery("Plate", 9.1, 1.5);
const cup = makePottery("Cup", 3.0, 4);

// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 2100);
const firedVase = firePottery(vase, 2300);
const firedBowl = firePottery(bowl, 2200);
const firedPlate = firePottery(plate, 2000);
const firedCup = firePottery(cup, 2250);

// View the fired pottery objects
console.log(firedMug);
console.log(firedVase);
console.log(firedBowl);
console.log(firedPlate);
console.log(firedCup);

toSellOrNotToSell(firedMug)
toSellOrNotToSell(firedVase)
toSellOrNotToSell(firedBowl)
toSellOrNotToSell(firedPlate)
toSellOrNotToSell(firedCup)
