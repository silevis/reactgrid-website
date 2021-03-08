import React from "react";
import { graphql } from "gatsby";

export default function BlogPostNode(props) {
  return null;
}

export const query = graphql`
  fragment BlogPostNode on MdxFrontmatter {
    title
    date(formatString: "MMMM DD, YYYY")
    description
    author
    canonicalUrl
    tags
  }
`
