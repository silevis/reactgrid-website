import React from 'react';

import {
  // Button,
  // UncontrolledCollapse,
  // Label,
  // FormGroup,
  // Input,
  // InputGroupAddon,
  // InputGroupText,
  // InputGroup,
  // NavbarBrand,
  // Navbar,
  // NavItem,
  // NavLink,
  // Nav,
  Container,
  Row,
  Col
} from "reactstrap";

import bg from "../assets/img/matt-palmer.jpg";

const Header = ({header, description}) => {
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

export default Header;