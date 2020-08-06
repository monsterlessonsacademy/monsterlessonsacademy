// var foo = { a: "a" };
// var bar;
// bar = foo;
// bar.a = "baz";
// console.log(foo, bar);
var basicConfig = { apiUrl: "http://google.com/api", port: 3000 };

var createExtendedConfig = function(config) {
  var extendedConfig = Object.assign({}, config, { host: "google.com" });
  // config.host = "google.com";
  return extendedConfig;
};

var extendedConfig = createExtendedConfig(basicConfig);

console.log(basicConfig, extendedConfig);
