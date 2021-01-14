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

const oldUsers = users.filter((user) => user.age > 24);
console.log("oldeUsers", oldUsers);

const jack = users.filter((user) => user.id === "1");
console.log("jack", jack);

const allUsersAreYoung = users.every((user) => user.age < 30);
console.log("allUsersAreYoung", allUsersAreYoung);

const atLeastOneYoung = users.some((user) => user.age < 30);
console.log("atLeastOneYoung", atLeastOneYoung);

const totalAge = users.reduce((accumulator, user) => {
  return accumulator + user.age;
}, 0);

console.log("totalAge", totalAge);
