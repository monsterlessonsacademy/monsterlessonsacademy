const someElement = document.querySelector(".foo");

someElement.addEventListener("blur", (event) => {
  const target = event.target as HTMLInputElement;
  console.log("event", target.value);
});
