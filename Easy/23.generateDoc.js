/**
 * given a characters list and a doc
 *
 * write a function which return TRUE is the given doc can
 * be generated from the characters or not
 *
 * to generate the doc, the unique character count in the char
 * list must be greater than or equal to the frequency of the
 * character in the doc string
 *
 * characters = "abcabc"
 * document = "aabbccc"
 * false bcz we need 3 c but only have 2 in the characters list
 *
 * characters = "Bste!hetsi ogEAxpelrt x "
 * document = "AlgoExpert is the Best!"
 * true
 */

// IN COMPLETE
// function generateDocument(characters, document) {
//   characters = characters.split("").sort().join('');
//   document = document.split("").sort().join('');

//   let docIdx = 0;
//   let charIdx = 0;

//   while (docIdx < document.length) {
//     let charChar = characters[charIdx];
//     let docChar = document[docIdx];

//     if (charIdx >= characters.length) {
//       return false;
//     }

//     if (charChar === docChar) {
//       charIdx++;
//       docIdx++;
//     } else if (charChar != docChar) {
//       charIdx++;
//     }
//   }

//   return true;
// }

// ------------------------

// m -> document string length
// n -> character string length

// Time: O(m*(m+n)) | Space O(1) 

// Here we can't know whether we have already computed
// the char count for a given character, thus time
// complexity is not optimal

// function generateDocument(characters, document) {
//   // for each char in document
//   // O(m)
//   for(let char of document){
//     // get the count of the char in document and character string
//     // O(m)
//     const charCountInDoc=getCharcountInTarget(char,document)
//     // O(n)
//     const charCountInChar=getCharcountInTarget(char,characters)

//     // if the char count in document is greater than
//     // char count in character string, we cannot generate the doc
//     // from the given character string
//     if(charCountInDoc > charCountInChar){
//       return false
//     }
//   }

//   return true

//   function getCharcountInTarget(character,target){
//     let charCount=0
//     for(let char of target){
//       if(char===character){
//         charCount++
//       }
//     }
//     return charCount
//   }
// }

// ------------------------

// Time: O(c*(m+n)) | Space O(1) 
function generateDocument(characters, document) {
  let alreadyCountedChars = new Set();
  // for each char in document
  // O(m)
  for (let char of document) {
    // if the current char is already counted
    // don't repeat, this will limit the computation to
    // c which is the uniquire character count
    if (char in alreadyCountedChars) continue;

    // get the count of the char in document and character string
    // O(m)
    const charCountInDoc = getCharcountInTarget(char, document);
    // O(n)
    const charCountInChar = getCharcountInTarget(char, characters);

    // if the char count in document is greater than
    // char count in character string, we cannot generate the doc
    // from the given character string
    if (charCountInDoc > charCountInChar) {
      return false;
    }

    alreadyCountedChars.add(char);
  }

  return true;

  function getCharcountInTarget(character, target) {
    let charCount = 0;
    for (let char of target) {
      if (char === character) {
        charCount++;
      }
    }
    return charCount;
  }
}

// ------------------------

// Time: O(m+n) | Space: O(m+n)
// function generateDocument(characters, document) {
//   let charMapOfCharacters = null;
//   let charMapOfdocument = null;

//   // O(n)
//   charMapOfCharacters = generateCharMap(characters);
//   // O(m)
//   charMapOfdocument = generateCharMap(document);

//    // O(m)
//   for(let char of document){
//     // if char is missing in character or its count is less than that in document
//     // we can't generate the document using the given character string
//     if(charMapOfCharacters[char]<charMapOfdocument[char]||!charMapOfCharacters[char]){
//       return false
//     }
//   }

//   return true

//   function generateCharMap(string) {
//     let charMap = {};
//     for (let char of string) {
//       if (char in charMap) {
//         charMap[char] += 1;
//       } else {
//         charMap[char] = 1;
//       }
//     }
//     return charMap;
//   }
// }

// ------------------------

// n -> characters
// m -> document

// Time O(m+n) | Space O(c)
function generateDocument(characters, document) {
  // create a hash table of character chars
  const charMap = {};
	
	// O(n)
  for (let char of characters) {
    if (char in charMap) {
      charMap[char] = charMap[char] + 1;
    } else {
      charMap[char] = 1;
    }
  }

	// O(m)
  for (let char of document) {
    if (char in charMap) {
      if (charMap[char] === 0) {
        return false;
      }
      charMap[char] = charMap[char] - 1;
    } else {
      return false;
    }
  }

  return true;
}


generateDocument('Bste!hetsi ogEAxpelrt x ', 'AlgoExpert is the Best!');
