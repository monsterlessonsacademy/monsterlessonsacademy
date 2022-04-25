const { pluck } = require("@mla/utils");
console.log(pluck([{ name: "foo" }, { name: "bar" }], "name"));
