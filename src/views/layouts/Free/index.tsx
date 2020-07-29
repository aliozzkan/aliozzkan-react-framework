import React, { ReactElement } from "react";

interface Props {
  children: any;
}

function index(props: Props): ReactElement {
  return <div>{props.children}</div>;
}

export default index;
