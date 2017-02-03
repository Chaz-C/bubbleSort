// jshint esversion: 6
const chai = require('chai');
chai.should();
const bubble = require('../bubblesort.js');

describe('bubble sort function', function() {

  it('should be a function', function() {
    bubble.should.be.a('function');
  });
  // it('should return an array', function() {
  //   bubble([1]).should.be.a('array');
  // });


});