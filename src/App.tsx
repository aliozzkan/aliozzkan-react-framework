import React, { ReactElement, useEffect, Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import { routes } from "./router";
import { getToken, clearToken } from "helpers/storage";
import { IStore } from "store";
import { setUser, clearUser } from "store/actions/user-actions";
import MainLayout from "views/layouts/Main";
import AuthLayout from "views/layouts/Auth";
import FreeLayout from "views/layouts/Free";
import { AccountService } from "services/sample";
// import jwtDecode from "jwt-decode";
// import { TDecodedSignature } from "utils/types";
import "i18n";

const mapState = (store: IStore) => ({
  isLogged: store.userStore.isLogged,
});

const mapDispatch = {
  onSetUser: setUser,
  onClearUser: clearUser,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

function withLayout(WrappedComponent: any) {
  function HOC(props: any): ReactElement {
    return <WrappedComponent {...props} />;
  }
  return HOC;
}

function getLayout(layout: string) {
  switch (layout) {
    case "main":
      return MainLayout;
    case "auth":
      return AuthLayout;
    default:
      return FreeLayout;
  }
}

function App({ isLogged, onSetUser, onClearUser }: PropsFromRedux) {
  useEffect(() => {
    const token = getToken();
    if (token) {
      /**
       * Decoded Token for real project!!!
       * const decoded: TDecodedSignature = jwtDecode(token)
       */
      AccountService(null, {
        onSuccess: (data) => {
          onSetUser({
            token,
            user: data.data,
          });
        },
        onError: () => {
          clearToken();
          onClearUser();
        },
      })();
    } else {
      clearToken();
      onClearUser();
    }
  }, []); // eslint-disable-line
  if (isLogged === null) {
    return <div>Splash Screen</div>;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return (
              <route.route
                key={index}
                path={route.path}
                exact={route.exact}
                roles={route.roles}
                component={withLayout((props: any) => {
                  const Layout = getLayout(route.layout);
                  return (
                    <Suspense fallback={<div></div>}>
                      <Layout {...props}>
                        <route.component {...props} />
                      </Layout>
                    </Suspense>
                  );
                })}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default connector(App);
