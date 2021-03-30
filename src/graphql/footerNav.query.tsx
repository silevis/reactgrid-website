import React from "react";
import { graphql } from "gatsby";

export default function FooterNav(props) {
  return null;
}

export const query = graphql`
  fragment FooterNav on SiteSiteMetadata {
    footerNav {
      id
      title
      description
      route
      active
    }
  }
`
