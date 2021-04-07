/**
 * given two set of students wearing blue and red shirts
 * they are to be arranged in two rows
 * - All students wearing red shirts must be in the same row.
 * - All students wearing blue shirts must be in the same row.
 * - Each student in the back row must be STRICTLY taller than the student directly in front of them in the front row.
 *
 */

const redShirtHeights = [5, 9, 2, 4, 5];
const blueShirtHeights = [5, 8, 1, 3, 4];

function classPhotos(redShirtHeights, blueShirtHeights) {
  // sort in desc order of heights
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);

  // ---- 1 ----

  //   let shortRow = redShirtHeights;
  //   let tallRow = blueShirtHeights;

  //   if (redShirtHeights[0] > blueShirtHeights[0]) {
  //     shortRow = blueShirtHeights;
  //     tallRow = redShirtHeights;
  //   }

  //   for (let idx = 0; idx < shortRow.length; idx++) {
  //     if (shortRow[idx] >= tallRow[idx]) return false;
  //   }
  //   return true;

  // ---- 2 ----
  let firstRow = redShirtHeights[0] > blueShirtHeights[0] ? 'RED' : 'BLUE';

  for (let idx = 0; idx < redShirtHeights.length; idx++) {
    const blueShirtStudentHeight = blueShirtHeights[idx];
    const redShirtStudentHeight = redShirtHeights[idx];

    if (firstRow === 'RED') {
      if (blueShirtStudentHeight >= redShirtStudentHeight) return false;
    } else if (firstRow === 'BLUE') {
      if (redShirtStudentHeight >= blueShirtStudentHeight) return false;
    }
  }
  return true;
}

classPhotos(redShirtHeights, blueShirtHeights);
