const form = document.querySelector(".js-form");
const $nameInput = document.querySelector(".js-name-input");
const $emailInput = document.querySelector(".js-email-input");
const $passwordInput = document.querySelector(".js-password-input");

const isEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

const highlightError = ($input, errorMessage) => {
  $input.parentNode.classList.add("form__field--error");
  $input.nextElementSibling.innerText = errorMessage;
};

const clearError = ($input) => {
  $input.parentNode.classList.remove("form__field--error");
  $input.nextElementSibling.innerText = "";
};

const validate = () => {
  const nameValue = $nameInput.value.trim();
  const emailValue = $emailInput.value.trim();
  const passwordValue = $passwordInput.value.trim();

  clearError($nameInput);
  clearError($emailInput);
  clearError($passwordInput);

  if (!nameValue) {
    highlightError($nameInput, "Name can't be blank");
  }

  if (!emailValue) {
    highlightError($emailInput, "Email can't be blank");
  } else if (!isEmail(emailValue)) {
    highlightError($emailInput, "Email is not valid");
  }

  if (!passwordValue) {
    highlightError($passwordInput, "Password can't be blank");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});
