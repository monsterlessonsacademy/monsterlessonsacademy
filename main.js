const foo = () => console.log('foo')
const bar = () => console.log('bar')
const someFn = (isActive, isActivated) => {
  if (isActive) {
    foo()
  } else {
    bar()
  }
}

console.log(someFn(true))
