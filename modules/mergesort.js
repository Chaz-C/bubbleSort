function mergeSort(array) {

  if ( array.length <= 1 ) {
    return array;
  }

  let left = array.splice(0, array.length/2);
  let right = array;

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);

  function merge(left, right) {

    let sortedArray = [];

    while ( left.length > 0 && right.length > 0 ) {

      if (left[0] > right[0]) {
        sortedArray.push(right.splice(0, 1)[0] );
      } else {
        sortedArray.push(left.splice(0, 1)[0] );
      }
    }

    while ( left.length > 0 ) {
      sortedArray.push(left.splice(0, 1)[0] );
    }

    while ( right.length > 0 ) {
      sortedArray.push(right.splice(0, 1)[0] );
    }

    return sortedArray;
  }

}

let results = [5, 89, 1, 5, 50, 3, 2, 4, 3, 8];

console.log(mergeSort(results));

module.exports = mergeSort;