// jshint esversion: 6
const chai = require('chai');
chai.should();
const bubble = require('../modules/bubblesort.js');
let sortedArray = [1, 2, 4, 5, 8, 30, 39];

describe('bubble sort function', function() {

  let sortThis;
  beforeEach(function () {
    sortThis = [39, 4, 2, 8, 1, 30, 5];
  });

  it('should be a function', function() {
    bubble.should.be.a('function');
  });
  it('should return an array', function() {
    bubble(sortThis).should.be.a('array');
  });
  it('should reverse an array', function() {
    bubble(sortThis).should.be.deep.equal(sortedArray);
  });


});