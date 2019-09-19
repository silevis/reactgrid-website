import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import Tree from "../components/sidebar/Tree";

class DocsPostTemplate extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    document.body.classList.add("blog-post");
  }
  componentWillUnmount() {
    document.body.classList.remove("blog-post");
  }
  render() {
    const post = this.props.data.markdownRemark;
    const posts = this.props.data.allMarkdownRemark.edges;

    const { title, description, pages, social, navOrder } = this.props.data.site.siteMetadata;

    return (
      <Layout location={this.props.location} pages={pages} social={social} description={description} title={title}>
        <SEO title={post.frontmatter.title} description={post.frontmatter.metaDescription }/>
        <div className="page-header header-filter page-header-compact-min mt-3">
          <Container>
            <Col>
              <Row>
                {/* <h1><span className="text-success">ReactGrid</span>Docs<span className="text-danger">::</span></h1><br/>{"  "}<br/> */}
                <h1><span className="text-danger">{post.frontmatter.title}</span></h1>
              </Row>
            </Col>
          </Container>
        </div>
        <div className="py-5">
          <Container>
            <Row>
              <Col md="3">
                {this.props.location && <Tree edges={posts} location={this.props.location} navOrder={navOrder} />}
              </Col>
              <Col md="9">
                <div className="pt-1 text-xl" dangerouslySetInnerHTML={{ __html: post.html }}></div>
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
        }
        social {
          description
          fontAwesomeIcon
          title
          url
        }
        navOrder
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        metaDescription
        metaTitle
      }
    }
    allMarkdownRemark( filter: {frontmatter: {posttype: {eq: "docs"}}} ){
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            metaDescription
            metaTitle
          }
        }
      }
    }
  }
`
