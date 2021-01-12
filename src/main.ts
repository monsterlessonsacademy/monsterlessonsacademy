interface UserInterface {
  getFullname(): string;
}

class User implements UserInterface {
  firstName: string;
  lastName: string;
  readonly unchangableName: string;
  static readonly maxAge = 50;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangableName = firstName;
  }

  changeUnchangableName(): void {
    /* this.unchangableName = "foo"; */
  }

  getFullname(): string {
    return this.firstName + " " + this.lastName;
  }
}

class Admin extends User {
  private editor: string;

  setEditor(editor: string): void {
    this.editor = editor;
  }

  getEditor(): string {
    return this.editor;
  }
}

const user = new User("Monster", "lessons");
console.log(user.firstName);
console.log(User.maxAge);

const admin = new Admin("Foo", "Bar");
console.log(admin);
