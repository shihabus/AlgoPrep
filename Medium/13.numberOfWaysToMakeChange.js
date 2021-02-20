// given a target amount 💰
// and different denominations 💵 of cash/coin
// find the no.of may to make the target amount using the denominations
// you have infinite no.of coins/cash for each denomination

// if amount <= denomination
// waysToMakeChange[amount]=waysToMakeChange[amount]+waysToMakeChange[amount-denomination]

// where waysToMakeChange is an array : 0 --> targetAmount
// which holds the no.of ways to make each amount
// corresponding to each denomination

const amount = 10;
const denominations = [1, 5, 10, 25];

function numberOfWaysToMakeChange(targetAmount, denominations) {
  const waysToMakeChange = new Array(targetAmount + 1).fill(0); // 0 --> targetAmount
  waysToMakeChange[0] = 1;

  for (const denomination of denominations) {
    for (let amount = 1; amount <= targetAmount; amount++) {
      if (denomination <= amount) {
        waysToMakeChange[amount] += waysToMakeChange[amount - denomination];
      }
    }
  }
  return waysToMakeChange[targetAmount];
}

numberOfWaysToMakeChange(amount, denominations);
