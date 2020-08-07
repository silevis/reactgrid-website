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
} from "reactstrap";



const Times = () => <i className="fas fa-times text-warning fa-lg"></i>;

const Check = () => <i className="fas fa-check text-primary fa-lg"></i>;

const whatsIncluded = [
  { text: 'Support', pro: 'Priority support', mit: 'Community' },
  { text: 'Support', pro: <Check />, mit: <Check /> },
  { text: 'Free updates', pro: <Check />, mit: <Check /> },
  { text: 'Implementation assistance', pro: <Check />, mit: <Times /> },
];

const featureComparisons = [
  { text: 'Spreadsheet-like behaviour', pro: <Check />, mit: <Check /> },
  { text: 'Focusing cell', pro: <Check />, mit: <Check /> },
  { text: 'Highlights', pro: <Check />, mit: <Check /> },
  {
    text: 'Sticky rows and columns',
    pro: <span className='d-flex align-items-center justify-content-center'><span className='pr-2'>All edges</span> <i className="far fa-square fa-lg"></i></span>,
    mit: <span className='d-flex align-items-center justify-content-center'><span className='pr-2'>Top and left edge</span><i className="fas fa-border-style fa-lg"></i></span>
  },
  { text: 'Custom cell templates', pro: <Check />, mit: <Check /> },
  { text: 'Keyboard shortcuts', pro: <Check />, mit: <Check /> },
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
                      <th scope="row" > </th>
                      <th className='text-center bg-primary bordered font-weight-bold'><h3 className='mb-0 text-white card-title'>PRO version</h3></th>
                      <th className='text-center bg-white bordered font-weight-bold'><h3 className='mb-0 card-title'>MIT version</h3></th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableHeaderRow text='What is included / What you get?' />
                    {[...whatsIncluded].map((feature, idx) => <FeatureComparisonRow key={idx} text={feature.text} inPro={feature.pro} inMit={feature.mit} />)}
                    <TableHeaderRow text='Features' />
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

const TableHeaderRow = ({ text }) => <tr><th scope="row" colSpan={3} className='text-center bordered bg-white py-3'><span className='h4'>{text}</span></th></tr>;

const FeatureComparisonRow = ({ text, inPro, inMit }) => {
  return (
    <tr className='bordered h6'>
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
