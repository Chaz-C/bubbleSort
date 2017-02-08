function quickSort(array) {

  let pivot = array[0];
  let left = [];
  let right = [];

  if ( array.length <= 1 ) {
    return array;
  }

  for ( let i = 1; i < array.length; i++ ) {

    if ( array[i] < pivot ) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

module.exports = quickSort;