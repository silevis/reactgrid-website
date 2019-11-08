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
import demoGIF from "../assets/img/demo.gif";


class Index extends React.Component {
  componentDidMount() {
    document.body.classList.add("reset-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("reset-page");
  }
  render() {
    const { data } = this.props
    const { title, description, pages, social, docsVersions } = data.site.siteMetadata;
    const docsVersion = docsVersions[0];
    const demoPage = pages.find(page => page.id === 'examples')
    // const featuresPage = pages.find(page => page.id === 'features')
    const docsPage = pages.find(page => page.id === 'docs')
    const githubSocial = social.find(social => social.title === 'Github')
    
    const usps = data.allUspsYaml.edges;
    return (
      <Layout location={this.props.location} pages={pages} social={social} description={description} title={title}>
        <SEO title={title} />
        <div className="wrapper" ref="wrapper">
          <div className="">
            <div className="space"></div>
            <Container>
              <Row>
                <Col className="mr-auto text-left align-items-center" lg="5" md="7">
                  <h1 className="title display-1 mb-3">
                    Build <span className="text-success">WOW!</span><br/>-tables
                  </h1>
                  <h3 className="title">Create highly customizable spreadsheet-like grids</h3>
                  <br />
                  <div className="buttons">
                    <Button className="mr-3 px-3 " color="warning" tag={Link} to={demoPage.route} size="lg">
                      Check examples {' '}<i className="tim-icons icon-double-right"/>
                    </Button>
                  </div>
                </Col>
                <Col className="ml-auto mt-5 d-flex align-items-center" lg="7" md="12">
                  <div className="iframe-container ">
                    <img alt="Demo animation" src={demoGIF}/>
                  </div>
                </Col>
              </Row>
            </Container>
            <div className="space"></div>
          </div>
        </div>
        <div>
          <Container>
            <Row className="align-items-center">
              <Col className="pb-5">
                <h1 className="title text-center">Why is <span className="text-success">Reactgrid</span> unique?</h1>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col>
                <Row>
                  {/* {usps.map(item => <USP key={item.number} {...item}></USP> )} */}
                  {usps.map(item => <USP key={item.node.number} {...item.node}/>)}
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center mt-4" md="10">
                <h2 className="title">Curious yet?</h2>
                <h4 className="description mb-5">
                  Dive in setup tutorial right now and develop your first ReactGrid application!
                </h4>
                <Button className="mx-2" color="primary" size="lg" tag={Link} to={`${docsPage.route}${docsVersion.slug}${docsVersion.index}/`}>
                  Get started{' '}<i className="tim-icons icon-double-right"/>
                </Button>
                <a className="btn btn-lg mx-2 btn-success" size="lg" target="_blank" rel="noopener noreferrer" href={githubSocial.url}>
                  View Source on Github <i className={`${githubSocial.fontAwesomeIcon} p-0`}/>
                </a>
              </Col>
            </Row>
          </Container>
        </div>      
      </Layout>
    )
  }
}

export default Index

const USP = ({number, header, description, features, graphics}) => {
  return (
    <Col md="12" className="py-md-5">
      <Row className="d-flex flex-column flex-md-row text-center text-md-left align-items-center ">
        <Col md="2" lg="2">
          <h4 className="text-muted display-1 text-right text-bold pb-4 mb-md-0 pb-md-0" style={{fontSize: '6em'}}>{number}</h4>
        </Col>
        <Col  md="3" lg="3">
          {graphics && <div style={{fontSize: '1em'}} className="d-flex align-items-center justify-content-center pb-5 pb-md-0" dangerouslySetInnerHTML={{ __html: graphics }}>
          </div>}
        </Col>
        <Col>
          <h3 className=""><span>{header}</span></h3>
          <p className="description">{description}</p>
          {features && <ul className="list-style-none text-left pl-0 ">
            {features.map(item => <li key={item} className="d-flex flex-row"><i className="tim-icons icon-check-2 text-success pr-2 pt-1"></i>{item}</li> )}
          </ul>}
        </Col>
      </Row>
      <hr className="line-primary mx-auto d-md-none"/>
    </Col>
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
