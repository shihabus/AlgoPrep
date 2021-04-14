/**
 * given a lower case english alphabet string
 * return the index of first non-repeating character,
 * if no non-repeating character, just return -1
 */

// Time O(n) | Space O(1) 
// space is constant as we are only considering 
// lowercase english alphabets as inputs

// function firstNonRepeatingCharacter(string) {
//   // first create a hashMap with frequency
//   let charFrequency = {};
//   // O(n)
//   for (let char of string) {
//     if (!(char in charFrequency)) {
//       charFrequency[char] = 0;
//     }
//     charFrequency[char] += 1;
//   }

//   // find the index of first non-repeating character
//   // O(n)
//   for (let idx in string) {
//     const currentChar = string[idx];
//     if (charFrequency[currentChar] === 1) {
//       return +idx;
//     }
//   }

//   return -1;
// }

// Time O(n^2) | Space O(1)
// function firstNonRepeatingCharacter(string) {
//   for(let outerIdx=0;outerIdx<string.length;outerIdx++){
//     let duplicated=false
//     for(let innerIdx=0;innerIdx<string.length;innerIdx++){
//       const outerChar=string[outerIdx]
//       const innerChar=string[innerIdx]
//       if(innerChar===outerChar&&outerIdx!==innerIdx){
//         duplicated=true
//       }
//     }
//     if(!duplicated) return outerIdx
//   }
//   return -1
// }




firstNonRepeatingCharacter("faadabcbbebdf");

