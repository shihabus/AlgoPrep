const ip = [-7, -3, 1, 9, 22, 30];

/*
Given an array of integers(both -ve and +ve) sorted in asc order
return an array with squared values of elements in asc order
 */

// O(n.log(n)) T | O(n) space
function sortedSquaredArray(array) {
  return array.map((num) => num * num).sort((a, b) => a - b);
}

// O(n) ST
/*
In order to reduce time complexity, we are no more sorting the resultant
array. Rather we insert the squared values at the exact position.
*/
function sortedSquaredArray(array) {
  // Write your code here.
  // let L=0
  // let R=array.length-1
  // const result=[]
  // while(L<=R){
  //   const left=array[L]
  //   const right=array[R]
  //   if(Math.abs(left)<Math.abs(right)){
  //     result.unshift(right**2)
  //     R--
  //   }else{
  //     result.unshift(left**2)
  //     L++
  //   }
  // }
  // return result

  const result = new Array(array.length).fill(0);
  let L = 0;
  let R = array.length - 1;
  for (let idx = array.length - 1; idx >= 0; idx--) {
    const left = array[L];
    const right = array[R];
    if (Math.abs(left) > Math.abs(right)) {
      result[idx] = left ** 2;
      L++;
    } else {
      result[idx] = right ** 2;
      R--;
    }
  }
  return result;
}

// Do not edit the line below.
sortedSquaredArray(ip);
