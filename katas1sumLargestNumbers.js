//Create a function named sumLargestNumbers that will receive an array of numbers
//and return the sum of the two largest numbers in that array.


const sumLargestNumbers = (data) => {
  let largest = 0;
  let index = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > largest) {
      largest = data[i];
      index = i;
    }
  }
  data = data.splice(0, index);
  //console.log("what's left:", data);
  let nextLargest = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > nextLargest) {
      nextLargest = data[i];
      index = i;
    }
  }
  return largest + nextLargest;
};


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
