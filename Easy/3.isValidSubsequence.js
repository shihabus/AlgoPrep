// Given an Array and a sequence, validate if sequence is a subsequence or not
// the give will have unique elements only (no repetition)

// ===== 1 ====

// set two pointers
// one on the array and another on the sequence
// move the pointer on array one step ahead
// if array element matches sequence element, move sequence pointer one step
// iterate until array or seq has completely covered
// if sequence pointer have traversed the whole sequence then the sequence is a subsequence of given array

// time O(n): we traverse only once over the array
// it may seems to be like n^2, but in the inner iteration we don't start over
// space O(1)
function isValidSubsequence(array, sequence) {
  let arrIdx = 0;
  let seqIdx = 0;
  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
    arrIdx++;
  }
  return seqIdx === sequence.length;
}

// ==== 2 ====

// instead of while loop
// using for loop

// time O(n) | Space O(1)
function isValidSubsequence(array, sequence) {
  let seqIdx = 0;
  for (let item of array) {
    if (seqIdx === sequence.length) break;
    if (item === sequence[seqIdx]) seqIdx++;
  }
  return seqIdx === sequence.length;
}

const arr = [2, 4, 6, 7, -1, 10, 3, 19];
const seq = [4, -1, 3];

const isValid = isValidSubsequence(arr, seq);
