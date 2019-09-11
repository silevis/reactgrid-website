import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/Seo"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const title = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description
    // const posts = data.allMarkdownRemark.edges
    const pages = data.site.siteMetadata.pages
    const social = data.site.siteMetadata.social
    return (
      <Layout location={this.props.location} pages={pages} social={social} description={description} title={title}>
        <SEO title={title} />
        <div style={{height: 1000}} className="wrapper" ref="wrapper">
          <div className="section-space" />
        </div>
      </Layout>
    )
  }
}

export default Index

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
  }
`
