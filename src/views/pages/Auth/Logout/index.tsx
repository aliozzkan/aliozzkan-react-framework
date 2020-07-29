import React, { ReactElement } from "react";
import { Redirect } from "react-router-dom";

import { useDispatch } from "react-redux";
import { clearUser } from "store/actions/user-actions";
import { clearToken } from "helpers/storage";

function Logout(): ReactElement {
  const dispatch = useDispatch();
  function logout() {
    clearToken();
    dispatch(clearUser());
    return <Redirect to="/" />;
  }
  return <>{logout()}</>;
}

export default Logout;
