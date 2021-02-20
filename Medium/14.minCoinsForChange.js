// INPUTS
// 1. target amount
// 2. an array of coin denominations

// OUTPUT
// min no.of coins to make the target amount

const targetAmount = 10;
const denominations = [1, 2, 3];

function minCoinsForChange(targetAmount, denoms) {
  const minNoOfCoins = new Array(targetAmount + 1).fill(Infinity);
  minNoOfCoins[0] = 0;

  for (const denom of denoms) {
    for (let amount = 0; amount < minNoOfCoins.length; amount++) {
      if (denom <= amount) {
        minNoOfCoins[amount] = Math.min(
          minNoOfCoins[amount],
          1 + minNoOfCoins[amount - denom]
        );
      }
    }
  }
  return noOfMinCoins[targetAmount];
}

minCoinsForChange(targetAmount, denominations);
