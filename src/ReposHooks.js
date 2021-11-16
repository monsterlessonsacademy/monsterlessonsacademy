import useDataFetching from "./useDataFetching";

const ReposHooks = () => {
  const { error, isLoading, data } = useDataFetching(
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

export default ReposHooks;
