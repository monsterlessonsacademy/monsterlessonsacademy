// const { getFullName, getSurname } = require("./foo");
import { getFullName, getSurname } from "./es6foo.js";

console.log(
  "getFullName",
  getFullName("monster", "lessons"),
  getSurname("foo", "bar")
);
