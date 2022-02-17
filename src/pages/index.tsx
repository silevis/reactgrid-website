import React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Button, Card } from "reactstrap"
import SamplePoster from "../assets/img/sample.png"
import Video from "../assets/video/sample.mp4"
import { GithubStarcounter } from "../components/GithubStarcounter"

const blocks = [
  {
    title: "Place any cell anywhere",
    caption:
      "ReactGrid is fully customizable and extensible. You can literally place any cell type anywhere in the grid",
  },
  {
    title: "Optimized for touch devices",
    caption:
      "ReactGrid gives the same experience to you no matter if you work on desktop or mobile devices",
  },
  {
    title: "Open sourced and MIT licensed",
    caption:
      "ReactGrid is free for personal and commercial use under the MIT license",
  },
]

class Index extends React.Component<PageProps<any>, {}> {
  componentDidMount() {
    document.body.classList.add("reset-page")
  }
  componentWillUnmount() {
    document.body.classList.remove("reset-page")
  }
  render() {
    const { data } = this.props
    const { title, description, pages, social } = data.site.siteMetadata
    const githubSocial = social.find((social) => social.title === "Github")
    // const demoPage = pages.find(page => page.id === 'examples');
    // const docsVersion = docsVersions.find(version => versions.active);
    // const docsPage = pages.find(page => page.id === 'docs');
    // const usps = data.allUspsYaml.edges;
    // const npmSocial = social.find(social => social.title === 'npm');

    return (
      <Layout
        pages={pages}
        social={social}
        description={description}
        title={title}
      >
        <SEO
          title={title}
          bookmarkTitlePrefix={title}
          bookmarkTitleSuffix={`Spreadsheet experience for your React app`}
          description={`ReactGrid is a component for displaying and editing data in a spreadsheet-like way. Our Community version is free and open source, or you can take a 1 month trial of ReactGrid PRO.`}
        />
        <div className="wrapper" ref="wrapper">
          <div className="d-none d-md-block space-50"></div>
          <Container className="pb-5">
            <Row>
              <Col
                className="mr-auto text-left align-items-center"
                md="12"
                lg="7"
              >
                <h1 className="title display-1 mb-5 text-primary page-title">
                  Spreadsheet experience for your React app.
                </h1>

                <p className="em-xxs font-weight-light pb-3">
                  ReactGrid is an open-source React component for displaying and
                  editing data in a spreadsheet-like way.
                </p>

                <div
                  className="d-flex align-items-center flex-wrap"
                  style={{ gap: "1rem" }}
                >
                  <a href={githubSocial.url} target="_blank">
                    <Button
                      type="button"
                      color="primary"
                      className="px-5 py-3"
                      style={{ fontSize: "1.3em" }}
                    >
                      Check on Github
                    </Button>
                  </a>

                  <GithubStarcounter githubUrl={githubSocial.url} />
                </div>
              </Col>
              <Col
                className="ml-auto mt-5 mt-ml-0 d-flex align-items-center justify-content-center"
                md="12"
                lg="5"
              >
                <video
                  controls
                  autoPlay
                  loop
                  poster={SamplePoster}
                  style={{
                    maxWidth: "500px",
                    width: "100%",
                    boxShadow: "#787878 0px 0px 10px -3px",
                  }}
                >
                  <source src={Video} type="video/mp4" />
                  <track kind="captions" />
                </video>
              </Col>
            </Row>
          </Container>
        </div>

        <Container>
          <Row className="pb-5">
            {blocks.map((block, idx) => (
              <Col
                xs="12"
                md="4"
                style={{ gap: "2rem" }}
                className="d-flex flex-column"
              >
                <Card
                  className="p-3 bg-primary-light"
                  style={{ height: "100%" }}
                  key={idx}
                >
                  <h4 className="mb-4">{block.title}</h4>

                  <p className="pb-3 mb-1">{block.caption}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default Index

/* const USP = ({ number, header, description, features, graphics }) => {
  return (
    <Col md="12" className="py-md-5">
      <Row className="d-flex flex-column flex-md-row text-center text-md-left align-items-center">
        <Col md="2" lg="2">
          <h4 className="text-muted display-1 text-center text-md-right text-bold pb-4 mb-md-0 pb-md-0" style={{ fontSize: '6em' }}>{number}</h4>
        </Col>
        <Col md="4" lg="4">
          {graphics && <div style={{ fontSize: '1em' }} className="d-flex align-items-center justify-content-center pb-5 pb-md-0" dangerouslySetInnerHTML={{ __html: graphics }}>
          </div>}
        </Col>
        <Col>
          <h3>{header}</h3>
          <p className="description">{description}</p>
          {features && <ul className="list-style-none text-left pl-0 ">
            {features.map(item => <li key={item} className="d-flex flex-row"><i className="tim-icons icon-check-2 text-success pr-2 pt-1"></i>{item}</li>)}
          </ul>}
        </Col>
      </Row>
      <hr className="line-primary mx-auto d-md-none" />
    </Col>
  )
} */

export const pageQuery = graphql`
  query {
    site {
      ...SiteMetadata
    }
    allUspsYaml {
      edges {
        node {
          number
          header
          features
          description
          graphics
        }
      }
    }
  }
`
