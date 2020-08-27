import React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FAQ from "../components/FAQ"
import { isBrowserIE } from "../functions/isBrowserIE"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
} from "reactstrap";


class Pricing extends React.Component<PageProps<any>, {}> {
  componentDidMount() {
    if (!isBrowserIE()) {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }
  render() {
    const { data } = this.props
    const { title, description, pages, social } = data.site.siteMetadata;

    return (
      <Layout pages={pages} social={social} description={description} title={title}>
        <SEO title={title} />
        <div className="section">
          <Container>
            {/* <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">Pick the best plan for you</h2>
                <h4 className="description">
                  You have Free Unlimited Updates and Premium Support on each
                  package.
                </h4>
                <div className="section-space" />
              </Col>
            </Row> */}
            <Row>
              <Col md="4">
                <Card className="card-pricing card-plain">
                  <CardBody>
                    <h2 className="title">Non-commercial</h2>
                    <h4 className="description font-weight-bold">
                      Free
                    </h4>
                    <ul>
                      <li>Non-commercial use</li>
                      <li>Community support</li>
                      <li>All features</li>
                      <li>Source available</li>
                    </ul>
                    <Button className="btn btn-simple btn-success" color="success" href="#pablo" onClick={e => e.preventDefault()} >
                      Contact Us
                    </Button>
                  </CardBody>
                </Card>
                <hr className="line-success my-5 d-md-none mx-auto" />
              </Col>
              <Col md="4">
                <Card className="card-pricing card-plain">
                  <CardBody>
                    <h2 className="title">
                      Developer license
                    </h2>
                    <h4 className="description font-weight-bold">
                      $499 <small>/developer</small>
                    </h4>
                    <ul>
                      <li>Multiple applications</li>
                      <li>Internal use</li>
                      <li>12 months of support</li>
                      <li>12 product updates</li>
                      <li>Source available</li>
                    </ul>
                    <Button className="btn btn-simple btn-success" color="success" href="#pablo" onClick={e => e.preventDefault()} >
                      Contact Us
                    </Button>
                  </CardBody>
                </Card>
                <hr className="line-primary my-5 d-md-none mx-auto" />
              </Col>
              <Col md="4">
                <Card className="card-pricing card-plain">
                  <CardBody>
                    <h2 className="title">Deployment license</h2>
                    <h4 className="description font-weight-bold">
                      $2999 <small>/year and production environment</small>
                    </h4>
                    <ul>
                      <li>Distribute ReactGrid in one external facing application (SaaS, on premise)</li>
                    </ul>
                    <Button className="btn btn-simple btn-success" color="success" href="#pablo" onClick={e => e.preventDefault()} >
                      Contact Us
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="section">
                  <Row>
                    <Col xs="auto" className="flex-shrink-1">
                      <h3> <i className="tim-icons icon-check-2 text-success" />{'  '}</h3>
                    </Col>
                    <Col>
                      <h3>We offer a discount of 20% in the second year</h3>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="auto" className="flex-shrink-1">
                      <h3> <i className="tim-icons icon-check-2 text-success" />{'  '}</h3>
                    </Col>
                    <Col>
                      <h3>Get our developer license for just $50</h3>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <FAQ />
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default Pricing

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
        docsVersions {
          slug
          desc
          index
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
