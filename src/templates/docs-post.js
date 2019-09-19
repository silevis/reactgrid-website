import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Tree from "../components/sidebar/Tree";

import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

class DocsPostTemplate extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    document.body.classList.add("blog-post");
  }
  componentWillUnmount() {
    document.body.classList.remove("blog-post");
  }
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      selectedVersionSlug: '/1.0.1'
    };
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render() {
    const post = this.props.data.mdx;
    const posts = this.props.data.allMdx.edges;
    console.log(post);
    

    const { title, description, pages, social, navOrder } = this.props.data.site.siteMetadata;

    return (
      <Layout location={this.props.location} pages={pages} social={social} description={description} title={title}>
        <SEO title={post.frontmatter.title} description={post.frontmatter.metaDescription }/>
        <div className="page-header header-filter page-header-compact-min mt-3">
          <Container>
            <Col>
              <Row>
                {/* <h1><span className="text-success">ReactGrid</span>Docs<span className="text-danger">::</span></h1><br/>{"  "}<br/> */}
                <h1><span className="text-danger">{post.frontmatter.title}</span></h1>
              </Row>
            </Col>
          </Container>
        </div>
        <div className="py-5">
          <Container>
            <Row>
              <Col md="3">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret>
                    Select version
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem>
                      <Link to={'/docs'}>v.1
                      </Link>

                    </DropdownItem>
                    <DropdownItem disabled>Action (disabled)</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Foo Action</DropdownItem>
                    <DropdownItem>Bar Action</DropdownItem>
                    <DropdownItem>Quo Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                {this.props.location && <Tree version='1337' edges={posts} location={this.props.location} navOrder={navOrder} />}
              </Col>
              <Col md="9">
                <MDXRenderer>{post.body}</MDXRenderer>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default DocsPostTemplate

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
        }
        social {
          description
          fontAwesomeIcon
          title
          url
        }
        navOrder
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
    allMdx ( filter: {frontmatter: {posttype: {eq: "docs"}}} ){
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
