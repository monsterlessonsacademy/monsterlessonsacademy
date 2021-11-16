import withDataFetching from "./withDataFetching";

const Repos = ({ isLoading, error, data }) => {
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

export default withDataFetching({
  dataSource: "https://api.github.com/users/monsterlessonsacademy/repos",
})(Repos);
