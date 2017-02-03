// jshint esversion: 6

function bubbleSort(array) {
  let newArray = array;
  let pass = false;
  for ( let i = 0; i < array.length; i ++ ) {
    let toSwap = array[i];
    let swapWith = array[i+1];
    if ( toSwap > swapWith ) {
      newArray.splice(newArray.indexOf(toSwap), 1);
      newArray.splice(newArray.indexOf(swapWith)+1, 0, toSwap);
      pass = true;
    }
  }
    if ( pass === true ) {
      return bubbleSort(newArray);
    } else {
      return newArray;
    }
}

let sortThis2 = [9, 8 ,7, 5, 1];
let sortThis = [2, 5, 1, 9, 3];
console.log(bubbleSort(sortThis2));

module.exports = bubbleSort;