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

let sortThis2 = [39, 3.9, 4, 2, 5, 30, 8, 1, 30, 5];


let sortThis = [2, 5, 1, 2, 9, 3];
console.log(bubbleSort(sortThis2));

module.exports = bubbleSort;