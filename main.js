// Define a function that takes an array of strings, and returns the most commonly occurring string in that array.

const mostCommonString = (strings) => {
  const commonStrings = {};

  strings.forEach((str) => {
    if (commonStrings[str] === undefined) {
      commonStrings[str] = 1;
    } else {
      commonStrings[str]++;
    }
  });

  let maxEntry;
  let maxValue = 0;

  for (commonString in commonStrings) {
    if (commonStrings[commonString] > maxValue) {
      maxEntry = commonString;
      maxValue = commonStrings[commonString];
    }
  }

  return maxEntry;
};

const mostFrequent = (arr) => {
  const mapping = arr.reduce((acc, el) => {
    acc[el] = acc[el] ? acc[el] + 1 : 1;
    return acc;
  }, {});

  return Object.entries(mapping).reduce(
    (acc, el) => (el[1] > acc[1] ? el : acc),
    [null, 0]
  )[0];
};

console.log(mostCommonString(["a", "b", "c", "a", "b", "b", "b"]));
console.log(mostFrequent(["a", "b", "c", "a", "b", "b", "b"]));
