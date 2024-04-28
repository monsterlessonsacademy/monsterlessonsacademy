//
//
//
const foo = () => console.log("foo");
const bar = () => console.log("bar");
const someFn = (isActive) => {
  isActive ? foo() : bar();
};

someFn(true);
