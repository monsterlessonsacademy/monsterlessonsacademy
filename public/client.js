const socket = io();

class Chat {
  users = [];

  constructor({ currentUser }) {
    this.currentUser = currentUser;
    this.initializeChat();
    this.initializeListeners();
  }

  initializeListeners() {
    socket.on("user-connected", (user) => {
      this.users.push(user);
      console.log("users", this.users);
    });
  }

  async initializeChat() {
    this.$chat = document.querySelector(".chat");
    this.$chat.classList.remove("hidden");
    const users = await this.fetchUsers();
    this.users = users.filter((user) => user.id !== this.currentUser.id);
    console.log("users", this.users);
  }

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
