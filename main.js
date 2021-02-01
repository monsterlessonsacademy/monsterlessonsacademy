// Good
const isActive = false;

// Bad
const isactive = false;
const is_active = false;

// Bad
const a = { title: "Some title" };
const paid = true;

// Good
const article = { title: "Some title" };
const isAlreadyPaid = true;

// Bad
const article = () => {};
const articleSelected = () => {};

// Good
const getArticle = () => {};
const normalizeUser = () => {};
const isArticleSelected = () => {};

// Bad
const data = { title: "Some title" };

// Good
const article = { title: "Some title" };
const isLoading = true;
const url = "http://google.com";

// The best
const isArticleLoading = true;
const deleteArticleUrl = "http://google.com";

element.addEventListener("blur", (event) => {
  const padding = 25;
  const heightWithPaddings = event.target.height + padding * 2;
});

// Bad
// We are mapping here through users to get their names

// Good
// Don't return 'set.add' because it's not chainable in IE 11
//

const someFn = () => {
  if (!someCondition) {
    return "someCondition";
  }

  if (!someCondition2) {
    return "someCondition2";
  }

  //someLogic
  //
  //if (someCondition) {
  //  if (someCondition2) {
  //    if (someCondition3) {
  //      //some logic
  //    }
  //  }
  //}
};

//Bad
const someFn = () => {
  // logic to prepare data from API call
  // logic to fetch data
  // logic to normalize data
};

const someFn = () => {
  prepareArticleDataForApi();
  fetchArticle();
  normalizeArticle();
};

const articleTitle = "some article title";
const capitalizeArticleTitle = capitalize(articleTitle);

const userName = "foo";
const capitalizeUserName = capitalize(userName);

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
