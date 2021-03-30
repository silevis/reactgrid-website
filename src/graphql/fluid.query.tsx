import React from "react";
import { graphql } from "gatsby";

export default function Fluid(props) {
  return null;
}

export const query = graphql`
  fragment Fluid on ImageSharpFluid {
    base64
    aspectRatio
    src
    srcSet
    sizes
  }
`
