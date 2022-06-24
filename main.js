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

const a = { b: { c: 1 } };
const newA = clone(a);
newA.b.d = 2;
