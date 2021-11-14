import React from "react";
import useDataFetching from "./useDataFetching";

export default () => {
  const { isLoading, data, error } = useDataFetching(
    "https://api.github.com/users/monsterlessonsacademy/repos"
  );

  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return error.message;
  }

  return (
    <ul>
      {data.map(({ id, html_url, full_name }) => (
        <li key={id}>
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            {full_name}
          </a>
        </li>
      ))}
    </ul>
  );
};
