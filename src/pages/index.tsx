import React from "react"
import { graphql, Link, PageProps } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
import SamplePoster from "../assets/img/sample.png";
import Video from "../assets/video/sample.mp4";


class Index extends React.Component<PageProps<any>, {}> {
  componentDidMount() {
    document.body.classList.add("reset-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("reset-page");
  }
  render() {
    const { data } = this.props;
    const { title, description, pages, social } = data.site.siteMetadata;
    // const demoPage = pages.find(page => page.id === 'examples');
    // const docsVersion = docsVersions.find(version => version.active);
    const featuresComparisonPage = pages.find(page => page.id === 'feature-comparison');
    // const docsPage = pages.find(page => page.id === 'docs');
    // const usps = data.allUspsYaml.edges;
    // const npmSocial = social.find(social => social.title === 'npm');
    // const githubSocial = social.find(social => social.title === 'Github');

    return (
      <Layout pages={pages} social={social} description={description} title={title}>
        <SEO title={title} />
        <div className="wrapper" ref="wrapper">
          <div className="d-none d-md-block space-50"></div>
          <Container className="pb-5">
            <Row>
              <Col className="mr-auto text-left align-items-center" md="12" lg="7" >
                <h1 className="title display-1 mb-5 text-primary page-title">
                  Spreadsheet experience for your React app.
                </h1>
                <p className="em-xxs font-weight-light pb-3">
                  ReactGrid is a component for displaying and editing data in a spreadsheet-like way.
                </p>
                <p className="h4 font-weight-light">
                  ReactGrid is available in two versions: MIT, which serves the full interface, but is limited in functionality
                  and PRO, which is a fully functional version. You can compare both versions <Link to={featuresComparisonPage.route}>here</Link>.
                </p>
                <Link to={featuresComparisonPage.route}>
                  <Button type="button" color='primary' className="px-5 py-3" style={{ fontSize: '1.3em' }}>Get Now</Button>
                </Link>
              </Col>
              <Col className="ml-auto mt-5 mt-md-0 d-flex align-items-center justify-content-center" md="12" lg="5" >
                <video controls autoPlay loop poster={SamplePoster} style={{ maxWidth: '500px', width: '100%', boxShadow: '#787878 0px 0px 10px -3px' }}>
                  <source src={Video} type="video/mp4" />
                  <track kind="captions" />
                </video>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row className="align-items-center">
            <Col className="pb-5">
              <h1 className="title font-weight-normal pb-2">Why is ReactGrid unique?</h1>
              <ul className="pl-5">
                <li>
                  <h3 className="mb-1">Reactive</h3>
                  <h4 className="pb-3">
                    ReactGrid is written purely in React with reactivity in mind. Rendering happens based on state changes
                  </h4>
                </li>
                <li>
                  <h3 className="mb-1">Place any cell anywhere</h3>
                  <h4 className="pb-3">
                    ReactGrid is fully customizable and extensible. You can literally place any cell type anywhere in the grid
                  </h4>
                </li>
                <li>
                  <h3 className="mb-1">Optimized for touch devices</h3>
                  <h4 className="pb-3">
                    ReactGrid gives the same experience to you no matter if you work on desktop or mobile devices
                  </h4>
                </li>
              </ul>
              <h1 className="title font-weight-normal pb-2">ReactGrid is NOT</h1>
              <ul className="pl-5">
                <li>
                  <h3 className="mb-1">Record-based data table</h3>
                  <h4>
                    Looking for a data grid with Sorting, Filtering, Grouping and Spreadsheet-like edit modes?<br /> Check out these:
                  </h4>
                  <ul className="pb-4">
                    <li>
                      <h4 className="mb-1"><a href={'https://www.ag-grid.com/'} target="_blank" rel="noreferrer">Ag-grid</a></h4>
                    </li>
                    <li>
                      <h4 className="mb-1"><a href={'https://handsontable.com/'} target="_blank" rel="noreferrer">Handsontable</a></h4>
                    </li>
                    <li>
                      <h4 className="mb-1"><a href={'https://js.devexpress.com/'} target="_blank" rel="noreferrer">DevExtreme DataGrid</a></h4>
                    </li>
                    <li>
                      <h4 className="mb-1"><a href={'https://www.telerik.com/kendo-ui/'} target="_blank" rel="noreferrer">Telerik Kendo UI DataTable</a></h4>
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className="mb-1">Spreadsheet with formulas</h3>
                  <h4>
                    Do you need to display a fully functional spreadsheet in the browser? Have a look at &nbsp;
                    <a href={'https://demos.telerik.com/kendo-ui/spreadsheet/index'} target="_blank" rel="noreferrer">
                      Telerik Kendo UI Spreadsheet </a>or&nbsp;
                    <a href={'https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/'} target="_blank" rel="noreferrer">dhtmlxSpreadsheet</a>&nbsp;
                    which have a toolbar, coordinates and support formulas.
                  </h4>
                </li>
              </ul>
              <div className="buttons font-weight-bold text-uppercase d-flex justify-content-center">
                <Link to={featuresComparisonPage.route}>
                  <Button className="my-5 mr-3 px-3 d-inline-block btn-simple d-flex align-items-center" size='lg'>
                    <i className="fas fa-exchange-alt fa-xl pr-2"></i>Get Now
                  </Button>
                </Link>
              </div>
              <h4 className="mb-1">For support, questions and more features reach us at <a href="mailto:reactgrid@silevis.com">reactgrid@silevis.com</a></h4>
            </Col>
          </Row>
        </Container >
      </Layout>
    )
  }
}

export default Index;

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
