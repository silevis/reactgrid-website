import React from "react"
import { StaticQuery, graphql } from "gatsby";
import FooterLink from "../components/FooterLink"

const CommonFooterLinks = ({pages}) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              docsVersions {
                slug
                desc
                index
              }
            }
          }
        }
      `}
      render={data => {
        const docsVersions = data.site.siteMetadata.docsVersions[0];
        return pages.filter(page => page.active).map(page => 
            <FooterLink key={page.id} route={page.route === '/docs' ? `${page.route}${docsVersions.slug}${docsVersions.index}/` : page.route} title={page.title}/> 
        )
      }}
    />
  )
}

export default CommonFooterLinks