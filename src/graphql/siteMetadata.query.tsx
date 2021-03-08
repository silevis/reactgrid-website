import React from "react";
import { graphql } from "gatsby";

export default function SiteMetadata(props) {
  return null;
}

export const query = graphql`
  fragment SiteMetadata on Site {
    siteMetadata {
      title
      description
      siteUrl
      pages {
        description
        id
        route
        title
        active
      }
      ...Explore
      ...DocVersions
      social {
        description
        fontAwesomeIcon
        title
        url
        active
      }
      docsPagesOrder
    }
  }
`
