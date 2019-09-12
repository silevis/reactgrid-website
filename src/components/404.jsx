import React from 'react';
import {
  Container,
  Row,
  Col
} from "reactstrap";
import bg from "../assets/img/braden-collum.jpg";

  class ErrorPage extends React.Component {
    render() {
      return (
        <div className="wrapper" ref="wrapper">
          <div className="page-header error-page header-filter">
            <div
              className="page-header-image"
              style={{ backgroundImage: "url(" + bg + ")" }}
            />
            <Container>
              <Row>
                <Col md="12">
                  <h1 className="title">404</h1>
                  <h2 className="description">Page not found :(</h2>
                  <h4 className="description">
                    Ooooups! Looks like you got lost.
                  </h4>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      )
    }
}

export default ErrorPage;