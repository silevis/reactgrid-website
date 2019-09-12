import React from 'react';
import {
  Button,
  Card,
  CardBody,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

class Features extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="6">
            <h2 className="title mb-4">Find out more details</h2>
            <div className="section-space" />
          </Col>
        </Row>
        <Row>
          <Col className="mx-auto" md="12">
            <div>
              <Card className="card-plain">
                <CardBody>
                  <Table className="table-pricing" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>
                          <h3 className="mb-0">Space individual</h3>
                        </th>
                        <th>
                          <h6>Team</h6>
                          <h4 className="desc">$39/mo</h4>
                          <Button
                            className="btn-simple"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            size="sm"
                          >
                            Choose Plan
                          </Button>
                        </th>
                        <th>
                          <h6>Growth</h6>
                          <h4 className="desc">$79/mo</h4>
                          <Button
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            size="sm"
                          >
                            Choose Plan
                          </Button>
                        </th>
                        <th>
                          <h6>Enterprise</h6>
                          <h4 className="desc">$99/mo</h4>
                          <Button
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            size="sm"
                          >
                            Choose Plan
                          </Button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Community support{" "}
                          <i className="tim-icons icon-alert-circle-exc" />
                        </td>
                        <td>
                          <i className="tim-icons icon-check-2 text-success" />
                        </td>
                        <td>
                          <i className="tim-icons icon-check-2 text-success" />
                        </td>
                        <td>
                          <i className="tim-icons icon-check-2 text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>100+ Example Pages</td>
                        <td>
                          <i className="tim-icons icon-check-2 text-success" />
                        </td>
                        <td>
                          <i className="tim-icons icon-check-2 text-success" />
                        </td>
                        <td>
                          <i className="tim-icons icon-check-2 text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>50+ Section Examples</td>
                        <td>
                          <i className="tim-icons icon-check-2 text-success" />
                        </td>
                        <td>
                          <i className="tim-icons icon-check-2 text-success" />
                        </td>
                        <td>
                          <i className="tim-icons icon-check-2 text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>Multiple use</td>
                        <td>
                          <i className="tim-icons icon-simple-remove" />
                        </td>
                        <td>upon request</td>
                        <td>
                          <i className="tim-icons icon-check-2 text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>Custom messages</td>
                        <td>
                          <i className="tim-icons icon-check-2 text-success" />
                        </td>
                        <td>
                          <i className="tim-icons icon-simple-remove" />
                        </td>
                        <td>
                          <i className="tim-icons icon-simple-remove" />
                        </td>
                      </tr>
                      <tr>
                        <td>Multiple requests</td>
                        <td>
                          <i className="tim-icons icon-simple-remove" />
                        </td>
                        <td>
                          <i className="tim-icons icon-simple-remove" />
                        </td>
                        <td>
                          <i className="tim-icons icon-simple-remove" />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Features;