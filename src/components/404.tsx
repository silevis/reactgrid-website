import React from 'react';
import {
  Container,
  Row,
  Col
} from "reactstrap";
import bg from "../assets/img/braden-collum.jpg";

const ErrorPage = () => {
  return (
    <div className="wrapper" ref="wrapper">
      <div className="page-header page-header-compact error-page header-filter">
        <div
          className="page-header-image"
          style={{ backgroundImage: `url(${bg})`, zIndex: 0, filter: 'hue-rotate(300deg) invert(80%)' }}
        />
        <Container>
          <Row>
            <Col md="12">
              <h1 className="title text-white">404</h1>
              <h2 className="description text-white">Page not found :(</h2>
              <h4 className="description text-white">
                Ooooups! Looks like you got lost.
                </h4>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default ErrorPage;