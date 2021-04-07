/**
 * Given an array of query times, find
 * the minimum wait time for all the queries to execute.
 * Queries are executed sequential and the input array order can be changed
 */

const queries = [3, 2, 1, 2, 6];

/**
 * if you consider query at idx 0 -> 3 unit of time,
 * all the subsequent queries have to wait 3 units of time.
 * For query at idx 2->1 unit of time,
 * all the subsequent (5-2) queries has to wait an extra of 1 unit of time
 * So it is ok if we say
 * totalWaitTime= totalWaitTime + (currentQueryExecutionTime * # queries left)
 * This also make it important to have queries with shorter time executed first
 * In short, the query time of ith query will have effect on all the remaining queries
 */

function minimumWaitingTime(queries) {
  // Write your code here.

  // sort queries. Shorter queries are completed first.
  queries.sort((a, b) => a - b);

  // store wait time
  let totalWaitTime = 0;

  for (let i = 0; i < queries.length - 1; i++) {
    const queiresLeft = queries.length - (i + 1);
    const currentWait = queries[i] * queiresLeft;
    totalWaitTime += currentWait;
  }
  return totalWaitTime;
}

// recursive solution

function minimumWaitingTime(queries) {
  // Write your code here.

  // sort queries. Shorter queries are completed first.
  queries.sort((a, b) => a - b);
  return minimumWaitingTimeHelper(0, 0, queries);
}

function minimumWaitingTimeHelper(idx, currentWaitTime, queries) {
  if (idx === queries.length - 1) return currentWaitTime;
  idx++;
  for (let i = 0; i < idx; i++) {
    currentWaitTime += queries[i];
  }
  return minimumWaitingTimeHelper(idx, currentWaitTime, queries);
}

minimumWaitingTime(queries);
