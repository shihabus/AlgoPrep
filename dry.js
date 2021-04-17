const array = [2, 1, 2, 2, 2, 3, 4, 2];
const toMove = 2;

function moveElementToEnd(array, toMove) {
  let L = 0;
  let R = array.length - 1;
  let temp = null;

  while (L < R) {
    while (L < R && array[R] === toMove) {
      R--;
    }

    while (L < R && array[L] !== toMove) {
      L++;
    }

    temp = array[L];
      array[L] = array[R];
      array[R] = temp;

    R--;
    L++;
  }

  return array;
}

moveElementToEnd(array, toMove);
