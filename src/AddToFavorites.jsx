import React, { useState } from "react";
import classNames from "classnames";
import axios from "axios";

const AddToFavorites = ({ isFavorited, favoritesCount, articleId }) => {
  const [isFavoritedInternal, setIsFavoritedInternal] = useState(isFavorited);
  const [favoritesCountInternal, setFavoritesCountInternal] = useState(
    favoritesCount
  );
  const buttonClasses = classNames({
    btn: true,
    "btn-sm": true,
    "btn-primary": isFavoritedInternal,
    "btn-outline-primary": !isFavoritedInternal,
  });
  const handleLike = (event) => {
    event.preventDefault();
    axios
      .patch(`http://localhost:3004/articles/${articleId}`, {
        isFavorited: isFavoritedInternal ? false : true,
        favoritesCount: isFavoritedInternal
          ? favoritesCountInternal - 1
          : favoritesCountInternal + 1,
      })
      .then((response) => {
        // Simulating slow backend
        setTimeout(() => {
          setFavoritesCountInternal(response.data.favoritesCount);
          setIsFavoritedInternal(response.data.isFavorited);
        }, 2000);
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
