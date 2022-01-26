var _ = require('lodash');

// x = 0;
// y = array[x++]; // This will get array[0]

// x = 0;
// y = array[++x]; // This will get array[1]

const initialArray = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].reduce((acc, curr) => {
  return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc;
}, {});
console.log({initialArray}) // => {2: 5, 4: 1, 5: 3, 9: 1}

// with Lodash
console.log("With lodash --->",_.countBy(initialArray));

