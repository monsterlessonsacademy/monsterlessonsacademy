const socket = io();

class Chat {
  users = [];
  activeChatId = null;

  constructor({ currentUser }) {
    this.currentUser = currentUser;
    this.initializeChat();
    this.initializeListeners();
  }

  initializeListeners() {
    socket.on("users-changed", (users) => {
      this.renderUsers(users);
    });

    socket.on("new-chat-message", (message) => {
      console.log("new-chat-message", message);
    });
  }

  async initializeChat() {
    this.$chat = document.querySelector(".chat");
    this.$usersList = this.$chat.querySelector(".users-list");
    this.$currentUser = this.$chat.querySelector(".current-user");
    this.$textInput = this.$chat.querySelector("input");

    this.$chat.classList.remove("hidden");

    this.$currentUser.innerText = `Logged in as ${this.currentUser.name}`;

    const users = await this.fetchUsers();
    this.renderUsers(users);
  }

  renderUsers(users) {
    this.users = users.filter((user) => user.id !== this.currentUser.id);

    this.$usersList.innerHTML = "";
    const $users = this.users.map((user) => {
      const $user = document.createElement("div");
      $user.innerText = user.name;
      $user.dataset.id = user.id;
      return $user;
    });
    this.$usersList.append(...$users);
    this.initializeUsersListeners($users);
  }

  initializeUsersListeners($users) {
    $users.forEach(($userElement) => {
      $userElement.addEventListener("click", () => {
        this.activateChat($userElement);
      });
    });
  }

  activateChat($userElement) {
    const userId = $userElement.dataset.id;

    if (this.activeChatId) {
      this.$usersList
        .querySelector(`div[data-id="${this.activeChatId}"]`)
        .classList.remove("active");
    }

    this.activeChatId = userId;
    $userElement.classList.add("active");

    this.$textInput.classList.remove("hidden");

    this.$textInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        console.log("submit");
        socket.emit("new-chat-message", {
          text: this.$textInput.value,
          recipient: this.activeChatId,
        });
        this.$textInput.value = "";
      }
    });
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
