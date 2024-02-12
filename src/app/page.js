const Home = async () => {
  try {
    const response = await fetch(
      "https://api.realworld.io/api/articles?limit=10&offset=0",
    ).then((res) => res.json());
    return (
      <div>
        {response.articles.map((article) => (
          <div>{article.title}</div>
        ))}
      </div>
    );
  } catch (err) {}
  return <h1>Home</h1>;
};

export default Home;
