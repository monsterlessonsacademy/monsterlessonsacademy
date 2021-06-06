const type = "ADD";
switch (type) {
  case "ADD": {
    const item = 1;
    break;
  }
  case "REMOVE": {
    const item = 2;
    break;
  }
}

// const basicConfig = { host: "http://google.com" };

// const extendConfig = (config) => {
//   return {
//     ...config,
//     port: 3000,
//   };
//   // return Object.assign({}, config, { port: 3000 });
//   // config.port = 3000;
//   // return config;
// };

// const extendedConfig = extendConfig(basicConfig);
// console.log(basicConfig, extendedConfig);

// class Pet {
//   constructor(name) {
//     this.name = name;
//   }

//   getName = () => this.name;

//   getSurname = function () {
//     this.name;
//   };
// }

// const cat = new Pet("Fluffy");

// console.log(cat.getName());
// console.log(cat.getSurname());

// const object = {
//   message: "Hello, World!",

//   getMessage() {
//     const message = "Hello, Earth!";
//     return this.message;
//   },
// };

// console.log(object.getMessage());

// let = 3
// const foo = () => {}
// console.log(foo);
// var foo = 2;
// console.log(foo);
// foo = 1;

// var addTo = function (passed) {
//   var add = function (inner) {
//     return passed + inner;
//   };
//   return add;
// };

// var addThree = addTo(3);
// console.dir(addThree);
// console.log(addThree(2));

// console.log(addTo(3)(2));
