const obj = { foo: "foo", bar: "bar" };
const map = new Map([
  ["foo", "foo"],
  ["bar", "bar"],
]);
map.set("foo", "foo");
map.set("bar", "bar");
map.set("1", "111");

const newMap = new Map(map);
const merged = new Map([...map, ...newMap]);

for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key);
  }
}

for (const [key, value] of map) {
  console.log(key, value);
}

console.log(
  "!!",
  map.has(1),
  map.size,
  map.keys(),
  map.values(),
  merged.get("foo")
);

Array.from(map, ([key, value]) => console.log("QQQ", key, value));
Array.from(map.values(), (value) => console.log("EWWWW", value));

console.log("fy", JSON.stringify(Array.from(map.entries())));
console.log("fy", JSON.stringify(Object.fromEntries(map)));
