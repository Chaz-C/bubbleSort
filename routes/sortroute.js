const express = require('express');
const router = express.Router();
const app = express();
const bubbleSort = require('../modules/bubblesort.js');
const quickSort= require('../modules/quicksort');
const insertionSort = require('../modules/insertionsort');
const selectionSort = require('../modules/selectionsort');
const mergeSort = require('../modules/mergesort');

router.post('/bubblesort', (req, res) => {
  let sortedArray = bubbleSort(JSON.parse(req.body.array));
  res.send(`Bubble Sort\n${sortedArray}`);
});

router.post('/quicksort', (req, res) => {
  let sortedArray = quickSort(JSON.parse(req.body.array));
  res.send(`Quick Sort\n${sortedArray}`);
});

router.post('/insertionsort', (req, res) => {
  let sortedArray = insertionSort(JSON.parse(req.body.array));
  res.send(`Insertion Sort\n${sortedArray}`);
});

router.post('/selectionsort', (req, res) => {
  let sortedArray = selectionSort(JSON.parse(req.body.array));
  res.send(`Selection Sort\n${sortedArray}`);
});

router.post('/mergesort', (req, res) => {
  let sortedArray = mergeSort(JSON.parse(req.body.array));
  res.send(`Merge Sort\n${sortedArray}`);
});


module.exports = router;