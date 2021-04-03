import * as React from "react";
import * as Loadable from "react-loadable";

import Loading from "./components/loading/Loading";

const delay = 2000;
const timeout = 10000;

interface RouteLoadable {
  path: string;
  exact: boolean;
  name: string;
  component: React.ComponentType<unknown> & Loadable.LoadableComponent;
}

const LoadableDefaultOptions = {
  delay,
  timeout,
};
// Pages
const Home = Loadable({
  ...LoadableDefaultOptions,
  loader: () => import("./pages/home/Home"),
  loading: Loading,
});
const Login = Loadable({
  ...LoadableDefaultOptions,
  loader: () => import("./pages/login/Login"),
  loading: Loading,
});
const Error = Loadable({
  ...LoadableDefaultOptions,
  loader: () => import("./pages/error/Error"),
  loading: Loading,
});

const routes: RouteLoadable[] = [
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "/login", exact: true, name: "Login", component: Login },
  { path: "/error", exact: true, name: "Error", component: Error },
];

export default routes;
