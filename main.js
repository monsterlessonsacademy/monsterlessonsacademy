const postInput = document.querySelector(".postInput");
const postButton = document.querySelector(".postButton");

postButton.addEventListener("click", async () => {
  if (postInput.value === "") {
    return;
  }

  await fetch("http://localhost:3004/posts", {
    method: "POST",
    body: JSON.stringify({ title: postInput.value }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  postInput.value = "";
});
