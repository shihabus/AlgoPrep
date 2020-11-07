// check if a give string is palindrome

// O(n^2) Time, bcz for each character, we create a new string
// O(n) Space, since we create a new string to store the reversedString

function isPalindrome(inputString) {
  // try to create a reversed string from the given string
  let reversedString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }

  //   the given string is a palindrome if reversedString===inputString
  return reversedString == inputString;
}

// -----------------
// O(n) Time, since we use an array instead of string.
// Pushing to an array is O(1) time complex
// O(n) Space

function isPalindrome(inputString) {
  // create a character array of reversed string
  const characterArr = [];
  for (let i = inputString.length - 1; i >= 0; i--) {
    characterArr.push(inputString[i]);
  }
  // compare the string created out of reversed string characterArr
  // with the input string
  // if they are equal, it is a palindrome
  return characterArr.join("") == inputString;
}

// -----------------
// O(n) time, even though we only traverse over
// half of the input string, time complexity still converges to O(n)
// O(n) space, since we use recursion we will have O(n/2) frames in stack --> O(n)

function isPalindrome(inputString, first = 0) {
  // for a given substring check if first and last chars are the same

  // last character pointer
  const last = inputString.length - 1 - first;

  // base case 1:
  // if left char pointer surpass right char pointer, the string is a palindrome
  if (first >= last) {
    return true;
  }

  // base case 2:
  // if they are same call the isPalindrome function
  // on the substring in the range(i+1,inputString.length - 1 -i)
  else if (inputString[first] === inputString[last]) {
    return isPalindrome(inputString, first + 1);
  }

  // base case 3:
  //  if the first and last characters are not equal,
  //  it is not a palindrome and we can break
  else {
    return false;
  }

  //   return i >= j
  //     ? true
  //     : inputString[i] === inputString[j] && isPalindrome(inputString, i + 1);
}

// -----------------
// O(n) time, event though we traverse
// only till the half of inputString
// still it converges to O(n)
// O(1) space, as the only extra space we use is that of the pointers

function isPalindrome(inputString) {
    // have a left and right pointer
    let leftIdx = 0;
    let rightIdx = inputString.length - 1;
  
    // iterate until the pointers surpass
    while (leftIdx <= rightIdx) {
      // if chars didn't match, break
      if (inputString[leftIdx] !== inputString[rightIdx]) {
        return false;
      }
      leftIdx++;
      rightIdx--;
    }
    return true;
  }
  
  const input = "abcdcba";
  console.log(isPalindrome(input));
  