import { Route } from "@tanstack/react-router";
import { rootRoute } from "../root/Root";

export const HomeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
    <div>
      Homepage
    </div>
  )
})
