const add = (...args) => {
  return args.reduce((sum, el) => {
    return sum + el;
  }, 0);
};

console.log(add(1, 2, 3));
