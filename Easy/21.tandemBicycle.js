/**
 * a tandem bicycle is one, that is rode by two people
 * the speed of the bicycle is decided by the person pedalling faster
 *
 * given an array of positive integers
 * which is the speed of pedalling of a rider
 * and a bool value fastest
 *
 * return the max or min total speed
 * depending of the fastest bool state
 */

const redShirtSpeeds = [1];
const blueShirtSpeeds = [2];

tandemBicycle(redShirtSpeeds, blueShirtSpeeds, true);

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  let totalSpeed = 0;
  // sort asc
  redShirtSpeeds.sort((a, b) => a - b);
  // sort desc if fastest
  blueShirtSpeeds.sort((a, b) => (fastest ? b - a : a - b));

  for (let idx = 0; idx < redShirtSpeeds.length; idx++) {
    const redShirtSpeed = redShirtSpeeds[idx];
    const blueShirtSpeed = blueShirtSpeeds[idx];
    totalSpeed += Math.max(redShirtSpeed, blueShirtSpeed)

  }

  return totalSpeed;
}
