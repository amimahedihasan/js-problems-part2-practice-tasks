// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity){
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;
    const laptopTotalPrice = laptopPrice * laptopQuantity;
    const tabletTotalPrice = tabletPrice * tabletQuantity;
    const mobileTotalPrice = mobilePrice * mobileQuantity;
    const totalMoney = tabletTotalPrice + mobileTotalPrice + laptopTotalPrice;
    return totalMoney;
}
const quantity = calculateElectronicsBudget(5, 6, 5);
console.log("The Total Price is : " ,quantity);

