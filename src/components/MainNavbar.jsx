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
  Button,
} from "reactstrap";

class MainNavbar extends React.Component {
  state = {
    navbarColor: "navbar-transparent"
  };

  componentDidMount() {
    window && window.addEventListener("scroll", this.changeNavbarColor);
  }

  componentWillUnmount() {
    window && window.removeEventListener("scroll", this.changeNavbarColor);
  }

  changeNavbarColor = () => {
    if (document.documentElement.scrollTop > 29 || document.body.scrollTop > 29) {
      this.setState({ navbarColor: "bg-darker" });
    } else if (document.documentElement.scrollTop < 30 || document.body.scrollTop < 30) {
      this.setState({ navbarColor: "navbar-transparent" });
    }
  };

  render() {
    const { pages, title, description, social } = this.props;
    return (
      <Navbar className={"fixed-top " + this.state.navbarColor} expand="lg" color={this.state.navbarColor}>
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to={'/'} tag={Link} className="text-white">
              <span style={{ fontSize: '1.75em' }}>{title}</span> <span className="d-none">| {description}</span>
            </NavbarBrand>
            <button className="navbar-toggler" id="navigation">
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <UncontrolledCollapse navbar toggler="#navigation" style={{ overflow: 'hidden' }}>
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="10">
                  <NavLink to={'/'} tag={Link} className="text-white pl-0">
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
            <Nav className="ml-auto d-flex" navbar>
              <StaticQuery
                query={graphql`
                    query {
                      site {
                        siteMetadata {
                          docsVersions {
                            slug
                            desc
                            index
                            active
                          }
                        }
                      }
                    }
                  `}
                render={data => {
                  const docsVersions = data.site.siteMetadata.docsVersions.find(version => version.active);
                  // const docsPage = pages.find(page => page.id === 'docs');
                  // const githubSocial = social.find(social => social.title === 'Github');
                  const npmSocial = social.find(social => social.title === 'npm');
                  const navbarLinks = pages.filter(page => page.active && page.active === true).map(page => {
                    const route = page.route === '/docs' ? `${page.route}${docsVersions.slug}${docsVersions.index}/` : page.route
                    // const title = page.route === '/docs' ? [`${page.title}`, <Badge color="success" style={{padding: '1px'}} className="p-1 ml-1 mb-0">{docsVersions.desc}</Badge>] : page.title
                    return <NavbarLink key={page.id} route={route}>{page.title}</NavbarLink>
                  })
                  const getNow = <li key={'getStartedLink'} className="align-items-center d-flex p-0">
                    <NavLink to={npmSocial.url} tag={Link} target="_blank">
                      <Button type="button" className="btn btn-success btn-simple btn-sm px-4 py-2 text-capitalize">Get now</Button>
                    </NavLink>
                  </li>
                  // const github = <li key={'githubLink'} className="align-items-center d-flex p-0">
                  //   <Button rel="noopener noreferrer" className="btn-sm btn-simple m-0 align-items-center d-flex px-2" color="github" href={githubSocial.url} target="_blank">
                  //     Github{' '}<i className={`${githubSocial.fontAwesomeIcon} pl-1`} />
                  //   </Button>
                  // </li>
                  return [...navbarLinks, getNow]
                }}
              />
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    );
  }
}

const NavbarLink = ({ route, children }) => {
  return (
    <NavItem className="px-0 align-items-center d-flex">
      <NavLink to={route} tag={Link} partiallyActive={route === '/' ? false : true} className="d-flex align-items-center"
        activeClassName="text-success font-weight-bold">
        {children}
      </NavLink>
    </NavItem>
  )
}

export default MainNavbar;
