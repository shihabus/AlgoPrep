// Insertion Sort

// create a tentatively sorted list,
// [to start with, first element is assumed sorted by itself]
// as we move forward in the main array
// place the current element at the proper 
// position in the tentatively sorted array
// we do this by checking if adjacent elements in the 
// tentatively sorted list is in proper order

// O(n^2) Time
// O(1) Space
function insertionSort(arr){
    // iterate over main array
    for(let i=0;i<arr.length;i++){
        let j=i

        // iterate over tentatively sorted array

        // the left most element will always be the 
        // smallest through out the iterations(sorted)
        // so we only iterate till idx ===1 

        // if two adjacent elements are not sorted,
        // swap their position
        while(j>0 && arr[j]<arr[j-1]){
            swap(j,j-1,arr)
            j--
        }
    }
    return arr
}

function swap(i,j,arr){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}

const input=[8,5,2,9,5,6,3]
console.log(insertionSort(input))