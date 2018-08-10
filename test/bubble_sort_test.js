assert = require('chai').assert;

describe("Bubble sort assertions", function() {
  it("can sort the array", function(){
    var actualArray = [14, 5, 2, 99, 70]
    var sortedArray = [2, 5, 14, 70, 99]
    assert.deepEqual(bubbleSort(actualArray), sortedArray)
  });
})