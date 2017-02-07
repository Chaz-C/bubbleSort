function insertionSort(array) {
  console.log('INITAL ARRAY', array);

  for ( let i = 1; i < array.length; i++ ) {

    let current = array[i];
    let checkIndex = i - 1;

    while ( checkIndex >= 0 && current < array[checkIndex]) {
      array[checkIndex + 1] = array[checkIndex];
      checkIndex--;
      console.log(array);
    }
    array[checkIndex + 1] = current;
    console.log(array);
  }

  return array;
}

let result = [2, 5, 2, 1, 3, 1, 8];

console.log('SORT COMPLETE', insertionSort(result));

module.exports = insertionSort;