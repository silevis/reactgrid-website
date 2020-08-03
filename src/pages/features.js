import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { isBrowserIE } from "../components/isBrowserIE";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
} from "reactstrap";

class Features extends React.Component {
  componentDidMount() {
    if (!isBrowserIE()) {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }
  render() {
    const { data } = this.props
    const { title, description, pages, social } = data.site.siteMetadata;
    const features = data.allFeaturesYaml.edges;
    return (
      <Layout location={this.props.location} pages={pages} social={social} description={description} title={title}>
        <SEO title={title} />
        <div className="section mt-5 mt-md-0">
          <div className="space-70"></div>
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
                  <p className="pb-3">ReactGrid performs great in all modern browsers and has backward compatibility</p>
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

          <div className="space-70"></div>
          <h2 style={{ fontSize: '3em' }} className="text-center mb-3">Feature comparison</h2>
          <div className="space-70"></div>
          <Container>
            <Row>
              <Col sm={'12'}>
                <Table className='feature-comparison-table'>
                  <thead style={{ borderTopColor: 'transparent' }}>
                    <tr >
                      <th scope="row"></th>
                      <th className='text-center bg-primary bordered font-weight-bold '><h3 className='text-white card-title'>PRO version</h3></th>
                      <th className='text-center bg-white bordered font-weight-bold'><h3 className='card-title'>MIT version</h3></th>
                    </tr>
                  </thead>
                  <tbody>
                    <FeatureComparisonRow text='Spreadsheet-like behaviour' inPro={<Times />} inMit={<Check />} />
                    <FeatureComparisonRow text='Spreadsheet-like behaviour' inPro={'jest w pyte'} inMit={'nie ma takiego bicia synek'} />
                    <FeatureComparisonRow text='Spreadsheet-like behaviour' inPro={'jest w pyte'} inMit={'nie ma takiego bicia synek'} />
                    <tr>
                      <th scope="row"></th>
                      <td className='text-center'>
                        <Link href={''} target="_blank">
                          <Button type="button" className="btn btn-primary px-4 py-2 text-uppercase">get it now</Button>
                        </Link>
                      </td>
                      <td className='text-center'>
                        <Link href={''} target="_blank">
                          <Button type="button" className="btn btn-primary btn-simple px-4 py-2 text-uppercase">download now</Button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
          <div className="space-70"></div>
          <div className='w-100 position-relative' style={{ minHeight: '500px', }}>
            {/* <div className='bg-primary position-absolute w-100' style={{ height: '300px', top: 0 }}></div> */}

            <Container>
              <h4 className='px-5 text-center'>
                Reacgrid Link href= target="_blank"> Link lorem ....
              </h4>

              <Row>
                <Col md={6} sm={12} lg={{ size: 4 }}>
                  CARD
                </Col>
                <Col md={6} sm={12} lg={{ offset: 4, size: 4 }}>

                  <Card className="card-pricing card-plain ca">
                    <CardHeader>
                      <h2 className="title">MIT</h2>
                    </CardHeader>
                    <CardBody>
                      <ul>
                        <li>
                          10.000  MB
                        </li>
                        <li>
                          10.000  MB
                        </li>
                      </ul>
                      <Button
                        className="mt-4"
                        color="primary"
                      >
                        Get it Now
                      </Button>
                    </CardBody>
                  </Card>

                </Col>
              </Row>

            </Container>

          </div>

        </div>
      </Layout>
    )
  }
}

const Times = () => <i class="fas fa-times text-warning fa-2x"></i>;

const Check = () => <i class="fas fa-check text-primary fa-2x"></i>;

const FeatureComparisonRow = ({ text, inPro, inMit }) => {
  return (
    <tr className='bordered'>
      <th scope="row" className='bg-white'>{text}</th>
      <td className='text-center bordered bg-primary-light '>{inPro}</td>
      <td className='text-center bordered bg-white'>{inMit}</td>
    </tr>
  )
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
              <h2 className="profile-title text-left mb-4">{title}</h2>
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
        <video controls loop autoPlay poster={require(`./../../content/features/${mediaSrc}.jpg`)}
          style={{ boxShadow: 'rgb(120, 120, 120) 0px 0px 10px -3px', maxWidth: '100%', maxHeight: '500px' }} >
          <source alt={imgAlt} src={require(`./../../content/features/${mediaSrc}.mp4`)} type="video/mp4" />
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
