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
import demoGIF from "../assets/img/demo.gif";


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
        {/* header */}
        <div className="wrapper" ref="wrapper">
          <div className="page-header">
            <div className="squares square1" />
            <div className="squares square2" />
            <div className="squares square3" />
            <div className="squares square4" />
            <div className="squares square5" />
            <div className="page-header-image" />
            <Container>
              <Row>
                <Col className="mr-auto text-left mt-5" lg="5" md="7">
                  <h6 className="category">A brand new approach to old known solutions</h6>
                  <h1 className="title">
                    <span className="text-danger">ReactGrid</span>
                  </h1>
                  <h3 className="title">Hightly customizable spreadsheet grid built on React</h3>
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
                    <img alt="Demo animation" src={demoGIF}/>
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
                  description
                </p>
                <Button className="mt-3" color="primary" to={pages[2].route} tag={Link} onClick={e => e.preventDefault()}>
                  Check all features<i className="tim-icons icon-double-right"/>
                </Button>
              </Col>
              <Col className="p-sm-0" lg="8">
                <Row>
                  <Col md="6">
                    <div className="info info-success">
                      <div className="icon icon-white">
                        <i className="tim-icons icon-satisfied" />
                      </div>
                      <h4 className="info-title">Super fast</h4>
                      <p className="description">
                        Fill and modify ReactGrid simultaneusly with thousands of records without any lag.
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
                        You decide how to present your data and interact with them due to simple API.
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
                      <h4 className="info-title">A perfect foundation</h4>
                      <p className="description">
                        Create yor own app and adjust it to your personal needs in easy way. 
                      </p>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="info info-info">
                      <div className="icon icon-white">
                        <i className="tim-icons icon-bulb-63" />
                      </div>
                      <h4 className="info-title">Continously improved</h4>
                      <p className="description">
                        ReactGrid is constantly improved by out dev to provide new features and functionality improvements.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        {/*  END features */}
        <div className="section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center mt-4" md="8">
                <h2 className="title">Curious yet?</h2>
                <h4 className="description mb-5">
                  Dive in setup tutorial right now and develop your first ReactGrid application!
                </h4>
                <Button color="success"size="lg">
                  Get started <i className="tim-icons icon-double-right" />
                </Button>
              </Col>
            </Row>
          </Container>
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
