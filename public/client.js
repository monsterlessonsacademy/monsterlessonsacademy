const socket = io();

class Chat {
  users = [];

  constructor({ currentUser }) {
    this.currentUser = currentUser;
    this.initializeChat();
    this.initializeListeners();
  }

  initializeListeners() {
    socket.on("users-changed", (users) => {
      this.renderUsers(users);
    });
  }

  async initializeChat() {
    this.$chat = document.querySelector(".chat");
    this.$usersList = this.$chat.querySelector(".users-list");
    this.$currentUser = this.$chat.querySelector(".current-user");

    this.$chat.classList.remove("hidden");

    this.$currentUser.innerText = `Logged in as ${this.currentUser.name}`;

    const users = await this.fetchUsers();
    this.renderUsers(users);
  }

  renderUsers(users) {
    this.users = users.filter((user) => user.id !== this.currentUser.id);

    this.$usersList.innerHTML = "";
    this.$users = this.users.map((user) => {
      const $user = document.createElement("div");
      console.log(user);
      $user.innerText = user.name;
      return $user;
    });
    this.$usersList.append(...this.$users);
    this.initializeUsersListener(this.$usersList);
  }

  initializeUsersListener() {}

  async fetchUsers() {
    const res = await fetch("/users");
    return await res.json();
  }
}

class WelcomeScreen {
  constructor() {
    this.initializeWelcomeScreen();
  }

  initializeWelcomeScreen() {
    this.$welcomeScreen = document.querySelector(".welcome-screen");
    this.$loginBtn = this.$welcomeScreen.querySelector("button");
    this.$input = this.$welcomeScreen.querySelector("input");

    this.initializeListeners();
  }

  initializeListeners() {
    this.$loginBtn.addEventListener("click", () => {
      if (this.$input.value === "") {
        return;
      }

      const currentUser = {
        id: Math.round(Math.random() * Math.pow(2, 32)).toString(16),
        name: this.$input.value,
      };
      socket.emit("user-connected", currentUser);
      this.$welcomeScreen.classList.add("hidden");
      new Chat({ currentUser });
    });
  }
}

new WelcomeScreen();
