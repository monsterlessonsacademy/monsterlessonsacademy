import { Route } from "@tanstack/react-router";
import { rootRoute } from "../root/Root";

export const PostsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/posts',
  component: () => (
    <div>
      Posts
    </div>
  )
})
