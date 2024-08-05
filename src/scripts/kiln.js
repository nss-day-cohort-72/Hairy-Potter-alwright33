export const firePottery = (makePottery, temperature) => {
    
    makePottery.fired = true

    if (temperature > 2200) {
        makePottery.cracked = true
    } else {
        makePottery.cracked = false
    }
    return makePottery
}
