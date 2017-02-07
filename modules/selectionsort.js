function selectionSort(array) {
  let swapSlot = 0;
  while ( swapSlot < array.length ) {
    let index;
    let lowest = array[swapSlot];
    for ( let i = swapSlot + 1; i < array.length; i++ ) {
      if ( array[i] < lowest ) {
        lowest = array[i];
        index = i;
      }
    }
    if ( lowest < array[swapSlot] ) {
      array[index] = array[swapSlot];
      array[swapSlot] = lowest;
    }
    swapSlot++;
 }
  return array;
}

let results = [2, 100, 5, 29, 4, 1, 45, 3, 9];

module.exports = selectionSort;