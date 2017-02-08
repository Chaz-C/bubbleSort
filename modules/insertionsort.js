function insertionSort(array) {

  for ( let i = 1; i < array.length; i++ ) {

    let current = array[i];
    let checkIndex = i - 1;

    while ( checkIndex >= 0 && current < array[checkIndex]) {
      array[checkIndex + 1] = array[checkIndex];
      checkIndex--;
    }

    array[checkIndex + 1] = current;
  }

  return array;
}

module.exports = insertionSort;