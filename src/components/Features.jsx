import React from 'react';
import {
  Button,
  Card,
  CardBody,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip
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
                          <h3 className="mb-0">Product features</h3>
                        </th>
                        <th>
                          <h6>Team</h6>
                          <h4 className="desc">Community</h4>
                          <Button className="btn-simple" color="success" href="#pablo" onClick={e => e.preventDefault()} size="sm">
                            Choose Plan
                          </Button>
                        </th>
                        <th>
                          <h6>Premium</h6>
                          <h4 className="desc">$79/mo</h4>
                          <Button  color="success" href="#pablo" onClick={e => e.preventDefault()} size="sm">
                            Choose Plan
                          </Button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Column resize
                        </td>
                        <td>
                          <i className="tim-icons icon-check-2 text-success" />
                        </td>
                        <td>
                          <i className="tim-icons icon-check-2 text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>Column reorder</td>
                        <td>
                          <i className="tim-icons icon-check-2 text-success" />
                        </td>
                        <td>
                          <i className="tim-icons icon-check-2 text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>Row reorder</td>
                        <td>
                          <i className="tim-icons icon-check-2 text-success" />
                        </td>
                        <td>
                          <i className="tim-icons icon-check-2 text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>Frozen rows and columns</td>
                        <td>
                          <i className="tim-icons icon-simple-remove" />
                        </td>
                        <td>upon request</td>
                      </tr>
                      <tr>
                        <td>Multiple focuses</td>
                        <td>
                          <i className="tim-icons icon-check-2 text-success" />
                        </td>
                        <td>
                          <i className="tim-icons icon-simple-remove" />
                        </td>
                      </tr>
                      <tr>
                        <td>Fill handle</td>
                        <td>
                          <i className="tim-icons icon-simple-remove" />
                        </td>
                        <td>
                          <i className="tim-icons icon-simple-remove" />
                        </td>
                      </tr>
                      <tr>
                        <td>Area selection</td>
                        <td>
                          <i className="tim-icons icon-simple-remove" />
                        </td>
                        <td>
                          <i className="tim-icons icon-simple-remove" />
                        </td>
                      </tr>
                      <tr>
                        <td>Multi selection</td>
                        <td>
                          <i className="tim-icons icon-simple-remove" />
                        </td>
                        <td>
                          <i className="tim-icons icon-simple-remove" />
                        </td>
                      </tr>
                      <tr>
                        <td>Copy</td>
                        <td>
                          <i className="tim-icons icon-simple-remove" />
                        </td>
                        <td>
                          <i className="tim-icons icon-simple-remove" />
                        </td>
                      </tr>
                      <tr>
                        <td>Cut</td>
                        <td>
                          <i className="tim-icons icon-simple-remove" />
                        </td>
                        <td>
                          <i className="tim-icons icon-simple-remove" />
                        </td>
                      </tr>
                      <tr>
                        <td>Paste</td>
                        <td>
                          <i className="tim-icons icon-simple-remove" />
                        </td>
                        <td>
                          <i className="tim-icons icon-simple-remove" />
                        </td>
                      </tr>
                      <tr>
                        <td>                          
                          Touch capability{" "}
                          <i className="tim-icons icon-alert-circle-exc" id="tc-tooltip" />
                          <UncontrolledTooltip delay={0} placement="right" target="tc-tooltip" >
                            Safari open
                          </UncontrolledTooltip>
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