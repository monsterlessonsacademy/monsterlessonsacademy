const updateUser = (id, data) => {
  if (!id || !data) {
    throw "Params are not correct";
  }
};

updateUser();

// let user;
// try {
//   const backendData = "{name: 'Jack'}";
//   user = JSON.parse(backendData);
// } catch (err) {
//   user = null;
// } finally {
//   console.log("i happen always");
// }

// console.log(user);
