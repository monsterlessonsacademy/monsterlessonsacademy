const socket = io();

class Chat {
  users = [];
  messages = {};
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
      this.addMessage(message.text, message.senderId);
      if (message.senderId === this.activeChatId) {
        this.renderMessages(message.senderId);
      }
    });
  }

  async initializeChat() {
    this.$chat = document.querySelector(".chat");
    this.$usersList = this.$chat.querySelector(".users-list");
    this.$currentUser = this.$chat.querySelector(".current-user");
    this.$textInput = this.$chat.querySelector("input");
    this.$messagesList = this.$chat.querySelector(".messages-list");

    this.$chat.classList.remove("hidden");

    this.$currentUser.innerText = `Logged in as ${this.currentUser.name}`;

    const users = await this.fetchUsers();
    this.renderUsers(users);
  }

  renderUsers(users) {
    console.log("renderUsers", users);
    this.users = users.filter((user) => user.id !== socket.id);

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
        const message = {
          text: this.$textInput.value,
          recipientId: this.activeChatId,
        };
        socket.emit("new-chat-message", message);
        this.addMessage(message.text, message.recipientId);
        this.renderMessages(message.recipientId);
        this.$textInput.value = "";
      }
    });
  }

  addMessage(text, userId) {
    if (!this.messages[userId]) {
      this.messages[userId] = [];
    }
    this.messages[userId].push(text);
  }

  renderMessages(recipientId) {
    this.$messagesList.innerHTML = "";
    const $messages = this.messages[recipientId].map((message) => {
      const $message = document.createElement("div");
      $message.innerText = message;
      return $message;
    });
    this.$messagesList.append(...$messages);
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
        name: this.$input.value,
      };
      socket.emit("user-connected", currentUser);
      this.$welcomeScreen.classList.add("hidden");
      new Chat({ currentUser });
    });
  }
}

new WelcomeScreen();
