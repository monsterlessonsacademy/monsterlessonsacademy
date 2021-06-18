const users = [
  { id: 1, name: "Jack", age: 20 },
  { id: 2, name: "John", age: 30 },
  { id: 3, name: "Mike", age: 35 },
];

const total = users.reduce((acc, user) => {
  return acc + user.age;
}, 0);

// let total = 0;

// users.forEach((user) => {
//   total = total + user.age;
// });

console.log(total);
