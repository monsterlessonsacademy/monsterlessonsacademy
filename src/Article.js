import { useParams, useSearchParams } from "react-router-dom";

const Article = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("params", params, searchParams.get("page"));
  return <div>Article {params.slug}</div>;
};

export default Article;
