import React, { ReactElement, Suspense } from "react";
import { Redirect } from "react-router-dom";
import { useStore } from "react-redux";
import { IStore } from "store";
import Header from "../sharedPartials/Header";

function AuthLayout(props: { children: any }): ReactElement {
  const reduxStore: IStore = useStore().getState();
  return reduxStore.userStore.isLogged ? (
    <Redirect to="/" />
  ) : (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        <Header />
        {props.children}
      </Suspense>
    </div>
  );
}

export default AuthLayout;
