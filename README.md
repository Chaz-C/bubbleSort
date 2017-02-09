### Bubble Sort

Bubble sort works by first comparing the first number with the rest. It swaps places with any number that is greater than it. It does this down the line of numbers until everything is sorted.


####Psuedo Code
```sh

while array is unsorted,

loop through the array starting at the first value.

compare it with the value to its right. swap places if its greater.

continue making passes until array is fully sorted
```



### Insertion Sort

Insertion sort starts at the 2nd value in an array. It compares itself to the values to the left of it and pushes those that are greater over 1 spot to the right while inserting itself in its proper spot.

####Psuedo Code

```sh
Loop through the array starting at index 1.

compare the value with other values to the left of it.

If current value is less than the comparison value, move comparison value over 1 spot to the right.

Keep pushing comparison values to the right until correct spot for current value is found.
```
