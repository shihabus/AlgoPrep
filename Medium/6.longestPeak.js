// given an array
// find the length of longest peak
// peak is a an element 
// with strictly decreasing sequence 
// to the right and left

//    * 
//   / \
//  /   \
// /     \
//        \

// Note:
// the least possible peak
// is of length 3

function longestPeak(array) {
    // a variable to hold the running longest peak length
    let longestPeakLength = 0;
  
    // set a pointer, that starts from idx 1 (second element) 
    // and goes till array.length-1 (second last)
    // this pointer will keep track of the element
    // to be checked if a peak or not
    let idx = 1;
    while (idx < array.length - 1) {

      // check if current number is a peak
      // an element is a peak if 
      // it is greater than  
      // left element and right elements
      const isPeak = array[idx - 1] < array[idx] && array[idx + 1] < array[idx];
  
      // if not peak, move to next element
      if (!isPeak) {
        idx++;
        continue;
      }
  
      // else if it is a peak
      // we can find the length of it
  
      // finding the length of the peak towards left:
      // for that we set left pointer
      // it can start from idx - 2 as we 
      // already know idx-1 is part of the peak
      let leftIdx = idx - 2;

      // as far as the elements are strictly decreasing
      // we move the leftwards pointer to left
      while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
        leftIdx--;
      }
  
      // finding the peak length rightwards:
      let rightIdx = idx + 2;
      // as far as the elements are strictly decreasing
      // keep on moving the pointer right
      while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
        rightIdx++;
      }
  
      // finding length of the current peak:
      // it is the difference of left and right pointers - 1
      // we subtract 1 since array is 0 indexed
      const currentPeakLength = rightIdx - leftIdx - 1;
  
      // if currentPeakLength is greater than running longestPeakLength 
      // replace running longestPeakLength
      longestPeakLength = Math.max(currentPeakLength, longestPeakLength);
  
      // for next iteration we can start from the rightmost pointer
      // as we already know, in the range 
      // idx to rightIdx, elements are strictly decreasing
      // and there isn't a peak
      idx = rightIdx;
    }
    return longestPeakLength;
  }
  
  const input = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
  console.log(longestPeak(input));
  