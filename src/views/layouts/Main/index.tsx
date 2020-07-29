import React, { ReactElement, Suspense } from "react";
import Header from '../sharedPartials/Header'

interface Props {
  children: any;
}

function MainLayout(props: Props): ReactElement {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Header />
      <div>{props.children}</div>
    </Suspense>
  );
}

export default MainLayout;
