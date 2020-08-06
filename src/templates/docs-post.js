import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Container,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  UncontrolledCollapse,
} from "reactstrap";
import Tree from "../components/sidebar/Tree";
import SidebarLayout from "../components/DocsSideNav";
import CustomMDXComponents from "../components/CustomMDXComponents";
import { isBrowserIE } from "../components/isBrowserIE";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";


class DocsPostTemplate extends React.Component {
  state = {
    isDocsNavFloating: true,
  };
  componentDidMount() {
    if (!isBrowserIE()) {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
    document.body.classList.add("blog-post");
  }

  componentWillUnmount() {
    document.body.classList.remove("blog-post");
  }

  render() {
    const { data, location } = this.props;
    const { mdx: post, allMdx, site } = data;
    const { title, description, pages, social, docsVersions, docsPagesOrder } = site.siteMetadata;
    const posts = allMdx.edges;
    const slug = location.pathname.split('/');
    const version = slug[2];
    const docsPage = pages.find(page => page.id === 'docs');

    const dropdownItemsList = docsVersions.filter(version => version.active).map(version => (
      <DropdownItem active={version === version.desc} key={version.slug} tag={Link} className="bg-white"
        to={`${docsPage.route + version.slug + version.index}/`}>
        <h4 className="text-darker mb-0">{version.desc}</h4>
      </DropdownItem>
    ));
    const currentPostIndex = posts.findIndex(item => `${docsPage.route}${item.node.fields.slug}` === location.pathname)
    const previousPost = posts[currentPostIndex - 1];
    const nextPost = posts[currentPostIndex + 1];
    const tree = <Tree version={version} edges={posts} docsRoute={docsPage.route} currentLocation={location} navOrder={docsPagesOrder} />;
    return (
      <Layout location={location} pages={pages} social={social} description={description} title={title}>
        <SEO title={post.frontmatter.title} description={post.frontmatter.metaDescription} />
        <div className="docs-page section">
          <Container>
            <div className="space-70 d-none d-md-block"></div>
            <Row>
              <Col md="3" lg="3" xl="3" className="pb-3 pb-md-0">
                <UncontrolledCollapse navbar toggler="#docsnav" id="docs-collapser"
                  className="h-100 d-md-none position-relative overflow-hidden position-absolute">
                  <Button className="navbar-toggler btn-link btn-danger btn-sm text-danger position-absolute mr-3 mt-3" id="docsnav"
                    style={{ top: 0, right: 0 }}>
                    <i className="fas fa-times fa-2x p-2"></i>
                  </Button>
                  {tree}
                </UncontrolledCollapse>
                <Row>
                  <Col>
                    <UncontrolledDropdown className="dropdown-version-wrapper mt-4 mt-md-0">
                      <DropdownToggle caret size="md" className="btn-primary text-nowrap px-3 ">
                        v{version}
                      </DropdownToggle>
                      <DropdownMenu right>
                        {dropdownItemsList}
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Col>
                  <Col className='d-md-none'>
                    <div className='bg-transparent h-100 d-flex justify-content-end align-items-center '>
                      <span id="docsnav" className='p-3'> <i className="fas fa-bars text-primary fa-3x"></i></span>
                    </div>
                  </Col>
                </Row>

                <div className='d-none d-md-block'>
                  {tree}
                </div>
              </Col>
              <Col md="9" lg="7" xl="7" className="pl-md-5 pr-lg-5 pl-lg-2">
                <h1 id="docs-header"><span className="text-primary">
                  {post.frontmatter.metaTitle}
                  {/* {post.frontmatter.proMark && <i className="fas fa-tachometer-alt pl-2"></i>} */}
                </span>
                </h1>
                <CustomMDXComponents>
                  <MDXRenderer>{post.body}</MDXRenderer>
                </CustomMDXComponents>
                <div className="d-flex justify-content-between pt-5">
                  <DocsNavButton post={previousPost} title="Prev:" docsPageRoute={docsPage.route} />
                  <div className="mx-auto"></div>
                  <DocsNavButton post={nextPost} title="Next:" docsPageRoute={docsPage.route} />
                </div>
              </Col>
              <Col lg="2" xl="2" className="d-none d-lg-flex position-relative justify-content-start">
                <SidebarLayout isFloating={this.state.isDocsNavFloating} docsRoute={docsPage.route} location={location} />
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default DocsPostTemplate

const DocsNavButton = ({ post, title, docsPageRoute, children }) => {
  return (
    <>
      {post &&
        <Button tag={Link} to={`${docsPageRoute}${post.node.fields.slug}`} className="btn-link text-left px-0" color="primary">
          <p>{title}</p>
          <span className="h4 text-primary mb-0">{post.node.frontmatter.title}</span>
          {children}
        </Button>
      }
    </>
  )
}

export const pageQuery = graphql`
  query DocsPostBySlug($slug: String!) {
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
        social {
          description
          fontAwesomeIcon
          title
          url
        }
        docsVersions {
          slug
          desc
          index
          active
        }
        docsPagesOrder
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      body
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        metaDescription
        metaTitle
        proMark
      }
    }
    allMdx(filter: {frontmatter: {posttype: {eq: "docs"}}, fields: {slug: {}}}, sort: {fields: fields___slug, order: ASC}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            posttype
            title
            metaDescription
            metaTitle
            proMark
          }
        }
      }
    }
  }
`
