const testUrl = "https://www.example.com/page?param1=value1&param2=value2";
const url = new URL(testUrl);
const params = Object.fromEntries(url.searchParams.entries());
const searchParams = new URLSearchParams(params);
const newUrl = `http://localhost:3000?${searchParams.toString()}`;
console.log(newUrl);
