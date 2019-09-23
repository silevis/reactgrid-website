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
    const posts = data.allMdx.edges;
    const blogPageRoute = pages[4].route;

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
  query BlogPostsQuery {
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
      }
    }
    allMdx(sort: { fields: [frontmatter___title], order: DESC },
      filter: {frontmatter: {posttype: {eq: "blog"}}}
      ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            author
            date(formatString: "DD MMMM YYYY")
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
