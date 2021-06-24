const orders = [500, 30, 99, 15, 223];

const total = orders.reduce((acc, order) => acc + order, 0);
const withTax = orders.map((order) => order * 1.1);
const highValue = orders.filter((order) => order > 100);

// const total = 0;
// const withTax = [];
// const highValue = [];

// for (i = 0; i < orders.length; i++) {
//   total += orders[i];

//   withTax.push(orders[i] * 1.1);

//   if (orders[i] > 100) {
//     highValue.push(orders[i]);
//   }
// }
