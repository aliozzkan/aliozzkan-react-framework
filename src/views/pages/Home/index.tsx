import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Container, Jumbotron } from "reactstrap";

function HomePage(): ReactElement {
  const { t } = useTranslation();
  return (
    <div>
      <Container>
        <Jumbotron className="mt-5">
          <h1>{t("home.title")}</h1>
          <p>{t("home.message")}</p>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default HomePage;
