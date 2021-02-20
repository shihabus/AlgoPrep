// INPUT
// 1. an array of integers. Each element represents the no.of jumps
// that we can make from the current index. We we hit the array boundary
// we loop back to the array. For -ve integers we jump backwards and
// for +ve integers we move forward

// OUTPUT
// return TRUE if we have single cycle.

// A single cycle is said to exist, if
// 1. after a complete loop we should land on the starting index
// 2. all elements should be visited only once

const input = [2, 3, 1, -4, -4, 2];

function nextIndex(idx, arr) {
  const jump = arr[idx];
  // % to handle bounce back to array incase
  // we reached the array boundaries
  const nextIdx = (idx + jump) % arr.length;

  // -ve idx check to make sure we keep
  // the direction of jump
  return nextIdx >= 0 ? nextIdx : nextIdx + arr.length;
}

function checkIfSingleCycle(steps) {
  let numOfVisits = 0;

  // starting idx assumed 0
  const STARTING_IDX = 0;

  let currentIdx = STARTING_IDX;

  while (numOfVisits < steps.length) {
    // if we land on starting idx before complete iteration
    // that means there is more than one cycle
    if (numOfVisits > 0 && currentIdx === 0) {
      return false;
    }
    numOfVisits++;
    currentIdx = nextIndex(currentIdx, steps);
  }

  return currentIdx == STARTING_IDX;
}

checkIfSingleCycle(input);
