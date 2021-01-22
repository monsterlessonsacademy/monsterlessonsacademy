// fetch("http://localhost:3004/posts")
//   .then((response) => response.json())
//   .then((posts) => {
//     console.log("posts", posts);
//     const nodes = posts.map((post) => {
//       const el = document.createElement("div");
//       el.textContent = post.title;
//       return el;
//     });
//     document.getElementById("posts").append(...nodes);
//   });

document.getElementById("register").addEventListener("click", () => {
  console.log("register");
  fetch("http://localhost:3004/register", {
    method: "POST",
    body: JSON.stringify({
      email: "monster@gmail.com",
      password: "12345678",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((user) => {
      console.log("user", user);
    });
});
