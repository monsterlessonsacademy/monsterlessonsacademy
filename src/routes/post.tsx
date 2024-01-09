import { Route, useParams } from "@tanstack/react-router";
import { rootRoute } from "./root";

export const postRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/posts/$postSlug",
  component: () => {
    const { postSlug } = useParams({ strict: false });
    return (
      <div>
        <h1>Post {postSlug}</h1>
      </div>
    );
  },
});
