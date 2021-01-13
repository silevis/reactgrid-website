import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface SeoProps {
  description: string;
  lang: string;
  meta: (
    { name: string; content: any; property?: undefined; } | { property: string; content: any; name?: undefined; }
  )[];
  title: string;
  canonicalUrl: string;
  image?: string;
}

function SEO({ description = '', lang = 'en', meta, title, canonicalUrl = '', image }: SeoProps) {
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

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.description}`}
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
        image && {
          property: `og:image`,
          content: image,
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
