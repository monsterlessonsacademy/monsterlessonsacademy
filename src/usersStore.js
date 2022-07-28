import { action, computed, makeObservable, observable } from "mobx";

class UsersStore {
  users = [];

  constructor() {
    makeObservable(this, {
      users: observable,
      addUser: action,
      total: computed,
    });
  }

  addUser = (name) => {
    setTimeout(
      action(() => {
        const newUser = {
          id: +Math.random().toFixed(4),
          name,
        };
        this.users.push(newUser);
      }),
      2000
    );
  };

  get total() {
    return this.users.length;
  }
}

export const usersStore = new UsersStore();
