import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { 
  Container,
  Row,
  Col, 
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";


class Index extends React.Component {
  componentDidMount() {
    document.body.classList.add("reset-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("reset-page");
  }
  render() {
    const { data } = this.props
    const { title, description, pages, social } = data.site.siteMetadata;
    return (
      <Layout location={this.props.location} pages={pages} social={social} description={description} title={title}>
        <SEO title={title} />
        <div className="wrapper" ref="wrapper">
          <div className="section">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="10">
                  <Card className="card-invoice">
                    <CardHeader className="text-center pt-5" data-color-icon="warning">
                      <Row className="justify-content-between">
                        <Col>
                          <h1 className="h1 px-3">Cookie Policy</h1>
                          <h3 className="h3 px-5 text-muted">Effective date: xx.xx.xxxx</h3>
                          <Nav justified className="mt-5">
                            <NavItem className="success">
                              <NavLink href="#cookies-guide" className="h4">
                                <Button className="btn-simple" color="success">Cookies guide</Button>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink href="#what-is-a-cookie" className="h4">
                                <Button className="btn-simple" color="success">What is a Cookie</Button>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink href="#how-do-we-use-cookie" className="h4">
                                <Button className="btn-simple" color="success">How do we use Cookie</Button>
                              </NavLink>
                            </NavItem>
                          </Nav>
                        </Col>
                      </Row>
                      <br />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col xs="11" className="mx-auto">
                          <div className="cookies-policy-topic-wrapper">
                            <h2 id="cookies-guide" className="h2">Cookies guide</h2>
                            <p className="pb-3">Lorem ipsum dolor <strong>sit amet, consectetur adipiscing elit.</strong> Fusce eu sodales erat. Morbi eu eros nulla. 
                              Proin odio diam, pulvinar sed rhoncus at, finibus et dui. Duis enim tellus, ultrices vel lectus id,
                              maximus venenatis nisi. Aenean vitae tempus odio. Cras scelerisque accumsan felis, et tincidunt 
                              magna molestie at. In dictum quis dui et aliquet. Vestibulum vel nisl eu ex tempor lobortis. Morbi 
                              eleifend eros mauris, sit amet accumsan magna consectetur ut. Curabitur tincidunt ex mattis nibh 
                              imperdiet cursus. Duis imperdiet ex ut ante accumsan, eget dictum ante tincidunt. 
                              Praesent et pellentesque massa, vitae luctus sem. Nam ut viverra sem.
                            </p>
                            <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu sodales erat. Morbi eu eros nulla. 
                              Proin odio diam, pulvinar sed rhoncus at, finibus et dui. Duis enim tellus, ultrices vel lectus id,
                              maximus venenatis nisi. Aenean vitae tempus odio. Cras scelerisque accumsan felis, et tincidunt 
                              magna molestie at. In dictum quis dui et aliquet. Vestibulum vel nisl eu ex tempor lobortis. Morbi 
                              eleifend eros mauris, sit amet accumsan magna consectetur ut. Curabitur tincidunt ex mattis nibh 
                              imperdiet cursus. Duis imperdiet ex ut ante accumsan, eget dictum ante tincidunt. 
                              Praesent et pellentesque massa, vitae luctus sem. Nam ut viverra sem.
                            </p>
                            <hr class="line-primary ml-auto"/>
                          </div>
                          <div className="cookies-policy-topic-wrapper">
                            <h2 id="what-is-a-cookie" className="h2">Cookies guide</h2>
                            <p className="pb-3">Lorem ipsum dolor <strong>sit amet, consectetur adipiscing elit.</strong> Fusce eu sodales erat. Morbi eu eros nulla. 
                              Proin odio diam, pulvinar sed rhoncus at, finibus et dui. Duis enim tellus, ultrices vel lectus id,
                              maximus venenatis nisi. Aenean vitae tempus odio. Cras scelerisque accumsan felis, et tincidunt 
                              magna molestie at. In dictum quis dui et aliquet. Vestibulum vel nisl eu ex tempor lobortis. Morbi 
                              eleifend eros mauris, sit amet accumsan magna consectetur ut. Curabitur tincidunt ex mattis nibh 
                              imperdiet cursus. Duis imperdiet ex ut ante accumsan, eget dictum ante tincidunt. 
                              Praesent et pellentesque massa, vitae luctus sem. Nam ut viverra sem.
                            </p>
                            <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu sodales erat. Morbi eu eros nulla. 
                              Proin odio diam, pulvinar sed rhoncus at, finibus et dui. Duis enim tellus, ultrices vel lectus id,
                              maximus venenatis nisi. Aenean vitae tempus odio. Cras scelerisque accumsan felis, et tincidunt 
                              magna molestie at. In dictum quis dui et aliquet. Vestibulum vel nisl eu ex tempor lobortis. Morbi 
                              eleifend eros mauris, sit amet accumsan magna consectetur ut. Curabitur tincidunt ex mattis nibh 
                              imperdiet cursus. Duis imperdiet ex ut ante accumsan, eget dictum ante tincidunt. 
                              Praesent et pellentesque massa, vitae luctus sem. Nam ut viverra sem.
                            </p>
                            <hr class="line-primary ml-auto"/>
                          </div>
                          <div className="cookies-policy-topic-wrapper">
                            <h2 id="how-do-we-use-cookie" className="h2">Cookies guide</h2>
                            <p className="pb-3">Lorem ipsum dolor <strong>sit amet, consectetur adipiscing elit.</strong> Fusce eu sodales erat. Morbi eu eros nulla. 
                              Proin odio diam, pulvinar sed rhoncus at, finibus et dui. Duis enim tellus, ultrices vel lectus id,
                              maximus venenatis nisi. Aenean vitae tempus odio. Cras scelerisque accumsan felis, et tincidunt 
                              magna molestie at. In dictum quis dui et aliquet. Vestibulum vel nisl eu ex tempor lobortis. Morbi 
                              eleifend eros mauris, sit amet accumsan magna consectetur ut. Curabitur tincidunt ex mattis nibh 
                              imperdiet cursus. Duis imperdiet ex ut ante accumsan, eget dictum ante tincidunt. 
                              Praesent et pellentesque massa, vitae luctus sem. Nam ut viverra sem.
                            </p>
                            <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu sodales erat. Morbi eu eros nulla. 
                              Proin odio diam, pulvinar sed rhoncus at, finibus et dui. Duis enim tellus, ultrices vel lectus id,
                              maximus venenatis nisi. Aenean vitae tempus odio. Cras scelerisque accumsan felis, et tincidunt 
                              magna molestie at. In dictum quis dui et aliquet. Vestibulum vel nisl eu ex tempor lobortis. Morbi 
                              eleifend eros mauris, sit amet accumsan magna consectetur ut. Curabitur tincidunt ex mattis nibh 
                              imperdiet cursus. Duis imperdiet ex ut ante accumsan, eget dictum ante tincidunt. 
                              Praesent et pellentesque massa, vitae luctus sem. Nam ut viverra sem.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        pages {
          description
          id
          route
          title
          active
        }
        social {
          description
          fontAwesomeIcon
          title
          url
        }
      }
    }
  }
`
