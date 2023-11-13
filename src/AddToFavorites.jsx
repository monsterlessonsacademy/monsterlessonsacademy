import React, { useEffect, useState } from "react";
import classNames from "classnames";

const addToFavoritesApi = (method, favoritesCount) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: "1",
        title: "foo",
        isFavorited: method === "delete" ? false : true,
        favoritesCount:
          method === "delete" ? favoritesCount - 1 : favoritesCount + 1,
      });
    }, 2000);
  });
};

const AddToFavorites = ({ isFavorited, favoritesCount, articleId }) => {
  // const apiUrl = `/articles/${articleSlug}/favorite`;
  const [isFavoritedInternal, setIsFavoritedInterface] = useState(isFavorited);
  const [favoritesCountInternal, setFavoritesCountInternal] = useState(
    favoritesCount
  );
  // const isFavoritedWithResponse = response
  //   ? response.article.favorited
  //   : isFavorited;
  // const favoritesCountWithResponse = response
  //   ? response.article.favoritesCount
  //   : favoritesCount;
  const buttonClasses = classNames({
    btn: true,
    "btn-sm": true,
    "btn-primary": isFavoritedInternal,
    "btn-outline-primary": !isFavoritedInternal,
  });
  const handleLike = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3004/articles/${articleId}`, {
      method: "patch",
      mode: "no-cors",
      credentials: "include",
      body: JSON.stringify({
        isFavorited: isFavorited ? false : true,
        favoritesCount: isFavorited ? favoritesCount - 1 : favoritesCount + 1,
      }),
    }).then((response) => {
      console.log("response", response);
    });
  };

  return (
    <button className={buttonClasses} onClick={handleLike}>
      <i className="ion-heart"></i>
      <span>&nbsp; {favoritesCountInternal}</span>
    </button>
  );
};

export default AddToFavorites;
