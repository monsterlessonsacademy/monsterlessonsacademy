const clone = (input) => {
  if (input === null || typeof input !== "object") {
    return input;
  }

  const initialOutput = Array.isArray(input) ? [] : {};

  return Object.keys(input).reduce((acc, key) => {
    acc[key] = clone(input[key]);
    return acc;
  }, initialOutput);
};

const a = { b: { c: 2 } };
// const newA = JSON.parse(JSON.stringify(a));
const newA = clone(a);
newA.b.f = 3;
// const newA = Object.assign({}, a, { c: 2 });
console.log(a, newA);
