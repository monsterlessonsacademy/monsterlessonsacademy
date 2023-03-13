const doSetTimeout = (i) => {
  setTimeout(() => {
    console.log(i);
  }, 0);
};

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

for (var i = 0; i < 10; i++) {
  doSetTimeout(i);
}
