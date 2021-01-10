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

const userNames = users.map((user) => user.name);
console.log("userNames", userNames);

// const oldUsers = users.filter((user) => user.age > 24);
// console.log("oldeUsers", oldUsers);

const oldUsers = [];
for (let i = 0; i < users.length - 1; i++) {
  console.log(users[i], i);
  // if (users[i].age > 24) {
  //   oldUsers.push(users[i]);
  // }
  i++;
}

console.log("oldUsers", oldUsers);
