// Find the fibonacci at Nth position

// ==== 1 ====

// fib(n)=fib(n-1)+fib(n-2)
// fib(1)=0
// fib(2)=1

// Time O(2^n) since each step inturn call the other two getFibOfN(recursion)
// Space O(n) since we use call stack
function getFibOfN(n) {
  if (n === 2) return 1;
  else if (n === 1) return 0;
  else return getFibOfN(n - 1) + getFibOfN(n - 2);
}

getFibOfN(5);

// ==== 2 ====

// We use memoization to reduce time complexity
// Once the value is calculated no need to repeat the computation

// Time O(n) the fib(n) is only calculated once. Next time it is returned from hashMap
// O(n) since we need to store values in hashMap
function getFibOfN(n, memoize = { 1: 0, 2: 1 }) {
  if (n in memoize) return memoize[n];
  else {
    memoize[n] = getFibOfN(n - 1) + getFibOfN(n - 2);
    return memoize[n];
  }
}

// ==== 3 ====

// iterative solution
// we keep an array with last two fibs
// until the counter <= n
// we keep on calculating the next fib from the sum of previous two

// Time O(n)
// Space O(1): always we store 2 entries in array
function getFibOfN(n) {
  let lastTwo = [0, 1];
  let counter = 3;
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }
  return n == 1 ? lastTwo[0] : lastTwo[1];
}
