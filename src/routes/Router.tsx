import { Router, RouterProvider } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { homeRoute } from "./home";
import { postsRoute } from "./posts";
import { postRoute } from "./post";

const routeTree = rootRoute.addChildren([homeRoute, postsRoute, postRoute]);

const router = new Router({ routeTree, defaultPreload: "intent" });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
