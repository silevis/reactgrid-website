import React from 'react';

import {
  Container,
  Row,
  Col
} from "reactstrap";

import bg from "../assets/img/matt-palmer.jpg";

const ErrorPage = ({header, description}) => {
    return (
      <div className="page-header header-filter page-header-compact">
        <div className="page-header-image" style={{ backgroundImage: "url(" + bg + ")" }} />
        <Container>
          <Row className="text-left">
            <Col md="6" xs="12">
              {header}
              {description}
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default ErrorPage;