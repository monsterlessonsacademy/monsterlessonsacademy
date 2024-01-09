import { Route } from "@tanstack/react-router";
import { rootRoute } from "./root";

export const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <div>Homepage</div>,
});
