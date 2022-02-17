import React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { isBrowserIE } from "../functions/isBrowserIE"
import { Container, Row, Col } from "reactstrap"

class Support extends React.Component<any, PageProps> {
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
      <Layout
        pages={pages}
        social={social}
        description={description}
        title={title}
      >
        <SEO
          title={"Help"}
          description={`ReactGrid is a feature rich spreadsheet-like datagrid component to make your application goals a reality.`}
        />
        <div className="section mt-5 mt-md-0">
          <h2
            style={{ fontSize: "3em" }}
            className="profile-title text-center mb-3"
          >
            Need support?
          </h2>
          <Container>
            <Row className="py-lg-5">
              <Col md="4" className="mt-5">
                <div className="text-center">
                  <div style={{ fontSize: "5em" }} className="mb-4">
                    <i className="fas fa-question-circle text-primary strokeme" />
                  </div>
                  <h3 className="pb-2">Got questions?</h3>

                  <p className="pb-3">
                    Submit a question on{" "}
                    <a
                      href="https://stackoverflow.com/questions/ask?tags=reactgrid%20reactjs%20javascript"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      StackOverflow
                    </a>{" "}
                    with the #reactgrid tag
                  </p>
                </div>
              </Col>
              <Col md="4" className="mt-5">
                <div className="text-center">
                  <div style={{ fontSize: "5em" }} className="mb-4">
                    <i className="fas fa-bug text-primary strokeme" />
                  </div>
                  <h3 className="pb-2">Technical issues?</h3>

                  <p className="pb-3">
                    Please create an issue on our{" "}
                    <a
                      href="https://github.com/silevis/reactgrid/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github{" "}
                    </a>
                    page
                  </p>
                </div>
              </Col>
              <Col md="4" className="mt-5">
                <div className="d-flex flex-column align-items-center text-center">
                  <div style={{ fontSize: "5em" }} className="mb-4">
                    <i className="fas fa-users text-primary strokeme" />
                  </div>
                  <h3 className="pb-2">Need talented developers?</h3>

                  <p className="pb-3">
                    Get a cloud native software development team 100% dedicated
                    to your product.
                    <br />
                    <a
                      href="https://calendly.com/michael-matejko/meeting"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Schedule a meeting with our CTO
                    </a>
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

export default Support

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
