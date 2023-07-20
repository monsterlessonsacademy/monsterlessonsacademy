// interface User {
//   id: number;
//   name: string;
//   email: string;
//   getPermission(): string;
// }

type User = {
  id: number;
  name: string;
  email: string;
  getPermission: (id: string) => string;
};

class Student implements User {
  id = 1;
  name = "foo";
  email = "foo@gmail.com";
  getPermission(): string {
    return "dev";
  }
}

// interface Admin extends User {
//   permissions: string[];
//   getPermission(): string[];
// }

// type Admin = User & {
//   permissions: string[];
//   getPermission: (id: string[]) => string[];
// };

// type ID = string;

// const user: Admin = {
//   id: 1,
//   name: "foo",
//   email: "foo@gmail.com",
//   permissions: ["dev"],
//   getPermission: (id: string | string[]) => {
//     return (typeof id === "string" ? id : [id]) as string[] & string;
//   },
// };
