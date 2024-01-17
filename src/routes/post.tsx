import { Route } from "@tanstack/react-router";
import { rootRoute } from "./root";
import axios from "axios";
import { Post } from "./posts";

const fetchPost = async (postSlug: string) => {
  const response = await axios.get<{ article: Post }>(
    `https://api.realworld.io/api/articles/${postSlug}`
  );
  return response.data.article;
};

export const postRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/posts/$postSlug",
  loader: ({ params }) => fetchPost(params.postSlug),
  component: () => {
    const post = postRoute.useLoaderData();
    return (
      <div>
        <h1>{post.title}</h1>
      </div>
    );
  },
});
