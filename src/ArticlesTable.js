const ArticlesTable = ({ articles }) => {
  return (
    <div className="articlesTable">
      {articles.map((article) => (
        <div key={article.id} className="article">
          {article.title}
        </div>
      ))}
    </div>
  );
};
export default ArticlesTable;
