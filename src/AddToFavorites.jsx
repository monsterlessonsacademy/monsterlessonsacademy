import React, { useState } from "react";
import classNames from "classnames";
import axios from "axios";

const AddToFavorites = (props) => {
  const [isFavorited, setIsFavorited] = useState(props.isFavorited);
  const [favoritesCount, setFavoritesCount] = useState(props.favoritesCount);
  const buttonClasses = classNames({
    btn: true,
    "btn-sm": true,
    "btn-primary": isFavorited,
    "btn-outline-primary": !isFavorited,
  });
  const handleLike = (event) => {
    event.preventDefault();

    const previousIsFavorited = isFavorited;
    const previousFavoritesCount = favoritesCount;
    const futureIsFavorited = isFavorited ? false : true;
    const futureFavoritesCount = isFavorited
      ? favoritesCount - 1
      : favoritesCount + 1;

    setFavoritesCount(futureFavoritesCount);
    setIsFavorited(futureIsFavorited);
    // Simulating slow backend
    setTimeout(() => {
      axios
        .patch(`http://localhost:3004/articles/${props.articleId}`, {
          isFavorited: futureIsFavorited,
          favoritesCount: futureFavoritesCount,
        })
        .then((response) => {
          setFavoritesCount(response.data.favoritesCount);
          setIsFavorited(response.data.isFavorited);
        })
        .catch(() => {
          setFavoritesCount(previousFavoritesCount);
          setIsFavorited(previousIsFavorited);
        });
    }, 2000);
  };

  return (
    <button className={buttonClasses} onClick={handleLike}>
      <i className="ion-heart"></i>
      <span>&nbsp; {favoritesCount}</span>
    </button>
  );
};

export default AddToFavorites;
