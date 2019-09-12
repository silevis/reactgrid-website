import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Container,
  Row,
  Col
} from "reactstrap";
import Header from "../components/Header"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { title, description, pages, social } = this.props.data.site.siteMetadata
    const headerTitle = <h1 className="title">{post.frontmatter.title}</h1>;
    const headerDescription = <p></p>;
    return (
      <Layout location={this.props.location} pages={pages} social={social} description={description} title={title}>
        <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt}/>
        <Header header={headerTitle} description={headerDescription}/>
        <div className="section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h6 className="category">{post.frontmatter.date}</h6>
                <p dangerouslySetInnerHTML={{ __html: post.html }}></p>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
