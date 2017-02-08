function bubbleSort(array) {

  let swap = true;

  while( swap === true) {

    swap = false;

    for ( let i = 0; i < array.length; i ++ ) {

      let toSwap = array[i];
      let swapWith = array[i+1];
      if ( toSwap > swapWith ) {
        array.splice(i, 2, swapWith, toSwap);
        swap = true;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;