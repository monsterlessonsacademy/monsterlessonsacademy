const arr = [1, 2, 3];
const set = new Set(arr);
set.add(4);
set.delete(1);

console.log([...set]);
