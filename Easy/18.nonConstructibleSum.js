/*
given an array of coins, find the most minimum change that
can't be generated. The coins need not be unique, and you
can only use the coins, the no.of time it appear in the array

V: coin value
C: sum of change created with all coins till last coin or current_biggest_change

sort the coins
For each V,
if(V>C+1) then that C+1 is the change that can't be created
else if(v<=C+1) then add V to C and continue, C+=V. This implies the currently available coins can create changes in the range [1,2,.....,C]

Since we are bothered about most minimum change that can be created by the coins, it is always the biggest_change+1. If next coin is greater than that, it means it can't create the change biggest_change+1.

if no coins are available, the minimum change that can be made is 1
*/
const coins=[5, 7, 1, 1, 2, 3, 22]

function nonConstructibleChange(coins) {
  let current_biggest_change=0
  coins.sort((a,b)=>a-b)
  for(let coin of coins){
    if(coin>current_biggest_change+1) return current_biggest_change+1
    current_biggest_change+=coin
  }
  return current_biggest_change+1;
}

// Do not edit the line below.
nonConstructibleChange(coins)
