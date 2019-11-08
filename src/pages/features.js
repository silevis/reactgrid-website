import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  Container,
  Row,
  Col,
} from "reactstrap";

class Features extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }
  render() {
    const { data } = this.props
    const { title, description, pages, social } = data.site.siteMetadata;
    const features = data.allFeaturesYaml.edges;
    return (
      <Layout location={this.props.location} pages={pages} social={social} description={description} title={title}>
        <SEO title={title} />
        <div className="section">
          <Container>
            {features.map(item => <SingleFeature key={item.node.title} {...item.node} />)}
            <Row className=" py-lg-5">
              <Col>
                <div className="text-center">
                  <div style={{ fontSize: '5em' }} className="mb-4"><i className="fas fa-align-left text-success"></i></div>
                  <h3 className="pb-3">Tree data</h3>
                  <p className="pb-3">You can easily display data that has parent/child relationships</p>
                </div>
              </Col>
              <Col>
                <div className="text-center">
                  <div style={{ fontSize: '5em' }} className="mb-4"><i className="fab fa-sass text-success"></i></div>
                  <h3 className="pb-3">SASS styling support</h3>
                  <p className="pb-3">Feel free to customly style each element of grid using SASS</p>
                </div>
              </Col>

              <Col>
                <div className="text-center">
                  <div style={{ fontSize: '5em' }} className="mb-4">
                    <i className="fas fa-border-all">
                      <i className="fas fa-pencil-alt text-success"></i>
                    </i>
                  </div>
                  <h3 className="pb-3">Custom cell types</h3>
                  <p className="pb-3">Ability to add your own custom cell templates (custom cell behaviours, styles, data formatting and validating)</p>
                </div>
              </Col>
              <Col>
                <div className="text-center">
                  <div style={{ fontSize: '5em' }} className="mb-4">
                    <i className="fab fa-firefox text-success">
                      <i className="fa-inverse fab fa-safari text-danger" style={{ marginLeft: '-0.3em' }}>
                        <i className="fa-inverse fab  fa-internet-explorer text-info" style={{ marginLeft: '-0.3em' }}></i>
                      </i>
                    </i>
                  </div>
                  <h3 className="pb-3">Cross-browser support</h3>
                  <p className="pb-3">Reactgrid performs great in all modern browsers and has backward compatibility</p>
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

const SingleFeature = ({ imgSrc, imgAlt, title, description, externalLinkText, externalLink }) => {
  return (
    <div className="single-feature my-lg-5 py-lg-5">
      <Row>
        <Col xs={12} lg={5} className="single-feature-col-img">
          <FeatureImage imgSrc={require(`./../../content/features/${imgSrc.name + imgSrc.ext}`)} imgAlt={imgAlt} />
        </Col>
        <Col className="single-feature-col-gap col-0 col-lg-2"></Col>
        <Col xs={12} lg={5} className="single-feature-col-desc d-flex align-items-center">
          <div className="feature-description flex-column d-flex mt-4">
            <h3 className="profile-title text-left mb-3">{title}</h3>
            <p className="description pb-3">{description}</p>
            {externalLink && externalLinkText &&
              <div>
                <a className="btn-info btn-link pl-0" target="_blank" rel="noopener noreferrer" href={externalLink}>{externalLinkText}</a>
              </div>
            }
          </div>
        </Col>
      </Row>
      <hr className="line-success my-5 d-lg-none" />
    </div>
  )
}

const FeatureImage = ({ imgSrc, imgAlt }) => {
  return (
    <div className="d-flex align-items-center justify-content-center h-100 px-5 px-lg-0">
      <img alt={imgAlt} src={imgSrc} style={{ boxShadow: '0px 0px 8px rgb(0, 0, 0)' }} />
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
    allFeaturesYaml {
      edges {
        node {
          title
          externalLink
          externalLinkText
          description
          imgAlt
          imgSrc {
            name
            ext
          }
        }
      }
    }
  }
`
