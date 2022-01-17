import React from "react"
import { StaticQuery, graphql } from "gatsby";
import FooterLink from "./FooterLink"

const FooterExploreLinks = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              ...Explore
            }
          }
        }
      `}
      render={data => {
        const { explore } = data.site.siteMetadata;
        return explore
          .filter(page => page.active && page.title !== 'Feature comparison')
          .map(page => <FooterLink key={page.id} route={page.route} title={page.title} />)
      }}
    />
  )
}

export default FooterExploreLinks;
