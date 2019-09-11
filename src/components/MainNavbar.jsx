import React from "react";
import { Link } from "gatsby";

import {
    Button,
    UncontrolledCollapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
  } from "reactstrap";

class MainNavbar extends React.Component {
    state = {
        navbarColor: "navbar-transparent"
    };

    componentDidMount() {
        window.addEventListener("scroll", this.changeNavbarColor);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.changeNavbarColor);
    }

    changeNavbarColor = () => {
        if ( document.documentElement.scrollTop > 299 || document.body.scrollTop > 299 ) {
            this.setState({ navbarColor: "dark" });
        } else if (document.documentElement.scrollTop < 300 || document.body.scrollTop < 300 ) {
            this.setState({ navbarColor: "navbar-transparent" });
        }
    };

  render() {
    const { pages, title, description } = this.props;
    const navbarLinks = pages.map((page) => {
        return <NavbarLink key={page.id} route={page.route} title={page.title}/> 
    })
    return (
        <Navbar className={"fixed-top " + this.state.navbarColor} expand="lg" color={this.state.navbarColor}>
          <Container>
            <div className="navbar-translate">
              <NavbarBrand to={pages[0].route} tag={Link}>
                <span>{title}</span> | {description}
              </NavbarBrand>
              <button className="navbar-toggler" id="navigation">
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <UncontrolledCollapse navbar toggler="#navigation" style={{overflow: 'hidden'}}>
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="10">
                    <NavLink to={pages[0].route} tag={Link}>
                        {title} | {description}
                    </NavLink>
                  </Col>
                  <Col className="collapse-close text-right" xs="2">
                    <button className="navbar-toggler" id="navigation">
                      <i className="tim-icons icon-simple-remove" />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-auto" navbar>
                {navbarLinks}
                <NavItem>
                  <Button
                    className="nav-link"
                    color="white"
                    href=""
                    size="sm"
                    target="_blank"
                  >
                    <p>Buy Now</p>
                  </Button>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
    );
  }
}

const NavbarLink = ({route, title}) => {
    return (
        <NavItem>
            <NavLink to={route} tag={Link}>
                {title}
            </NavLink>
        </NavItem>
    )
}


export default MainNavbar;
