import { Link, Route } from "@tanstack/react-router";
import { rootRoute } from "./root";
import axios from "axios";

type Post = {
  slug: string;
  title: string;
  body: string;
};

const fetchPosts = async () => {
  const response = await axios.get<{ articles: Post[]; articlesCount: number }>(
    "https://api.realworld.io/api/articles?limit=10&offset=0"
  );
  return response.data;
};

export const postsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/posts",
  loader: fetchPosts,
  component: () => {
    const data = postsRoute.useLoaderData();
    return (
      <div>
        <h1>Posts</h1>
        <div>
          {data.articles.map((post, index) => (
            <div key={index}>
              <Link to="/posts/$postSlug" params={{ postSlug: post.slug }}>
                {post.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  },
  pendingComponent: () => {
    return <div>Posts Loading</div>;
  },
  errorComponent: () => {
    return <div>Posts Error</div>;
  },
});
