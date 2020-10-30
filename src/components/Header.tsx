import React from 'react';

import {
  Container,
  Row,
  Col
} from "reactstrap";

import bg from "../assets/img/ReactGrid-illustration05.png";

const Header = (props) => {
  return (
    <div className="blog-page-header header-medium">
      <div
        className="page-header-image"
        style={{ backgroundImage: `url(${bg})`, filter: 'blur(15px)' }}
      />
      <Container>
        <Row className="text-left" style={{ marginTop: 66 }}> {/*  66- height if navbar */}
          <Col md="6" xs="12">
            <h1 className="display-2 text-primary">Latest blogposts</h1>
            <p className="display-4">Read our newsfeed</p>
            {props.children}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header;