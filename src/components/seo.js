import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description = ``, lang = `en`, meta = [], title = ``, bookmarkTitlePrefix = ``, bookmarkTitleSuffix = ``, canonicalUrl = undefined }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${bookmarkTitlePrefix || title} | ${bookmarkTitleSuffix || site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      {canonicalUrl !== '' && <link rel="canonical" href={canonicalUrl} />}
      <script src="https://klesun-misc.github.io/TypeScript/lib/typescriptServices.js"></script>
    </Helmet>
  )
}

export default SEO;
