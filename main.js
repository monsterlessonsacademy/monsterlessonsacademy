const obj = { foo: "foo", bar: "bar" };
// console.log(obj.baz?.baq);
const map = new Map([
  ["foo", "foo"],
  ["bar", "bar"],
  [1, "1"],
]);
map.set("baz", "baz");
// console.log(map.size);
// for (const [key, value] of map) {
//   console.log(key, value);
// }
// const obj2 = {...obj}
// console.log(JSON.stringify(Object.fromEntries(map)));
const result = Array.from(map, ([key, value]) => `${key} ${value}`);
console.log(result);
