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
    <Layout pages={pages} social={social} description={description} title={title}>
      <SEO title={'Blog'} description={`Explore ReactGrid and unleash the potential of all your React apps with tips, tools, and practices`} />
      <Header />
      <BlogView posts={posts} blogRoute={blogPageRoute} />
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query BlogPostsQuery {
    site {
      ...SiteMetadata
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
            ...BlogPostNode
            authorImg {
              childImageSharp {
                gatsbyImageData(
                  width: 120
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  width: 200
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`
