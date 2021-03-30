import React from "react";
import { graphql } from "gatsby";

export default function Explore(props) {
  return null;
}

export const query = graphql`
  fragment Explore on SiteSiteMetadata {
    explore {
      id
      title
      description
      route
      active
    }
  }
`
