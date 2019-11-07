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
} from "reactstrap";
import Tree from "../components/sidebar/Tree";
import SidebarLayout from "../components/DocsSideNav";
import CustomMDXComponents from "../components/CustomMDXComponents";

import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

class DocsPostTemplate extends React.Component {
  state = {
    isDocsNavFloating: false,
  };
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    document.body.classList.add("blog-post");
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    document.body.classList.remove("blog-post");
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if ( document.documentElement.scrollTop > 145 || document.body.scrollTop > 145 ) {
      this.setState({ isDocsNavFloating: true });
    } else if (document.documentElement.scrollTop < 146 || document.body.scrollTop < 146 ) {
      this.setState({ isDocsNavFloating: false });
    }
  };

  render() {
    const post = this.props.data.mdx;
    const posts = this.props.data.allMdx.edges;
    const location = this.props.location;
    const { title, description, pages, social, docsVersions, docsPagesOrder } = this.props.data.site.siteMetadata;
    const slug = this.props.location.pathname.split('/');
    const version = slug[2];
    const docsPage = pages.find(page => page.id === 'docs')

    const dropdownItemsList = docsVersions.map(version => {
        return (
          <DropdownItem active={version === version.desc} key={version.slug} tag={Link} to={`${docsPage.route+version.slug+version.index}/`}>
            <h4 className="text-darker mb-0">{version.desc}</h4>
          </DropdownItem>
        );
    });
    const currentPostIndex = posts.findIndex(item=> `${docsPage.route}${item.node.fields.slug}` === location.pathname)
    const previousPost = posts[currentPostIndex-1];
    const nextPost = posts[currentPostIndex+1];
    return (
      <Layout location={location} pages={pages} social={social} description={description} title={title}>
        <SEO title={post.frontmatter.title} description={post.frontmatter.metaDescription }/>
        <div style={{overflow: 'unset'}} className="page-header header-filter page-header-compact-min overlay">
          <Container>
            <Row className="pt-4">
              <Col xs="auto" className="flex-fill">
                  {/* <h1><span className="text-success">ReactGrid</span>Docs<span className="text-danger">::</span></h1><br/>{"  "}<br/> */}
              </Col>
              <Col xs="auto">
                <UncontrolledDropdown className="pull-right">
                  <DropdownToggle caret size="md" className="btn-success text-nowrap px-3">
                    Select version{' '}({version})
                  </DropdownToggle>
                  <DropdownMenu right>
                    {dropdownItemsList}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="py-5">
          <Container>
            <Row>
              <Col md="3" lg="3" xl="3" className="pb-5 pb-md-0">
                <Tree version={version} edges={posts} docsRoute={docsPage.route} location={location} navOrder={docsPagesOrder}/>
              </Col>
              <Col md="9" lg="7" xl="7" className="pl-md-5 pr-lg-5 pl-lg-2">
                <h1 className="mb"><span className="text-success">{post.frontmatter.metaTitle}</span></h1>
                <CustomMDXComponents>
                  <MDXRenderer>{post.body}</MDXRenderer>
                </CustomMDXComponents>
                <div className="d-flex justify-content-between pt-5">
                  <DocsNavButton post={previousPost} title="Prev:" docsPageRoute={docsPage.route}/>
                  <div className="mx-auto"></div>
                  <DocsNavButton post={nextPost} title="Next:" docsPageRoute={docsPage.route}/>
                </div>
              </Col>
              <Col lg="2" xl="2" className="d-none d-lg-flex position-relative justify-content-start">
                <SidebarLayout isFloating={this.state.isDocsNavFloating} docsRoute={docsPage.route} location={location}/>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default DocsPostTemplate

const DocsNavButton = ({post, title, docsPageRoute, children}) => {
  return (
    <>
      {post && 
        <Button tag={Link} to={`${docsPageRoute}${post.node.fields.slug}`} className="btn-link text-left px-0" color="success">
          <p className="">{title}</p>
          <span className="h4 text-white mb-0">{post.node.frontmatter.title}</span>
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
          }
        }
      }
    }
  }
`
