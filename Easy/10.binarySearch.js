const input = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];

// O(log(N)) Time, half of entires are eliminated on each turn of iteration
// O(log(N)) Space, since we will have that many frames in call stack
function binarySearchRecursive(arr, target) {
  return binarySearchHelper(arr, target, 0, arr.length - 1);
}

function binarySearchHelper(arr, target, left, right) {
  // base case 1:
  // left pointer surpass right pointer
  // target not found
  if (left > right) {
    return -1;
  }

  // calculate the middle pointer
  const middle = Math.floor((left + right) / 2);
  const potentialMatch = arr[middle];

  // base case 2:
  // if target===potentialMatch
  if (target === potentialMatch) {
    return middle;
  }

  // base case 3:
  // if target < potentialMatch
  // move right pointer to the left of middle pointer
  // i.e, ignore all entries to the right of middle pointer,
  // including middle pointer
  // since they are anyways greater than target
  if (target < potentialMatch) {
    return binarySearchHelper(arr, target, left, middle - 1);
  }

  // base case 4:
  // if target > potentialMatch
  // move left pointer to the right of middle pointer
  // i.e, ignore all entries to the left of middle pointer
  // including middle pointer
  // since they are anyways less than target
  if (target > potentialMatch) {
    return binarySearchHelper(arr, target, middle + 1, right);
  }
}

console.log(binarySearchRecursive(input, 33));

// O(log(N)) Time
// O(1) Space
function binarySearchIterative(arr,target){
    // set initial pointers
    let left=0
    let right=arr.length-1

    // until left surpass right
    while(left<=right){
        const middle=Math.floor((left+right)/2)
        const potentialMatch=arr[middle]

        // case 1: target === potentialMatch(Middle pointer)
        if(target===potentialMatch){
            return middle
        }
        // case 2: target < potentialMatch(Middle pointer)
        // move left pointer to the right of middle pointer
        if(target<potentialMatch){
            right=middle-1
        }
        // case 3: target > potentialMatch(Middle pointer)
        // move right pointer to the left of middle pointer
        else if(target>potentialMatch){
            left=middle+1
        }
    }
    return -1
}

console.log(binarySearchIterative(input, 71));
