import React, { ReactElement } from "react";
import { Route, RouteComponentProps, Redirect } from "react-router-dom";
import { store } from "store";

export enum Layout {
  main = "main",
  auth = "auth",
  free = "free",
}

export interface IRoute {
  path: string;
  exact?: boolean;
  name: string;
  component: any;
  route: any;
  roles?: any[];
  layout: Layout;
}

export function PrivateRoute({
  component: Component,
  roles,
  name,
  ...rest
}: IRoute): ReactElement {
  return (
    <Route
      {...rest}
      render={(props: RouteComponentProps) => {
        const reduxStore: store = store.getState();
        const isLogged = reduxStore.userStore.isLogged;
        if (!isLogged)
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );

        console.log(`Required Roles for ${name}`, roles);
        return <Component {...props} />;
      }}
    />
  );
}
