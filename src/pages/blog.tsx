import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/Header";
import BlogView from "../components/Blog";


const Blog = (props) => {
  const { data } = props;
  const { title, description, pages, social } = data.site.siteMetadata;
  const posts = data.allMdx.edges;
  const blogPage = pages.find(page => page.id === 'blog');
  const blogPageRoute = blogPage.route;

  return (
    <Layout pages={pages} social={social} description={description} title={'Blog'}>
      <SEO title={'Blog'} />
      <Header />
      <BlogView posts={posts} blogRoute={blogPageRoute} />
    </Layout>
  )
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
          active
        }
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC },
      filter: {frontmatter: {posttype: {eq: "blog"}, published: {eq: true}}}
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
            canonicalUrl
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
