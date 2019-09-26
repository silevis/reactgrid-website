import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Features from "../components/Features"
import DemoWrapper from "../components/DemoWrapper"
import FAQ from "../components/FAQ"

class Examples extends React.Component {
  render() {
    const { data } = this.props
    const { title, description, pages, social } = data.site.siteMetadata;
    const headerTitle = <h1 className="title">Spreadsheet demo</h1>;
    const headerDescription = (
      <p className="description"> Check all available feature</p>
    );
    return (
      <Layout location={this.props.location} pages={pages} social={social} description={description} title={title}>
        <SEO title={'Examples'} />
        <Header header={headerTitle} description={headerDescription}/>
        <DemoWrapper/>
        <Features/>
        <FAQ/>
      </Layout>
    )
  }
}

export default Examples

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
