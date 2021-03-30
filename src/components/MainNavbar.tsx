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

class MainNavbar extends React.Component<any, {}> {

  render() {
    const { pages, title, description } = this.props;
    return (
      <header className="sticky-header ">
        <div className="header header-2">
          <Navbar id="main-navbar" className="bg-white py-0" expand="lg" style={{ height: '66px' }}>
            <Container className="h-100">
              <div className="navbar-translate">
                <NavbarBrand to={'/'} tag={Link}>
                  <span style={{ fontSize: '1.75em' }} className="text-primary">{title}</span> <span className="d-none">| {description}</span>
                </NavbarBrand>
                <button className="navbar-toggler " id="navigation">
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <UncontrolledCollapse navbar toggler="#navigation" style={{ overflow: 'hidden' }} id="navbar-collapser" className="h-100">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="10">
                      <NavLink to={'/'} tag={Link} className="text-primary pl-0" style={{ fontSize: '1.2em' }}>
                        {title} <span className="d-none">| {description}</span>
                      </NavLink>
                    </Col>
                    <Col className="collapse-close" xs="2">
                      <button className="navbar-toggler text-danger w-100 h-100" id="navigation">
                        <i className="fas fa-times"></i>
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="ml-auto d-flex h-100" navbar>
                  <StaticQuery
                    query={graphql`
                    query {
                      site {
                        siteMetadata {
                          ...DocVersions
                        }
                      }
                    }
                  `}
                    render={data => {
                      const docsVersions = data.site.siteMetadata.docsVersions.find(version => version.active);
                      const featuresComparisonPage = pages.find(page => page.id === 'feature-comparison');
                      // const githubSocial = social.find(social => social.title === 'Github');
                      const navbarLinks = pages.filter(page => page.active).map(page => {
                        const route = page.route === '/docs' ? `${page.route}${docsVersions.slug}${docsVersions.index}/` : page.route
                        // const title = page.route === '/docs' ? [`${page.title}`, <Badge color="success" style={{padding: '1px'}} className="p-1 ml-1 mb-0">{docsVersions.desc}</Badge>] : page.title
                        return <NavbarLink key={page.id} route={route}>{page.title}</NavbarLink>
                      });
                      const getNow = <li key={'getStartedLink'} className="align-items-center d-flex p-0">
                        <NavLink to={featuresComparisonPage.route} tag={Link} activeClassName="main-navigation-active font-weight-bold" className='h-100 d-flex align-items-center'>
                          <Button type="button" className="btn-primary btn-sm px-4 py-2 text-capitalize">Get Now</Button>
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
        </div>
      </header>
    );
  }
}

const NavbarLink = ({ route, children }) => {
  return (
    <NavItem className="px-0 mx-0 align-items-center d-flex">
      <NavLink to={route} tag={Link} partiallyActive={true || !!(route === '/' || route === '/blog')}
        className="d-flex w-100 align-items-center px-4 h-100 text-uppercase font-weight-normal"
        activeClassName="main-navigation-active font-weight-bold">
        {children}
      </NavLink>
    </NavItem>
  )
}

export default MainNavbar;
