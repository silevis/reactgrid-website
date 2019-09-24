import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Container,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Tree from "../components/sidebar/Tree";
import SidebarLayout from "../components/DocsSideNav";
import CustomMDXComponents from "../components/CustomMDXComponents";

import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

class DocsPostTemplate extends React.Component {
  state = {
    isDocsNavFloating: false,
  };
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    document.body.classList.add("blog-post");
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    document.body.classList.remove("blog-post");
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if ( document.documentElement.scrollTop > 145 || document.body.scrollTop > 145 ) {
      this.setState({ isDocsNavFloating: true });
    } else if (document.documentElement.scrollTop < 146 || document.body.scrollTop < 146 ) {
      this.setState({ isDocsNavFloating: false });
    }
  };

  render() {
    const post = this.props.data.mdx;
    const posts = this.props.data.allMdx.edges;
    const { title, description, pages, social, docsVersions, docsPagesOrder } = this.props.data.site.siteMetadata;
    const slug = this.props.location.pathname.split('/');
    const version = slug[2];
    const docsRoute = pages[2].route;

    const dropdownItemsList = docsVersions.map(version => {
        return (
          <DropdownItem active={version === version.desc} key={version.slug} tag={Link} to={`${docsRoute+version.slug+version.index}/`}>
            <h4 className="text-darker mb-0">{version.desc}</h4>
          </DropdownItem>
        );
    });
    return (
      <Layout location={this.props.location} pages={pages} social={social} description={description} title={title}>
        <SEO title={post.frontmatter.title} description={post.frontmatter.metaDescription }/>
        <div style={{overflow: 'unset'}} className="page-header header-filter page-header-compact-min overlay">
          <Container>
            <Row className="pt-5">
              <Col xs="auto" className="flex-fill">
                  {/* <h1><span className="text-success">ReactGrid</span>Docs<span className="text-danger">::</span></h1><br/>{"  "}<br/> */}
                  <h1 className="mb-0"><span className="text-danger">{post.frontmatter.title}</span> v.{version}</h1>
              </Col>
              <Col xs="auto">
                <UncontrolledDropdown className="pull-right">
                  <DropdownToggle caret size="sm" className="btn-success">
                    Select version<br/>({version})
                  </DropdownToggle>
                  <DropdownMenu right>
                    {dropdownItemsList}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="py-5">
          <Container>
            <Row>
              <Col md="3">
                <Tree version={version} edges={posts} docsRoute={docsRoute} location={this.props.location} navOrder={docsPagesOrder}/>
              </Col>
              <Col md="9" lg="7" xl="6">
                <CustomMDXComponents>
                  <MDXRenderer>{post.body}</MDXRenderer>
                </CustomMDXComponents>
              </Col>
              <Col lg="2" xl="3" className="d-none d-lg-flex position-relative justify-content-start">
                <SidebarLayout isFloating={this.state.isDocsNavFloating} docsRoute={docsRoute} location={this.props.location}/>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default DocsPostTemplate

export const pageQuery = graphql`
  query DocsPostBySlug($slug: String!) {
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
        social {
          description
          fontAwesomeIcon
          title
          url
        }
        docsVersions {
          slug
          desc
          index
        }
        docsPagesOrder
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      body
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        metaDescription
        metaTitle
      }
    }
    allMdx ( filter: {frontmatter: {posttype: {eq: "docs"}}} ){
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            posttype
            title
            metaDescription
            metaTitle
          }
        }
      }
    }
  }
`
