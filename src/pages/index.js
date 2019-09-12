import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { 
  Container,
  Row,
  Col, 
  Button
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
    // const posts = data.allMarkdownRemark.edges
    const { title, description, pages, social } = data.site.siteMetadata;
    return (
      <Layout location={this.props.location} pages={pages} social={social} description={description} title={title}>
        <SEO title={title} />
        {/* header */}
        <div className="wrapper" ref="wrapper">
          <div className="page-header">
            <div className="squares square1" />
            <div className="squares square2" />
            <div className="squares square3" />
            <div className="squares square4" />
            <div className="squares square5" />
            <div className="squares square6" />
            <div className="page-header-image" />
            <Container>
              <Row>
                <Col className="mr-auto text-left mt-5" lg="5" md="7">
                  <h6 className="category">by Silevis Software </h6>
                  <h1 className="title">
                    <strong className="text-info">ReactGrid</strong>
                  </h1>
                  <h3 className="title">Hightly customizable spreadsheet grid for bulding custom solutions</h3>
                  <br />
                  <div className="buttons">
                    <Button className="btn-round mr-3 pulse" color="primary" tag={Link} to={pages[1].route}
                       size="lg">
                      <i className="fas fa-th"></i>
                    </Button>
                    <Link tag={Link} to={pages[1].route}> <p style={{display: 'inline'}}>Check demo!</p></Link>
                  </div>
                </Col>
                <Col className="ml-auto mt-5" lg="7" md="12">
                  <div className="iframe-container">
                    <img alt="..." src="https://s3.amazonaws.com/creativetim_bucket/github/gif/black-dashboard.gif"/>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        {/* END header */}
        {/* features */}
        <div className="features-4">
          <Container>
            <Row className="align-items-center">
              <Col className="mr-auto text-left" lg="3">
                <h1 className="title">You should be here!</h1>
                <p className="description">
                  5,000 capacity venue, holding some of the latest technology
                  lighting with a 24 colour laser system Amnesia is one of the
                  islands most legendary clubs.
                </p>
                <Button
                  className="mt-3"
                  color="primary"
                  to={pages[2].route}
                  tag={Link}
                  onClick={e => e.preventDefault()}
                >
                  Check all features<i className="tim-icons icon-double-right" />
                </Button>
              </Col>
              <Col className="p-sm-0" lg="8">
                <Row>
                  <Col md="6">
                    <div className="info info-success">
                      <div className="icon icon-white">
                        <i className="tim-icons icon-satisfied" />
                      </div>
                      <h4 className="info-title">Best Quality</h4>
                      <p className="description">
                        Gain access to the demographics, psychographics, and
                        location of unique people.
                      </p>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="info info-warning">
                      <div className="icon icon-white">
                        <i className="tim-icons icon-palette" />
                      </div>
                      <h4 className="info-title">Developer first design</h4>
                      <p className="description">
                        Gain access to the demographics, psychographics, and
                        location of unique people.
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <div className="info info-primary">
                      <div className="icon icon-white">
                        <i className="tim-icons icon-user-run" />
                      </div>
                      <h4 className="info-title">Fast Development</h4>
                      <p className="description">
                        Gain access to the demographics, psychographics, and
                        location of unique people.
                      </p>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="info info-info">
                      <div className="icon icon-white">
                        <i className="tim-icons icon-bulb-63" />
                      </div>
                      <h4 className="info-title">Super Fresh</h4>
                      <p className="description">
                        Gain access to the demographics, psychographics, and
                        location of unique people.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        {/*  END features */}
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
