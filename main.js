const set = new Set([1, 2, 3]);
const arr = Array.from(set);
console.log(arr[0], set[0]);
console.log(set.has(1));
set.add(4);
set.delete(4);
console.log(set);

for (const item of set.values()) {
  console.log(item);
}

console.log([...new Set(numbers)]);
