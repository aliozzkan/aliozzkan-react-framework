import React, { ReactElement } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { useDispatch } from "react-redux";
import { setUser } from "store/actions/user-actions";
import { FormGenerator } from "components";
import { login } from "utils/forms/account";
import { LoginService, AccountService } from "services/sample";
import { useFetchData } from "hooks/use-fetch-data";
import {setToken} from 'helpers/storage'



function LoginPage(): ReactElement {
  // Fetch Data Hook
  const [loginFetch, mutationLoginFetch] = useFetchData<LoginService["res"]>();
  // Store Dispatch
  const dispatch = useDispatch();

  function handleSubmit(data: login) {
    LoginService(mutationLoginFetch, {
      onSuccess: (loginResponse) => {
        AccountService(null, {
          onSuccess: (accountResponse) => {
            setToken(loginResponse.token)
            dispatch(
              setUser({
                token: loginResponse.token,
                user: accountResponse.data,
              })
            );
          },
        })();
      },
    })({
      jsonData: data,
    });
  }

  return (
    <div>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col md={6}>
            <Card>
              <CardBody>
                <h1>Login Page</h1>
                <hr />
                <FormGenerator data={login} onSubmit={handleSubmit} />
                {loginFetch.status}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPage;
