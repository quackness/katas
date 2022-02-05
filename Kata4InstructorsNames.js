// Create a function named instructorWithLongestName that will receive an array of instructor objects,
// and return the object that has the longest name. If there are two instructors with the longest name,
// return the first one.

const instructorWithLongestName = (instructors) => {
  let count = null;
  let index = 0;
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > count) {
      count = instructors[i].name.length;
      index = i;
    }
  }
  return instructors[index];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"},

  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));


//go through the object with the loop to count the amount of letters
//set the condition to pick the longest ones
//we need to track index so the code remembers the results of the count so it can be passed to return correctly
