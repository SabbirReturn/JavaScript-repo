function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    let perChairWood = 3;
    let perTableWood = 4;
    let perBedQuantity= 6;

    let allChairWood = chairQuantity * perChairWood;
    let allTableWood = tableQuantity * perTableWood;
    let allBedWood = bedQuantity * perBedQuantity;
    let totalWood = allChairWood + allTableWood + allBedWood;
    return totalWood
}

let wood = woodQuantity(2,3,4)
console.log('Total Wood:', wood)