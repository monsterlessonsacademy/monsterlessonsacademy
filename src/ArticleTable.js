const ArticleTable = ({ articles }) => {
  return (
    <div className="articlesTable">
      {articles.map((article) => (
        <div className="article" key={article.id}>
          {article.title}
        </div>
      ))}
    </div>
  );
};

export default ArticleTable;
