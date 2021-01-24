const nirvanaUrl =
  "http://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?fmt=jsonn";

const metallicaUrl =
  "http://musicbrainz.org/ws/2/artist/65f4f0c5-ef9e-490c-aee3-909e7ae6b2ab?fmt=json";

// const getJSON = (url, callback) => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       callback(data);
//     });
// };

// getJSON(nirvanaUrl, (nirvanaData) => {
//   getJSON(metallicaUrl, (metallicaData) => {
//     console.log("metallicaData", nirvanaData, metallicaData);
//   });
// });

// const getJSONAsPromise = (url) => {
//   return new Promise((resolve) => {
//     getJSON(url, (data) => {
//       resolve(data);
//     });
//   });
// };

// getJSONAsPromise(nirvanaUrl).then((response) => {
//   console.log("response", response);
// });
//
//
// fetch(nirvanaUrl)
//   .then((response) => response.json())
//   .then((nirvanaData) => {
//     return fetch(metallicaUrl)
//       .then((response) => response.json())
//       .then((metallicaData) => {
//         return { metallica: metallicaData, nirvana: nirvanaData };
//       });
//   })
//   .then((both) => {
//     console.log("both", both);
//   });
const fetchBand = async () => {
  try {
    const nirvanaPromise = await fetch(nirvanaUrl);
    const nirvanaData = await nirvanaPromise.json();
    const metallicaPromise = await fetch(metallicaUrl);
    const metallicaData = await metallicaPromise.json();
    console.log("both", nirvanaData, metallicaData);
  } catch (err) {
    console.log("err", err);
  }
};

fetchBand();

// const nirvanaPromise = fetch(nirvanaUrl).then((response) => response.json());
// const metallicaPromise = fetch(metallicaUrl).then((response) =>
//   response.json()
// );
// Promise.all([nirvanaPromise, metallicaPromise]).then((both) => {
//   console.log("both", both);
// });

// const promise = new Promise((resolve, reject) => {
//   // We are doing async code
//   if (1 !== 2) {
//     resolve("hello");
//   } else {
//     reject("failed");
//   }
// });

// promise
//   .then((result) => {
//     console.log("promise success result", result);
//     return "I have first then";
//   })
//   .then((result2) => {
//     console.log("result 2", result2);
//   })
//   .catch((error) => {
//     console.log("promise error", error);
//   });
