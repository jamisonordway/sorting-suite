const numbers = [14, 5, 2, 99, 70]

function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for(let i = 0; i < numbers.length; i++) {
      if(numbers[i] && numbers[i + 1] && numbers[i] > numbers[i+1]) {
        [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
        swapped = true;
      }
    }
  } while(swapped);
  return numbers;
}


console.log(bubbleSort(numbers.slice()));

module.exports = bubbleSort()