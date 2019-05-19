/* how to speak whale */

const input = 'I need to take my dog for a walk.';
const vowels = ['a','e','i','o','u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]); // pushes my results to resultArray
        }
    }
    if (input[i] === 'e') {
        resultArray.push(input[i]); // doubles the e character in resultArray
    }
    if (input[i] === 'u') {
        resultArray.push(input[i]); // doubles the u character in resultArray
    }
}

console.log(resultArray.join('').toUpperCase());