import React from "react";
import { graphql } from "gatsby";

export default function DocVersions(props) {
  return null;
}

export const query = graphql`
  fragment DocVersions on SiteSiteMetadata {
    docsVersions {
      slug
      desc
      index
      active
    }
  }
`
