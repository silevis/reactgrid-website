import React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { isBrowserIE } from "../functions/isBrowserIE"
import { Container, Row, Col } from "reactstrap"

class Help extends React.Component<any, PageProps> {
  componentDidMount() {
    if (!isBrowserIE()) {
      document.documentElement.scrollTop = 0
      document.scrollingElement.scrollTop = 0
    }
  }
  render() {
    const { data } = this.props
    const { title, description, pages, social } = data.site.siteMetadata

    return (
      <Layout pages={pages} social={social} description={description} title={title}>
        <SEO
          title={"Features"}
          description={`ReactGrid is a feature rich spreadsheet-like datagrid available in Open Source or PRO versions. They're all there for one reason - to make your application goals a reality.`}
        />
        <div className="section mt-5 mt-md-0">
          {/* <div className="space-50"></div> */}
          <h2 style={{ fontSize: "3em" }} className="profile-title text-center mb-3">
            Need help?
          </h2>
          <Container>
            <Row className="py-lg-5">
              <Col sm="4" lg="4">
                <div className="text-center">
                  <div style={{ fontSize: "5em" }} className="mb-4">
                    <i className="fas fa-circle-question text-primary strokeme"></i>
                  </div>
                  <h3 className="pb-3">Got questions?</h3>
                  <p className="pb-3">Add a question on StackOverflow and tag it with #REACTGRIDZIX</p>
                </div>
              </Col>
              <Col sm="4" lg="4">
                <div className="text-center">
                  <div style={{ fontSize: "5em" }} className="mb-4">
                    <i className="far fa-comment-question strokeme text-primary">
                      <i className="fas fa-paint-brush strokeme text-primary" style={{ marginLeft: "-0.3em" }}></i>
                    </i>
                  </div>
                  <h3 className="pb-3">Technical issues?</h3>
                  <p className="pb-3">Please create an issue on our Github following the template</p>
                </div>
              </Col>
              <Col sm="4" lg="4">
                <div className="text-center">
                  <div style={{ fontSize: "5em" }} className="mb-4">
                    <i className="fas fa-palette strokeme text-primary">
                      <i className="far fa-comment-question strokeme text-primary" style={{ marginLeft: "-0.3em" }}></i>
                    </i>
                  </div>
                  <h3 className="pb-3">Need talented developers?</h3>
                  <p className="pb-3">
                    Get a cloud native software development team 100% dedicated to your product. [Schedule a meeting]
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default Help

export const pageQuery = graphql`
  query {
    site {
      ...SiteMetadata
    }
    allFeaturesYaml {
      edges {
        node {
          title
          externalLink
          externalLinkText
          description
          imgAlt
          mediaSrc
        }
      }
    }
  }
`
