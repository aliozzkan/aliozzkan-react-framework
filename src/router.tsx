import { lazy } from "react";
import { Route } from "react-router-dom";
import { IRoute, PrivateRoute, Layout } from "components/route";

export const routes: Array<IRoute> = [
  {
    path: "/",
    component: lazy(() => import("./views/pages/Home")),
    exact: true,
    route: Route,
    name: "Home",
    layout: Layout.main
  },
  {
    path: "/login",
    component: lazy(() => import("./views/pages/Auth/Login")),
    exact: true,
    route: Route,
    name: "Login Page",
    layout: Layout.auth
  },
  {
    path: "/register",
    component: lazy(() => import("./views/pages/Auth/Register")),
    exact: true,
    route: Route,
    name: "Register Page",
    layout: Layout.auth
  },
  {
    path: "/account",
    component: lazy(() => import("./views/pages/Account")),
    exact: true,
    route: PrivateRoute,
    name: "Account",
    layout: Layout.main
  },
  {
    path: "/logout",
    component: lazy(() => import("./views/pages/Auth/Logout")),
    exact: true,
    route: PrivateRoute,
    name: "Ticket",
    layout: Layout.free
  },
  {
    path: "",
    component: lazy(() => import("./views/pages/Error/NotFound")),
    exact: true,
    route: Route,
    name: "",
    layout: Layout.free
  },
];
