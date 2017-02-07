console.log('sanity');
let count = 0;

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

let results = [4, 2, 78, 9, 1, 3, 22, 5, 9, 3];

console.log(quickSort(results));
console.log('INITAL ARRAY', results);

module.exports = quickSort;