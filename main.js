const queryString = require("query-string");

// const parsed = queryString.parse(location.search);
// console.log("parsed", parsed);
//
// const stringified = queryString.stringify({
//   sort: "asc",
//   filter: "title"
// });

// console.log("stringified", stringified);
const apiUrl = "https://google.com/api/somearticle?author=foo";

const parsedUrl = queryString.parseUrl(apiUrl);
const queryParams = {
  limit: 20,
  offset: 0,
  ...parsedUrl.query
};
const stringifiedQueryParams = queryString.stringify(queryParams);
const urlWithParams = `${parsedUrl.url}?${stringifiedQueryParams}`;
console.log(urlWithParams);
