import React from "react";
import { graphql, navigate } from "gatsby";


const DocsRedirectPage = (props) => {

  React.useEffect(() => {
    const { data } = props;
    const { pages } = data.site.siteMetadata;
    const docs = pages.filter(page => page.active && page.active === true).find(page => page.id === 'docs');
    const docsVersions = data.site.siteMetadata.docsVersions.find(version => version.active);
    navigate(`${docs.route}${docsVersions.slug}${docsVersions.index}/`);
  });

  return null;
}

export default DocsRedirectPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        pages {
          description
          id
          route
          title
          active
        }
        docsVersions {
          slug
          desc
          index
          active
        }
      }
    }
  }
`
