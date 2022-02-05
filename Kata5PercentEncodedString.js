const urlEncode = (text) => {
  let output = "";
  for (let i = 0; i < text.length; i++) {
    if ((text[i] === " ") && (i !== 0) && (i !== text.length - 1)) {
      output += "%20";
    } else {
      output += text[i];
    }
  }
  return output;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

// Create a function named urlEncode that will receive a string of words, and return that string 
// with all of the whitespace characters converted to %20. If there is whitespace on the outside of the string, 
// like in our second example above, you should only replace the whitespace within the string.

