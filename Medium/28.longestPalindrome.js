// INPUT
// A string

// OUTPUT
// Longest substring which is a palindrome

/**
Write a function that, given a string, returns its longest palindromic substring.
A palindrome is defined as a string that's written the same forward and backward. 
Note that single-character strings are palindromes.
You can assume that there will only be one longest palindromic substring.
*/

const input = "abaxyazzayxf";

// function isPalindrome(str) {
//   let leftIdx = 0;
//   let rightIdx = str.length - 1;
//   while (leftIdx < rightIdx) {
//     if (str[leftIdx] !== str[rightIdx]) {
//       return false;
//     }
//     leftIdx++;
//     rightIdx--;
//   }
//   return true;
// }

// function getLongestPalindrome(string) {
//   let longest = "";
//   for (let i = 0; i < string.length; i++) {
//     for (let j = 1; j < string.length; j++) {
//       // j+1 as it is exclusive
//       const subString = string.slice(i, j + 1);

//       if (subString.length > longest.length && isPalindrome(subString)) {
//         longest = subString;
//       }
//     }
//   }
//   return longest;
// }

// ----- 2 -------

function getLongestPalindromeFrom(str, leftIdx, rightIdx) {
  while (leftIdx >= 0 && rightIdx < str.length) {
    if (str[leftIdx] !== str[rightIdx]) {
      break;
    }
    leftIdx--;
    rightIdx++;
  }
  return [leftIdx + 1, rightIdx];
}

function getLongestPalindrome(str) {
  // while slicing rightIdx is exclusive
  let currentLongest = [0, 1];
  for (let i = 0; i < str.length; i++) {
    // mid-point is str[i]
    const odd = getLongestPalindromeFrom(str, i - 1, i + 1);
    // mid-point is between str[i-1] and str[i]
    const even = getLongestPalindromeFrom(str, i - 1, i);
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest =
      currentLongest[1] - currentLongest[0] > longest[1] - longest[0]
        ? currentLongest
        : longest;
  }
  return str.slice(currentLongest[0], currentLongest[1]);
}

getLongestPalindrome(input);
