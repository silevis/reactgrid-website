import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import BlogView from "../components/Blog"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const { title, description, pages, social } = data.site.siteMetadata;
    const posts = data.allMarkdownRemark.edges;
    const blogPageRoute = pages[3].route;

    const headerTitle = <h1 className="title">Latest blogposts</h1>;
    const headerDescription = (
      <p className="description">Read our newsfeed</p>
    );
    return (
      <Layout location={this.props.location} pages={pages} social={social} description={description} title={title}>
        <SEO title={'Blog'} />
        <Header header={headerTitle} description={headerDescription}/>
        <BlogView posts={posts} blogRoute={blogPageRoute}/>
      </Layout>
    )
  }
}

export default Blog

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
        }
        social {
          description
          fontAwesomeIcon
          title
          url
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
            description
            author
            thumbnail {
              childImageSharp {
                sizes(maxWidth: 900) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            authorImg {
              childImageSharp {
                sizes(maxWidth: 120) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
