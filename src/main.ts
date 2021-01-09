interface UserInterface {
  name: string;
  age?: number;
  getMessage(): string;
}
const user: UserInterface = {
  name: "Moster",
  age: 30,
  getMessage() {
    return "Hello" + name;
  },
};

const user2: UserInterface = {
  name: "Jack",
  getMessage() {
    return "Hello" + name;
  },
};

console.log(user.getMessage());
