// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName (string){
    let min = string[0];
    for (const char of string){
        if(min.length > char.length){
            min = char;
        }
        // console.log(char)
    }
    return min;
}
const nameString = smallestName(heights2)
console.log(nameString)



