const users = [
  { id: 1, name: "jack", age: 20 },
  { id: 2, name: "john", age: 25 },
  { id: 3, name: "mike", age: 29 },
];
const messages = users.map((user) => {
  return "Hello " + user.name + " with age " + user.age;
});
console.log(messages);
// const messages = [];

// for (let i = 0; i < users.length; i++) {
//   const message = "Hello " + users[i].name + " with age " + users[i].age;
//   messages.push(message);
// }

// console.log(messages);

