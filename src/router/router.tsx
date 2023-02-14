import {
  Outlet,
  ReactRouter,
  RootRoute,
  Route,
  type RouteOptions,
  RouterProvider
} from '@tanstack/react-router'
import { Landing } from '../features/landing'

const rootRoute = new RootRoute({
  component: Root
})

function Root() {
  return (
    <>
      <div>
        <h1>App</h1>
      </div>
      <hr />
      <Outlet />
    </>
  )
}

const routes: Array<RouteOptions> = [
  { getParentRoute: () => rootRoute, path: '/', component: Landing }
]

const routeTree = rootRoute.addChildren(
  routes.map((route) => new Route(route))
)

const router = new ReactRouter({ routeTree })

export function Router() {
  return <RouterProvider router={router} />
}
