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
