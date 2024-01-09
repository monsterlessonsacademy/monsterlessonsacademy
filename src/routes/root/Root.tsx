import { Link, Outlet, RootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const rootRoute = new RootRoute({
  component: () => (
    <div>
      <div>Root route</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  )
})
