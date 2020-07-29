import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody, Spinner } from "reactstrap";
import { AccountService } from "services/sample";
import {
  createInitialValue,
  mutationFetch,
  FetchData,
} from "utils/hocs/fetch-data";

interface Props {}
interface State {
  accountFetch: FetchData<AccountService["res"]>;
}

class AccountPage extends Component<Props, State> {
  state = {
    accountFetch: createInitialValue<AccountService["res"]>(),
  };
  _accountMutation = mutationFetch<AccountService["res"]>(this, "accountFetch");

  componentDidMount() {
    AccountService(this._accountMutation)();
  }

  render() {
    return (
      <div>
        <Container className="mt-5">
          <Row className="justify-content-center">
            <Col>
              <Card>
                <CardBody className="text-center">
                  {this.state.accountFetch.isPending && <Spinner />}
                  {this.state.accountFetch.isFulfilled && (
                    <div>
                      <img
                        src={this.state.accountFetch.data!.data.avatar}
                        alt="Avatar"
                        height="200"
                        width="200"
                        className="img-thumbnail"
                      />
                      <h1 className="mt-2">
                        {this.state.accountFetch.data!.data.first_name +
                          " " +
                          this.state.accountFetch.data!.data.last_name}
                      </h1>
                      <p>{this.state.accountFetch.data!.data.email}</p>
                    </div>
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AccountPage;
