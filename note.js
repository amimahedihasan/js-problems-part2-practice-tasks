// ==========================================
// PROGRAM 1: Simple Comparison (Who gets the strawberry?)
// ==========================================
const disha = 56;
const salman = 60;
if(disha > salman){
    console.log('Disha Will get the Strawberry')
}
else{
     console.log('Salman Will get the Strawberry')
}

// ==========================================
// PROGRAM 2: Function to find the maximum between two numbers
// ==========================================
function getMax (num1, num2){
    if(num1> num2){
        return num1
    }
    else{
        return num2
    }
}
const max1 = getMax(56, 79)
const max2 = getMax(556, 99)
console.log("Max Number is :" , max1 , max2)

// ==========================================
// PROGRAM 3: Finding the 'Boss' among three people using if-else
// ==========================================
const jim = 56;
const tim = 68;
const kim = 5856;
if (jim > tim && jim>kim){
    console.log('Jim is the ultimate boss')
}
else if(tim>jim && tim>kim){
    console.log('Tim is the boss')
}
else{
    console.log('kim is the kardashians boss')
}

// ==========================================
// PROGRAM 4: Function to find the maximum of three numbers
// ==========================================
function maxOfThree(num1, num2 ,num3){
    if(num1>num2 && num1> num3){
        return num1
    }
    else if(num2>num3 && num2>num1){
        return num2
    }
    else{
        return num3
    }
}
const num = maxOfThree(565, 75669, 9853)
console.log("Max Number is :", num )

// ==========================================
// PROGRAM 5: Finding maximum using JavaScript's built-in Math.max()
// ==========================================
const maximum = Math.max(12, 1, 56)
console.log('Max using Math.max :' , maximum)

// ==========================================
// PROGRAM 6: Finding the largest value in an Array
/* সহজ ব্যাখ্যা (কঠিন অংশ): 
এখানে 'let max = numbers[0]' মানে হলো আমরা শুরুতে প্রথম সংখ্যাটিকে সবচেয়ে বড় ধরে নিচ্ছি। 
এরপর লুপের মাধ্যমে এক এক করে বাকি সব সংখ্যার সাথে সেটিকে তুলনা করছি। 
যখনই বর্তমান সংখ্যার চেয়ে বড় কেউ আসছে, 'max' তাকেই নিজের জায়গায় বসিয়ে দিচ্ছে।
*/
// ==========================================
const height = [65, 80,85,8,582,58,88,66,65]
function getMax (numbers){
    let max = numbers[0];
    for(const num of numbers){
        if (num > max ){
            max = num;
        }
    }
    return max;
}
const max = getMax(height)
console.log('max value is :' , max)

// ==========================================
// PROGRAM 7: Furniture Wood Calculation (cft)
// ==========================================
function woodQuantity (chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairTotalWood = perChairWood * chairQuantity
    const tableTotalWood = perTableWood * tableQuantity
    const bedTotalWood = perBedWood * bedQuantity
    const totalWood = chairTotalWood +bedTotalWood + tableTotalWood;
    return totalWood
}
const wood = woodQuantity(5 ,2, 2)
console.log("Wood Needed ", wood)

// ==========================================
// PROGRAM 8: Total Price Calculation (Fixed rates)
// ==========================================
function totalPrice (shirtQuantity, pantQuantity, shoeQuantity){
    const perShirtPrice = 500;
    const perShoePrice = 200;
    const perPantPrice = 300;
    const shirtTotalPrice = perShirtPrice * shirtQuantity
    const pantTotalPrice = perPantPrice * pantQuantity
    const shoeTotalPrice = perShoePrice * shoeQuantity
    // Note: 'totalPrice' variable name matches function name (be careful in future)
    totalPrice = pantTotalPrice + shirtTotalPrice + shoeTotalPrice
    return totalPrice;
}
const quantity = totalPrice(5, 2, 96)
console.log("Total Price:" ,quantity);

// ==========================================
// PROGRAM 9: Finding the Minimum value in an Array
// ==========================================
const prices = [20000, 16000, 10000, 75000,65000,66000,87200]
function getMin (numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(min > num){
            min = num;
        }
    }
    return min;
}
const result = getMin(prices)
console.log("The smallest Number is :", result)

// ==========================================
// PROGRAM 10: Array Validation (Checking if input is an Array)
/* সহজ ব্যাখ্যা (কঠিন অংশ): 
typeof দিয়ে অ্যারে চেক করা যায় না, তাই 'Array.isArray(numbers)' ব্যবহার করা হয়েছে। 
যদি ইনপুটটি অ্যারে না হয় (false হয়), তবে সে একটি এরর মেসেজ রিটার্ন করবে। 
এটি কোড ক্রাশ হওয়া থেকে বাঁচায়।
*/
// ==========================================
function getSecond(numbers){
    if (Array.isArray(numbers) === false){
        return 'Please provide an Array'
    }
    const second = numbers[1];
    return second;
}
const second = getSecond(55)
console.log(second)