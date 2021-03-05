import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SamplesWrapper from "../components/SamplesWrapper";


const Examples = ({ data }) => {
  const { title, description, pages, social } = data.site.siteMetadata;
  return (
    <Layout pages={pages} social={social} description={description} title={title}>
      <SEO
        title={'Examples'}
        description={`Check out our examples and follow the guide to learn how ReactGrid works and how you can boost performance of your React application!`}
      />
      <SamplesWrapper />
    </Layout>
  )
}

export default Examples;

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
          active
        }
      }
    }
  }
`
