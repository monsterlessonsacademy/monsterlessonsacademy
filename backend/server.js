import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (_, res) => {
  res.send("Hello API");
});

app.get("/users", (_, res) => {
  const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Davis", email: "charlie@example.com" },
    { id: 4, name: "Diana Lee", email: "diana@example.com" },
    { id: 5, name: "Ethan Brown", email: "ethan@example.com" },
  ];

  res.json(users);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running");
});
