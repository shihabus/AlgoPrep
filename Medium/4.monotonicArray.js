// An array is said to be monotonic if,
// for i <= j, a[i] <= a[j](non-decreasing/monotone increasing) or a[i] >= a[j](non-increasing/monotone decreasing)

// Given an array check if it is monotonic

// nonIncreasing
// ---\        
//     \      
//      \    
//       ----\
//            \
//             \
//              \
//               \

// \
//  \
//   \
//    \
//     \
//      \

// non-decreasing 
//                      /
//        /-------------
//       /
//      /
//   /--
//  /
// /

//     /
//    /
//   /
//  /
// /



// we try to find the direction(the trend)
// of previous pair and current pair
// if the directions are not matching,
// the array is not monotonic

// O(n) Time | O(1) Space
function isMonotonic(arr){
    // if arr.length is less than 2(only 2 elements)
    // then it is monotonic
    if(arr.length<2){
        return true
    }

    // if arr.length is more than 2
    // try to find the direction,
    // whether array is non-decreasing or non-increasing
    let direction=arr[1]-arr[0]
    for(let i=2;i<arr.length;i++){
        // elements are same,
        // the difference is 0
        // note: an array with all elements being same is monotonic
        if(direction===0){
            // we find the direction by 
            // finding the difference between current and previous element
            direction=arr[i]-arr[i-1]
            continue
        }

        // check if direction is getting broken
        // if getting broken, the given array
        // is not monotonic
        if(isDirectionBreaking(direction,arr[i-1],arr[i])){
            return false
        }
    }
    return true
}

// the direction is broken if
// previous direction and current direction are different
function isDirectionBreaking(direction,prevElement,currentElement){
    const currentDirection=currentElement-prevElement
    // if previous direction is increasing
    // the direction breaks if current direction is decreasing
    if(direction>0){
        return currentDirection<0
    }
    // if previous direction is decreasing
    // the direction breaks if current direction is increasing
    return currentDirection>0
}

// ------------
// an array with all elements being same is
// nonDecreasing and nonDecreasing at the same time 

// to start with we assume the array is both non decreasing and non increasing
// if the array is found to trending up, we can negate the non increasing condition
// if the array is found to trending down, we can negate the non decreasing condition
// for array to be monotonic it has to be either strictly trending up or trending down

// O(n) Time | O(1) Space
function isMonotonic(arr){
    // to begin with 
    // we assume array is isNonDecreasing and isNonIncreasing
    let isNonDecreasing=true // trending up
    let isNonIncreasing=true // trending down

    for(let i=1;i<arr.length;i++){
        // if it is strictlyDecreasing
        if(arr[i]<arr[i-1]){
            // then it is decreasing or trending down
            isNonDecreasing=false
        }
        
        // if it is strictlyIncreasing
        if(arr[i]>arr[i-1]){
            // then it is increasing or trending up
            isNonIncreasing=false
        }
    }
    // to be monotonic, either one or both of the values should be true
    return isNonDecreasing || isNonIncreasing
}

const input=[-1,-5,-10,-1100,-1100,-1101,-1102,-9001]
console.log(isMonotonic(input))