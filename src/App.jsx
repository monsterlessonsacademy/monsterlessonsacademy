import { Fragment } from "react";
import AddToFavorites from "./AddToFavorites";

const App = () => {
  return (
    <Fragment>
      <h1>Monsterlessons Academy</h1>
      <AddToFavorites isFavorited={false} favoritesCount={10} articleId="1" />
    </Fragment>
  );
};

export default App;
