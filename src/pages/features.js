import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { 
  Container,
  Row,
  Col,
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

    const features = [
      {
        imgSrc: demoGIF,
        imgAlt: 'Animation for multi user capability feature',
        title: 'Multi user capability',
        description: '',
        externalLinkText: 'Try out on codepen.io',
        externalLink: 'https://codepen.io/'
      },
      {
        imgSrc: demoGIF,
        imgAlt: '',
        title: 'Optimized for Touch devices',
        description: '',
        externalLinkText: 'Try out on codepen.io',
        externalLink: 'https://codepen.io/'
      },
      {
        imgSrc: demoGIF,
        imgAlt: '',
        title: 'Custom cell types',
        description: '',
        externalLinkText: 'Try out on codepen.io',
        externalLink: 'https://codepen.io/'
      },
      {
        imgSrc: demoGIF,
        imgAlt: '',
        title: 'Fill handle',
        description: '',
        externalLinkText: 'Try out on codepen.io',
        externalLink: 'https://codepen.io/'
      },
      {
        imgSrc: demoGIF,
        imgAlt: '',
        title: 'Custom cell types',
        description: '',
        externalLinkText: 'Try out on codepen.io',
        externalLink: 'https://codepen.io/'
      },
      {
        imgSrc: demoGIF,
        imgAlt: '',
        title: 'Resize / reorder',
        description: '',
        externalLinkText: 'Try out on codepen.io',
        externalLink: 'https://codepen.io/'
      },
      {
        imgSrc: demoGIF,
        imgAlt: '',
        title: 'Copy, Cut, Paste',
        description: '',
        externalLinkText: 'Try out on codepen.io',
        externalLink: 'https://codepen.io/'
      },
      {
        imgSrc: demoGIF,
        imgAlt: '',
        title: 'Additional features',
        description: '',
        externalLinkText: 'Try out on codepen.io',
        externalLink: 'https://codepen.io/'
      },
    ]
    return (
      <Layout location={this.props.location} pages={pages} social={social} description={description} title={title}>
        <SEO title={title} />
        {/* <Header header={headerTitle} description={headerDescription}/> */}
        <div className="section">
          <div className="space-50"></div>
          <Container>
            {features.map(item => <SingleFeature key={item.title} {...item}/>)}
          </Container>
        </div>
      </Layout>
    )
  }
}

export default Features

const SingleFeature = ({imgSrc, imgAlt, title, description, externalLinkText, externalLink}) => {
  return (
    <div className="single-feature my-lg-5 py-lg-5">
      <Row>
        <Col xs={12} lg={5} className="single-feature-col-img">
          <FeatureImage imgSrc={imgSrc} imgAlt={imgAlt} />
        </Col>
        <Col className="single-feature-col-gap col-0 col-lg-2"></Col>
        <Col xs={12} lg={5} className="single-feature-col-desc d-flex align-items-center">
          <div className="feature-description flex-column d-flex mt-4">
            <h3 className="profile-title text-left mb-3">{title}</h3>
            <p className="description pb-3">{description}</p>
            <div>
              <a className="btn-info btn-link pl-0" target="_blank" rel="noopener noreferrer" href={externalLink}>{externalLinkText}</a>
            </div>
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
