// given a string and a key,
// shift each character by that many places

// O(n) ST

// ASCII
// a --> 97
// z --> 122

function ceasarCipherEncryptor(string, key) {
  // we find the unicode of the char
  // add the key to the unicode
  // find the char corresponding to the new code
  const newLetter = [];
  // we do mod of 26 bcz
  // currently we consider only small case
  // english alphabets, and they are 26 chars
  // suppose given key is 54 --> 26 + 26 + 2,
  // i.e, it is equivalent to key being 2
  // if we don't take mod, we will end up getting a newCode greater
  // our alphabet mappings, here which is 122 
  // and getting a non-alphabetic char on conversion
  key = key % 26;
  for (const char of string) {
    const newChar = getNewChar(char, key);
    newLetter.push(newChar);
  }
  return newLetter.join("");
}

// find the new key places shifted
// char for the given character
function getNewChar(char, key) {
  // newCharCode is unicode char + key
  const newCharCode = char.charCodeAt() + key;
  if (newCharCode <= 122) {
    return String.fromCharCode(newCharCode);
  }
  // if newCharCode is greater than 122
  // we need to find the mod of 122
  // for example if char code is 123
  // it is 123 --> 122 + 1 --> 1 --> a
  return String.fromCharCode(96 + (newCharCode % 122));
}

// O(n) Time Space,
// but if the custom charset length is m,
// then O(n+m) is the space time complexity
function ceasarCipherEncryptor(string, key) {
  const newCharArr = [];
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  const modKey = key % 26;
  for (const char of string) {
    const newChar = getShiftedChar(char, modKey, alphabets);
    newCharArr.push(newChar);
  }
  return newCharArr.join("");
}

function getShiftedChar(char, key, charset) {
  const shiftedCharCode = charset.indexOf(char) + key;
  if (shiftedCharCode <= 25) {
    return charset[shiftedCharCode];
  }

  return charset[-1 + (shiftedCharCode % 25)];
}

const input = "xyz";

console.log(ceasarCipherEncryptor(input, 2));
// On shifting by 2 places
// x-->z
// y-->a
// z-->b
