// Write a function which counts vowels in a string

window.findVowels = (str) => (str.match(/[aeoiu]/gi) ?? []).length;
