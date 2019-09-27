import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Header from "../components/Header"

import { 
  Container,
  Row,
  Col, 
  // Button
} from "reactstrap";

import demoGIF from "../assets/img/demo.gif";

class Features extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }
  render() {
    const { data } = this.props
    const { title, description, pages, social } = data.site.siteMetadata;

    // const headerTitle = <h1 className="title">Features</h1>;
    // const headerDescription = (
    //   <p className="description">Available ReactGrid options</p>
    // );
    return (
      <Layout location={this.props.location} pages={pages} social={social} description={description} title={title}>
        <SEO title={title} />
        {/* <Header header={headerTitle} description={headerDescription}/> */}
        <div className="section">
          <div className="space-50"></div>
          <Container>
            <SingleFeature imgSrc={demoGIF} imgAlt={''}>
              <h3 className="profile-title text-left mb-3">Feature title</h3>
              <p className="description pb-3">We aim high at being focused on building relationships with our clients and community. Using our creative gifts drives this foundation.</p>
              <div>
                <a className="btn-info btn-link pl-0" target="_blank" rel="noopener noreferrer" href="https://codepen.io/">
                  Try out on codepen.io
                </a>
              </div>
            </SingleFeature>
            <SingleFeature imgSrc={demoGIF} imgAlt={''}>
              <h3 className="profile-title text-left mb-3">Feature title</h3>
              <p className="description pb-3">We aim high at being focused on building relationships with our clients and community. Using our creative gifts drives this foundation.</p>
              <div>
                <a className="btn-info btn-link pl-0" target="_blank" rel="noopener noreferrer" href="https://codepen.io/">
                  Try out on codepen.io
                </a>
              </div>
            </SingleFeature>
            <SingleFeature imgSrc={demoGIF} imgAlt={''}>
              <h3 className="profile-title text-left mb-3">Feature title</h3>
              <p className="description pb-3">We aim high at being focused on building relationships with our clients and community. Using our creative gifts drives this foundation.</p>
              <div>
                <a className="btn-info btn-link pl-0" target="_blank" rel="noopener noreferrer" href="https://codepen.io/">
                  Try out on codepen.io
                </a>
              </div>
            </SingleFeature>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default Features

const SingleFeature = ({imgSrc, imgAlt, children}) => {
  return (
    <div className="single-feature my-lg-5 py-lg-5">
      <Row>
        <Col xs={12} lg={5} className="single-feature-col-img">
          <FeatureImage imgSrc={imgSrc} imgAlt={imgAlt} />
        </Col>
        <Col className="single-feature-col-gap col-0 col-lg-2"></Col>
        <Col xs={12} lg={5} className="single-feature-col-desc d-flex align-items-center">
          <div className="feature-description flex-column d-flex mt-4">
            {children}
          </div>
        </Col>
      </Row>
      <hr className="line-success my-5 d-lg-none" />
    </div>
  )
}

const FeatureImage = ({imgSrc, imgAlt}) => {
  return (
    <div className="d-flex align-items-center justify-content-center h-100 px-5 px-lg-0">
        <img alt={imgAlt} src={imgSrc}/>
    </div>
  )
}

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
