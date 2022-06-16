const ArticlesTable = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>{article.title}</div>
      ))}
    </div>
  );
};
export default ArticlesTable;
