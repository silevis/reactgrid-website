import React from "react"
import { StaticQuery, graphql } from "gatsby";
import FooterLink from "./FooterLink"

const FooterOnlyLinks = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              footerNav {
                id
                title
                description
                route
                active
              }
            }
          }
        }
      `}
      render={data => {
        const { footerNav } = data.site.siteMetadata;
        return footerNav
          .filter(page => page.active)
          .map(page => <FooterLink key={page.id} route={page.route} title={page.title} />)
      }}
    />
  )
}

export default FooterOnlyLinks