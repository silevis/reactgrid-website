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
// import demoGIF from "../assets/img/demo.gif";
import img from "../assets/img/img.png";


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
    // const demoPage = pages.find(page => page.id === 'examples');
    // const docsVersion = docsVersions.find(version => version.active);
    // const featuresPage = pages.find(page => page.id === 'features')
    // const docsPage = pages.find(page => page.id === 'docs');
    // const usps = data.allUspsYaml.edges;
    const npmSocial = social.find(social => social.title === 'npm');

    return (
      <Layout location={this.props.location} pages={pages} social={social} description={description} title={title}>
        <SEO title={title} />
        <div className="wrapper" ref="wrapper">
          <div className="space"></div>
          <div className=" space-50"></div>
          <Container className="mb-md-5 pb-5">
            <Row>
              <Col className="mr-auto text-left align-items-center" md="12" lg="7" >
                <h1 className="title display-1 mb-5 text-primary">
                  Spreadsheet experience for your React app.
                  </h1>
                <p className="em-xxs font-weight-light">
                  ReactGrid is a component for displaying and entering data in a spreadsheet-like way.
                </p>
              </Col>
              <Col className="ml-auto mt-5 mt-md-0 d-flex align-items-center justify-content-center" md="12" lg="5" >
                <div>
                  <img alt="Cell graphics" src={img} style={{ maxWidth: '350px' }} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row className="align-items-center">
            <Col className="pb-5">
              {/* <h1 className="title font-weight-normal pb-3">Reactivity makes the difference!</h1>
              <p className="em-xxs font-weight-light">
                ReactGrid is a component that is used for displaying data in a spreadsheet‑like way.
                Rather than other data grids it does not build the table based on the records and attributes but gives
                a reactive grid that has well‑known spreadsheet user experience on all devices.
                  <br /><br />
                While we are working on the final release, you can already use the MIT release to see how truly reactive grid works!
                </p>
              <hr className="line-primary ml-auto" /> */}
              <h1 className="title font-weight-normal pb-2">Why is ReactGrid unique?</h1>
              <ul className="pl-0">
                <li>
                  <h3 className="font-weight-bold mb-1">Reactive</h3>
                  <h4 className="pb-3">
                    ReactGrid is written purely in React with reactivity in mind. Rendering happens based on state changes
                  </h4>
                </li>
                <li>
                  <h3 className="font-weight-bold mb-1">Place any cell anywhere</h3>
                  <h4 className="pb-3">
                    ReactGrid is fully customizable and extensible. You can literally place any cell type anywhere in the grid
                  </h4>
                </li>
                <li>
                  <h3 className="font-weight-bold mb-1">Optimized for touch devices</h3>
                  <h4 className="pb-3">
                    ReactGrid gives the same experience no matter if you work on desktop or mobile devices
                  </h4>
                </li>
              </ul>
              <hr className="line-primary ml-auto" />
              <h1 className="title font-weight-normal pb-2">ReactGrid is NOT</h1>
              <ul className="pl-0">
                <li>
                  <h3 className="font-weight-bold mb-1">Record-based data table</h3>
                  <h4>
                    Looking for a data grid with Sorting, Filtering, Grouping and Spreadsheet-like edit modes?<br /> Check out these:
                  </h4>
                  <ul className="pb-4">
                    <li>
                      <h4 className="mb-1"><a href={'https://www.ag-grid.com/'} target="_blank">Ag-grid</a></h4>
                    </li>
                    <li>
                      <h4 className="mb-1"><a href={'https://handsontable.com/'} target="_blank">Handsontable</a></h4>
                    </li>
                    <li>
                      <h4 className="mb-1"><a href={'https://js.devexpress.com/'} target="_blank">DevExtreme DataGrid</a></h4>
                    </li>
                    <li>
                      <h4 className="mb-1"><a href={'https://www.telerik.com/kendo-ui/'} target="_blank">Telerik Kendo UI DataTable</a></h4>
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-weight-bold mb-1">Spreadsheet with formulas</h3>
                  <h4>
                    Do you need to display a fully functional spreadsheet in the browser?
                    Have a look at <a href={'https://demos.telerik.com/kendo-ui/spreadsheet/index'} target="_blank">
                      Telerik Kendo UI Spreadsheet</a> which has a toolbar, coordinates and supports formulas.
                  </h4>
                </li>
              </ul>

              <div className="buttons">
                <Button className="my-5 mr-3 px-3 text-uppercase font-weight-bold d-inline-block" color="primary"
                  tag={Link} to={npmSocial.url} target="_blank">
                  <div className="d-flex align-items-center">
                    <span className="em-xs"><i class="fab fa-github-square pr-3"></i></span> get The MIT
                    </div>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
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
