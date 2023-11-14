import { Fragment, useState, useEffect } from "react";
import AddToFavorites from "./AddToFavorites";
import axios from "axios";

const App = () => {
  const [article, setArticle] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:3004/articles/1").then((response) => {
      setArticle(response.data);
    });
  }, []);
  return (
    <Fragment>
      <h1>Monsterlessons Academy</h1>
      {article && (
        <AddToFavorites
          isFavorited={article.isFavorited}
          favoritesCount={article.favoritesCount}
          articleId="1"
        />
      )}
    </Fragment>
  );
};

export default App;
