import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

import {
    UncontrolledCollapse,
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
        if ( document.documentElement.scrollTop > 29 || document.body.scrollTop > 29 ) {
            this.setState({ navbarColor: "dark" });
        } else if (document.documentElement.scrollTop < 30 || document.body.scrollTop < 30 ) {
            this.setState({ navbarColor: "navbar-transparent" });
        }
    };

  render() {
    const { pages, title, description } = this.props;
    return (
        <Navbar className={"fixed-top " + this.state.navbarColor} expand="lg" color={this.state.navbarColor}>
          <Container>
            <div className="navbar-translate">
              <NavbarBrand to={pages[0].route} tag={Link}>
                <span style={{fontSize: '1.3em'}}>{title}</span> | {description}
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
                        {title} <span className="d-none">| {description}</span>
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
                <StaticQuery
                  query={graphql`
                    query {
                      site {
                        siteMetadata {
                          docsVersions {
                            slug
                            desc
                            index
                          }
                        }
                      }
                    }
                  `}
                  render={data => {
                    const docsVersions = data.site.siteMetadata.docsVersions[0];
                    return pages.filter(page => page.active === true).map((page) => 
                      page.route !== '/' ? 
                        <NavbarLink  key={page.id} route={page.route === '/docs' ? `${page.route}${docsVersions.slug}${docsVersions.index}/` : page.route} title={page.title}/> 
                        : false )
                    }}
                />
                <NavItem className="align-items-center d-flex">
                  <button type="button" className="btn btn-success btn-simple btn-sm">Buy</button>
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
        <NavLink to={route} tag={Link} partiallyActive={route === '/' ? false : true} activeClassName="text-success font-weight-bold" >
          {title}
        </NavLink>
      </NavItem>
    )
}

export default MainNavbar;
