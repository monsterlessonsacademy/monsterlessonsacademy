import { Router, RouterProvider } from "@tanstack/react-router";
import { rootRoute } from "./root/Root";
import { HomeRoute } from "./home/Home";
import { PostsRoute } from "./posts/Posts";

const routeTree = rootRoute.addChildren([
  HomeRoute,
  PostsRoute
]);

const router = new Router({ routeTree, defaultPreload: 'intent' })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export const AppRouter = () => {

  return <RouterProvider router={router} />;
};
