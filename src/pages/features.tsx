import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { isBrowserIE } from "../functions/isBrowserIE";
import {
  Container,
  Row,
  Col,
} from "reactstrap";

class Features extends React.Component<any, PageProps> {
  componentDidMount() {
    if (!isBrowserIE()) {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }
  render() {
    const { data } = this.props;
    const { title, description, pages, social } = data.site.siteMetadata;
    const features = data.allFeaturesYaml.edges;
    return (
      <Layout pages={pages} social={social} description={description} title={title}>
        <SEO
          title={'Features'}
          description={`ReactGrid is a feature rich spreadsheet-like datagrid available in Open Source or PRO versions. They're all there for one reason - to make your application goals a reality.`}
        />
        <div className="section mt-5 mt-md-0">
          <div className="space-50"></div>
          <h2 style={{ fontSize: '3em' }} className="profile-title text-center mb-3">Features</h2>
          <Container>
            {features.map(item => <SingleFeature key={item.node.title} {...item.node} />)}
            <Row className="py-lg-5">
              <Col sm="6" lg="6">
                <div className="text-center">
                  <div style={{ fontSize: '5em' }} className="mb-4"><i className="fab fa-sass text-primary strokeme"></i></div>
                  <h3 className="pb-3">SASS styling</h3>
                  <p className="pb-3">Feel free to customly style each element of grid using SASS</p>
                </div>
              </Col>
              <Col sm="6" lg="6">
                <div className="text-center">
                  <div style={{ fontSize: '5em' }} className="mb-4">
                    <i className="fas fa-palette strokeme text-primary">
                      <i className="fas fa-paint-brush strokeme text-primary" style={{ marginLeft: '-0.3em' }}></i>
                    </i>
                  </div>
                  <h3 className="pb-3">Custom cell templates</h3>
                  <p className="pb-3">Add your own custom cell (custom cell behaviors, styles, data formatting and validating)</p>
                </div>
              </Col>
              <Col sm="6" lg="6">
                <div className="text-center">
                  <div style={{ fontSize: '5em' }} className="mb-4">
                    <i className="fab fa-firefox text-primary strokeme ">
                      <i className="fa-inverse fab fa-edge text-primary strokeme" style={{ marginLeft: '-0.1em' }}>
                        <i className="fa-inverse fab fa-safari text-primary strokeme" style={{ marginLeft: '-0.1em' }}>
                          <i className="fa-inverse fab fa-chrome text-primary strokeme" style={{ marginLeft: '-0.1em' }}></i>
                        </i>
                      </i>
                    </i>
                  </div>
                  <h3 className="pb-3">Cross-browser support</h3>
                  <p className="pb-3">ReactGrid performs efficiently in all modern browsers</p>
                </div>
              </Col>
              <Col sm="6" lg="6">
                <div className="text-center">
                  <div style={{ fontSize: '5em' }} className="mb-4"><i className="fas fa-layer-group text-primary strokeme"></i></div>
                  <h3 className="pb-3">Tree data</h3>
                  <p className="pb-3">You can easily display data that has parent/child relationships</p>
                </div>
              </Col>
            </Row>
          </Container>

        </div>
      </Layout>
    )
  }
}

export default Features

const SingleFeature = ({ mediaSrc, imgAlt, title, description, externalLinkText, externalLink, docsVersion }) => {
  return (
    <div className="single-feature my-lg-5 py-lg-5">
      <Row>
        <Col xs={12} lg={5} className="single-feature-col-img">
          <FeatureImage mediaSrc={mediaSrc} imgAlt={imgAlt} />
        </Col>
        <Col className="single-feature-col-gap col-0 col-lg-2"></Col>
        <Col xs={12} lg={5} className="single-feature-col-desc d-flex align-items-center">
          <div className="feature-description flex-column d-flex mt-4 w-100">
            <div className="w-100">
              <h2 className="profile-title text-left mb-4 text-wrap">{title}</h2>
              <p className="description pb-3">{description}</p>
              {externalLink && externalLinkText &&
                <div>
                  <a className="btn-info btn-link pl-0" target="_blank" rel="noopener noreferrer" href={externalLink}>{externalLinkText}</a>
                </div>
              }
            </div>
          </div>
        </Col>
      </Row>
      <hr className="line-primary my-5 d-lg-none ml-auto" />
    </div>
  )
}

const FeatureImage = ({ mediaSrc, imgAlt }) => {
  return (
    <div className="d-flex align-items-center justify-content-center h-100 px-5 px-lg-0">
      <div className="w-100">
        <video controls loop autoPlay poster={require(`./../../content/features/${mediaSrc}.jpg`)} className='feature-video'>
          <source src={require(`./../../content/features/${mediaSrc}.mp4`)} type="video/mp4" />
          <track kind="captions" />
        </video>
      </div>
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
          active
        }
        social {
          description
          fontAwesomeIcon
          title
          url
          active
        }
      }
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
