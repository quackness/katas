const numberOfVowels = (data) => {
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (vowels.includes(data[i])) {
      count = count + 1;
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

// Create a function named numberOfVowels that will receive a string and return
//  the number of vowels in that string.