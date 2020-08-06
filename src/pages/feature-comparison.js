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
} from "reactstrap";


// const mitCardFeatures = [
//   'Multiple applications',
//   'Public use',
//   'Community support',
//   'Free updates',
//   'Source available',
//   'MIT features',
// ];

// const proCardFeatures = [
//   'Multiple applications',
//   'Public use',
//   '12 months of support',
//   'Free product updates',
//   'Pro features',
//   'Set up assistance',
// ];

const Times = () => <i className="fas fa-times text-warning fa-lg"></i>;

const Check = () => <i className="fas fa-check text-primary fa-lg"></i>;

// const featureComparisons = [
//   { text: 'Spreadsheet-like behaviour', pro: <Check />, mit: <Check /> },
// ];

const featureComparisons = [
  { text: 'Spreadsheet-like behaviour', pro: <Check />, mit: <Check /> },
  { text: 'Focusing cell', pro: <Check />, mit: <Check /> },
  { text: 'Highlights', pro: <Check />, mit: <Check /> },
  { text: 'Sticky rows and columns', pro: <>All edges <i className="far fa-square fa-lg"></i></>, mit: <>Top and left edge <i className="fas fa-border-style fa-lg"></i></> },
  { text: 'Custom cell templates', pro: <Check />, mit: <Check /> },
  { text: 'Keyboard actions', pro: <Check />, mit: <Check /> },
  { text: 'Copy/cut/paste single cell', pro: <Check />, mit: <Check /> },
  { text: 'Copy/cut/paste multiple cells', pro: <Check />, mit: <Times /> },
  { text: 'Fill handle', pro: <Check />, mit: <Times /> },
  { text: 'Column resize', pro: <Check />, mit: <Times /> },
  { text: 'Row and column reorder', pro: <Check />, mit: <Times /> },
  { text: 'Multiple range selections', pro: <Check />, mit: <Times /> },
  { text: 'Context menu', pro: <Check />, mit: <Times /> },
  { text: 'SASS styling', pro: <Check />, mit: <Check /> },
  { text: 'Virtual scrolling', pro: <Check />, mit: <Check /> },
  { text: 'Native sticky panes behaviour', pro: <Check />, mit: <Check /> },
  { text: 'i18n options', pro: <Check />, mit: <Check /> },
  { text: 'Optimized for touch devices', pro: <Check />, mit: <Check /> },
];

class FeatureComparison extends React.Component {

  componentDidMount() {
    if (!isBrowserIE()) {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }

  render() {
    const { data } = this.props;
    const { title, description, pages, social } = data.site.siteMetadata;
    const githubSocial = social.find(social => social.title === 'Github');
    return (
      <Layout location={this.props.location} pages={pages} social={social} description={description} title={title}>
        <SEO title={title} />
        <div className="section mt-5 mt-md-0">
          <div className="space-70"></div>
          <h2 style={{ fontSize: '3em' }} className="text-center mb-3">Feature comparison</h2>
          <div className="space-70"></div>
          <Container>
            <Row>
              <Col sm={'12'}>
                <Table className='feature-comparison-table'>
                  <thead style={{ borderTopColor: 'transparent' }}>
                    <tr >
                      <th scope="row"> </th>
                      <th className='text-center bg-primary bordered font-weight-bold'><h3 className='mb-0 text-white card-title'>PRO version</h3></th>
                      <th className='text-center bg-white bordered font-weight-bold'><h3 className='mb-0 card-title'>MIT version</h3></th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...featureComparisons].map((feature, idx) => <FeatureComparisonRow key={idx} text={feature.text} inPro={feature.pro} inMit={feature.mit} />)}
                    <tr>
                      <th scope="row"> </th>
                      <td className='text-center'>
                        <a href="mailto:reactgrid@silevis.com">
                          <Button type="button" className="btn btn-primary px-4 py-2 text-uppercase">Ask for price</Button>
                        </a>
                      </td>
                      <td className='text-center'>
                        <Link to={githubSocial.url} target="_blank">
                          <Button type="button" className="btn btn-primary btn-simple px-4 py-2 text-uppercase">Check on Github</Button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
          {/* <div className="space-70"></div>
          <div className='w-100 position-relative' style={{ minHeight: '600px', }}>
            <div className='bg-primary position-absolute w-100' style={{ height: '350px', top: 0 }}></div>
            <Container>
              <h3 className='p-5 m-0 position-relative text-center text-white font-weight-bold' style={{ zIndex: 0 }}>
                ReactGrid is free with limited functionality. <br /> For more advanced usage we also offer PRO release.
              </h3>
              <Row>
                <Col sm={12} md={6} lg={{ size: 4, push: 1, offset: 1 }}>
                  <FeaturesCard title={'MIT'} features={[...mitCardFeatures]} btnText={'Get it now'} />
                </Col>
                <Col sm={12} md={6} lg={{ offset: 2, size: 4, }}>
                  <FeaturesCard title={'PRO'} features={[...proCardFeatures]} btnText={'Ask for price'} />
                </Col>
              </Row>
            </Container>
          </div> */}
        </div>
      </Layout>
    )
  }
}

/* const FeaturesCard = ({ title, features, btnText }) => {
  return (
    <Card className="card-pricing bg-white card-plain ca">
      <CardHeader><h2 className="title">{title}</h2></CardHeader>
      <CardBody>
        <ul>
          {features.map((feature, idx) => <li className='py-2' key={idx}><h4 className='m-0'>{feature}</h4></li>)}
        </ul>
        <Button className="mt-4" color="primary" > {btnText} </Button>
      </CardBody>
    </Card>
  )
} */

const FeatureComparisonRow = ({ text, inPro, inMit }) => {
  return (
    <tr className='bordered'>
      <th scope="row" className='bg-white'>{text}</th>
      <td className='text-center bordered bg-primary-light '>{inPro}</td>
      <td className='text-center bordered bg-white'>{inMit}</td>
    </tr>
  )
}

export default FeatureComparison;

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
