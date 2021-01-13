const searchStr = "foo";
const hasSearchedString = any<string>((el: string) => el.contains(searchStr), [
  "fooooo",
  "bar",
  "baz",
]);

const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

interface UserInterface<T, V> {
  name: string;
  data: T;
  meta: V;
}

const user: UserInterface<{ meta: string }, string> = {
  name: "Jack",
  data: {
    meta: "foo",
  },
  meta: "bar",
};

const user2: UserInterface<string[]> = {
  name: "John",
  data: ["foo", "bar", "baz"],
};

const result = addId<UserInterface>(user);
console.log("result", result);
