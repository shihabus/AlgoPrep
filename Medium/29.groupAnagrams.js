// INPUT
// An array of words

// OUTPUT
// A grouped array of arrays, which are anagram groups

// Anagram: a word that can be created from another word, by re-arranging its characters

// INCOMPLETE solutions

const input = ["yo", "act", "flop", "tac", "cat", "oy", "olfp"];
function groupAnagrams(words) {
  const anagrams = {};

  for (const word of words) {
    // alphabetically sort the word
    const sortedWord = word.split("").sort().join("");

    // if the word is already present as key
    // push it to the value array
    if (sortedWord in anagrams) {
      anagrams[sortedWord].push(word);
    }
    // create a new key
    else {
      anagrams[sortedWord] = [word];
    }
  }

  return Object.values(anagrams);
}

groupAnagrams(input);
