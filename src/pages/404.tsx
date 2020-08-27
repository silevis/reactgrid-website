import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ErrorPage from "../components/404";


const NotFoundPage = ({ data }) => {
  const { title, description, pages, social } = data.site.siteMetadata;
  return (
    <Layout pages={pages} social={social} description={description} title={title}>
      <SEO title="404: Not Found" />
      <ErrorPage />
    </Layout>
  )
};

export default NotFoundPage;

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
