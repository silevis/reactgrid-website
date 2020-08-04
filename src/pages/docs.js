import React from "react"
import { graphql, navigate } from "gatsby"


class NotFoundPage extends React.Component {

  componentDidMount() {
    const { data } = this.props;
    const { pages } = data.site.siteMetadata;
    const docs = pages.filter(page => page.active && page.active === true).find(page => page.id === 'docs');


    const docsVersions = data.site.siteMetadata.docsVersions.find(version => version.active);
    console.log(docsVersions)
    navigate(`${docs.route}${docsVersions.slug}${docsVersions.index}/`);
  }

  render() {
    return null
  }
}

export default NotFoundPage

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
