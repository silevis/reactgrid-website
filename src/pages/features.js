import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"

import { 
  Container,
  Row,
  Col, 
  Button
} from "reactstrap";

import demoGIF from "../assets/img/demo.gif";
import blob from "../assets/img/path2.png";

class Features extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }
  render() {
    const { data } = this.props
    const { title, description, pages, social } = data.site.siteMetadata;

    const headerTitle = <h1 className="title">Features</h1>;
    const headerDescription = (
      <p className="description">Available ReactGrid options</p>
    );
    return (
      <Layout location={this.props.location} pages={pages} social={social} description={description} title={title}>
        <SEO title={title} />
        <Header header={headerTitle} description={headerDescription}/>
        <div className="section">
          <img alt="blob" className="path" src={blob} />
          <Container>
            <SingleFeature imgSrc={demoGIF} imgAlt={''}>
              <h3 class="profile-title text-left">Feature title</h3>
              <p class="description">We aim high at being focused on building relationships with our clients and community. Using our creative gifts drives this foundation.</p>
              <div>
                <Button className="btn-lg btn-info btn-simple mt-3 px-4" size="lg" target="_blank" rel="noopener noreferrer" href="https://codepen.io/">
                  Try out on codepen.io{'  '}<i class="fab fa-codepen text-white"></i>
                </Button>
              </div>
            </SingleFeature>
            <SingleFeature imgSrc={demoGIF} imgAlt={''}>
              <h3 class="profile-title text-left">Feature title</h3>
              <p class="description">We aim high at being focused on building relationships with our clients and community. Using our creative gifts drives this foundation.</p>
              <div>
                <Button className="btn-lg btn-info btn-simple mt-3 px-4" size="lg" target="_blank" rel="noopener noreferrer" href="https://codepen.io/">
                  Try out on codepen.io{'  '}<i class="fab fa-codepen text-white"></i>
                </Button>
              </div>
            </SingleFeature>
            <SingleFeature imgSrc={demoGIF} imgAlt={''}>
              <h3 class="profile-title text-left">Feature title</h3>
              <p class="description">We aim high at being focused on building relationships with our clients and community. Using our creative gifts drives this foundation.</p>
              <div>
                <Button className="btn-lg btn-info btn-simple mt-3 px-4" size="lg" target="_blank" rel="noopener noreferrer" href="https://codepen.io/">
                  Try out on codepen.io{'  '}<i class="fab fa-codepen text-white"></i>
                </Button>
              </div>
            </SingleFeature>
            <SingleFeature imgSrc={demoGIF} imgAlt={''}>
              <h3 class="profile-title text-left">Feature title</h3>
              <p class="description">We aim high at being focused on building relationships with our clients and community. Using our creative gifts drives this foundation.</p>
              <div>
                <Button className="btn-lg btn-info btn-simple mt-3 px-4" size="lg" target="_blank" rel="noopener noreferrer" href="https://codepen.io/">
                  Try out on codepen.io{'  '}<i class="fab fa-codepen text-white"></i>
                </Button>
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
    <div className="single-feature mb-5">
      <Row>
        <Col xs={12} lg={5} className="single-feature-col-img">
          <FeatureImage imgSrc={imgSrc} imgAlt={imgAlt} />
        </Col>
        <Col xs={12} lg={7} className="single-feature-col-desc d-flex align-items-center">
          <div className="feature-description flex-column d-flex mt-4">
            {children}
          </div>
        </Col>
      </Row> 
    </div>
  )
}

const FeatureImage = ({imgSrc, imgAlt}) => {
  return (
    <div className="iframe-container d-flex align-items-center h-100">
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
