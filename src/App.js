import { useEffect, useState } from "react";
import ArticleTable from "./ArticleTable";
import SearchBar from "./SearchBar";

const initialArticles = [
  {
    id: "1",
    slug: "/posts/5-tips-to-be-a-better-programmer",
    title: "5 Tips to Be a Better Programmer",
  },
  {
    id: "2",
    slug: "/posts/how-to-center-elements-using-css",
    title: "How to Center Elements Using CSS",
  },
  {
    id: "3",
    slug: "/posts/how-to-validate-javascript-forms-for-beginners",
    title: "How to Validate Javascript Forms for Beginners",
  },
  {
    id: "4",
    slug: "/posts/sort-array-method-you-need-to-know-this-cases",
    title: "Sort Array Method - You Need to Know This Cases",
  },
  {
    id: "5",
    slug: "/posts/25-coding-terms-for-beginners",
    title: "25 Coding Terms for Beginners",
  },
];

const fetchArticles = (searchValue) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (searchValue === "") {
        resolve(initialArticles);
        return;
      }
      const filteredArticles = initialArticles.filter((article) =>
        article.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      resolve(filteredArticles);
    }, 2000);
  });
};

const filterArticles = (searchValue) => {
  if (searchValue === "") {
    return initialArticles;
  }
  return initialArticles.filter((article) =>
    article.title.toLowerCase().includes(searchValue.toLowerCase())
  );
};

const App = () => {
  const [articles, setArticles] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setArticles([]);
    fetchArticles(searchValue).then((articles) => {
      setArticles(articles);
    });
    // const filteredArticles = filterArticles(searchValue);
    // setArticles(filteredArticles);
  }, [searchValue]);
  return (
    <div className="container">
      <SearchBar callback={(searchValue) => setSearchValue(searchValue)} />
      <ArticleTable articles={articles} />
    </div>
  );
};

export default App;
