const users = [
  {
    id: "1",
    name: "Jack",
    age: 25,
  },
  {
    id: "2",
    name: "John",
    age: 30,
  },
  {
    id: "3",
    name: "Mike",
    age: 22,
  },
];

const totalAge = users.reduce((accumulator, user) => {
  console.log("reduce", accumulator, user);
  return accumulator + user.age;
}, 0);
console.log("totalAge", totalAge);

// const allUsersAreYoung = users.every((user) => user.age < 30);
// const atLeastOneYoung = users.some((user) => user.age < 30);
// console.log(atLeastOneYoung);

// const jack = users.find((user) => user.id === "1");
// const oldUsers = users.filter((user) => user.age > 54);
// console.log(jack);

// const oldUsers = [];
// users.forEach((user) => {
//   if (user.age > 24) {
//     oldUsers.push(user);
//   }
// });
// console.log(oldUsers);

// const userNames = users.map((user) => user.name);
// console.log("userNames", userNames);

// const userNames = [];

// users.forEach((user) => {
//   userNames.push(user.name);
// });

// const userNames = [];

// for (let i = 0; i < users.length; i++) {
//   userNames.push(users[i].name);
// }

// console.log(userNames);
