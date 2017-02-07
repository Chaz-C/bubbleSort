const express = require('express');
const router = express.Router();
const app = express();
const bubbleSort = require('../modules/bubblesort.js');
const quickSort= require('../modules/quicksort');
const insertion = require('../modules/insertionsort');

router.post('/', (req, res) => {
  let array = JSON.parse(req.body.array);
  res.send(bubbleSort(array));
});

module.exports = router;