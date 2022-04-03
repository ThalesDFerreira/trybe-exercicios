// const factorial = number => {
//   let result = 1;

//   for (let index = 2; index <= number; index += 1) {
//       result *= index;
//   }

//   return result;
// }

// console.log(factorial(3));


// Recursiva

// const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
// console.log(factorial(2));


// const longestWord = text => {
//   let wordArray = text.split(' ');
//   let maxLength = 0;
//   let result = '';

//   for (const word of wordArray) {
//       if (word.length > maxLength) {
//           maxLength = word.length;
//           result = word;
//       }
//   }

//   return result;
// }

// console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));


// const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

// console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));