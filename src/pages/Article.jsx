import { useParams } from "react-router-dom";

const Article = () => {
  const params = useParams();
  return <div>Article {params.slug}</div>;
};

export default Article;
