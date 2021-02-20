// Levenshtein Distance

// INPUTS
// 1. two strings,str1 of length m and str2 of length n

// OUTPUTS
// minimum no.of edits on str1 to get str2

// Edits can of 3 types
// 1. substitution
// 2. removal
// 3. insertion

// -------- 1 ---------

// construct a 2-d array of size mxn, called Edits array, E
// str2 along col
// str1 along row
// we will pre-pend " " with each strings

// at each indices we insert
// the min no.of edits required on str1 to make str2 so far

// if characters at consideration are the same,
// str1[i-1]==str2[j-1]
// we require the no.of edits in the nearest diagonal,i.e
// E[r][c]=E[r-1][c-1]

// else we require 1 + minimum edits among the closest neighbours
// E[r][c]=1+min(E[r-1][c],E[r-1][c-1],E[r][c-1])

const str1 = "abc";
const str2 = "yabd";

// Time: O(mn), finding the min at E[r][c] is mostly comparison, which is of O(1) complex
// Space: O(mn)

function minimumEditsRequired(str1, str2) {
  const edits = [];
  for (let i = 0; i < str2.length + 1; i++) {
    const row = [];
    for (let j = 0; j < str1.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    edits.push(row);
  }

  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        edits[i][j] = edits[i - 1][j - 1];
      } else {
        edits[i][j] =
          1 + Math.min(edits[i - 1][j - 1], edits[i - 1][j], edits[i][j - 1]);
      }
    }
  }
  return edits[str2.length][str1.length];
}

minimumEditsRequired(str1, str2);
