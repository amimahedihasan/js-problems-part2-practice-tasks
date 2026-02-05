const heights2 = [167, 190, 120, 165, 137];
function smallestNumber (array){
    let min = array[0]
    for(const element of array){
        if(min > element){
            min = element
        }
        // console.log(element)
    }
    return min;
}
const arrayIs = smallestNumber(heights2)
console.log("The Smallest number is : " ,arrayIs)