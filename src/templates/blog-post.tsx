import React, { FC, useEffect } from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import Img from 'gatsby-image';
import { isBrowserIE } from "../functions/isBrowserIE";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import BlogMDXComponents from '../components/BlogMDXComponents';
import { ShareButtons } from '../components/ShareButtons';
import "../assets/css/gist.css";

interface BlogPostTemplatePageProps {
  [key: string]: any;
}

const BlogPost: FC<PageProps<BlogPostTemplatePageProps>> = ({ data }) => {

  useEffect(() => {
    if (!isBrowserIE()) {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
    document.body.classList.add("blog-post");
    return () => {
      document.body.classList.remove("blog-post");
    }
  }, []);

  const { mdx: post, site } = data;
  const { title, description, pages, social, siteUrl } = site.siteMetadata;

  const url = `${siteUrl}/blog${post.fields.slug}`;
  return (
    <Layout pages={pages} social={social} description={description} title={title}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        canonicalUrl={post.frontmatter.canonicalUrl}
        meta={[
          {
            property: `og:image`,
            content: siteUrl + post.frontmatter.thumbnail.childImageSharp.fluid.src,
          },
        ]}
      />
      <div className="blog-page-header header-large" style={{ paddingTop: 66 }}>
        <div
          className="page-header-image"
          data-parallax={true}
          style={{ backgroundImage: `url(${post.frontmatter.thumbnail.childImageSharp.fluid.base64})` }}
        />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h1 className="title" style={{ paddingBottom: 30, lineHeight: '3rem' }}>{post.frontmatter.title}</h1>
              <div className="author">
                <Img sizes={post.frontmatter.authorImg.childImageSharp.sizes} className="avatar img-raised" />
              </div>
              <h4 className="description" style={{ paddingTop: 30 }}>Written by {post.frontmatter.author}</h4>
              <h4 className="description">on {post.frontmatter.date}</h4>
              <ShareButtons tags={post.frontmatter.tags} title={post.frontmatter.title} url={url} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="11" lg="8" >
              <div>
                <BlogMDXComponents>
                  <MDXRenderer scope={undefined} components={undefined}>{post.body}</MDXRenderer>
                </BlogMDXComponents>
              </div>
              <hr />
              <ShareButtons tags={post.frontmatter.tags} title={post.frontmatter.title} url={url} />
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        description
        siteUrl
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
          active
        }
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      excerpt(pruneLength: 160)
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
        canonicalUrl
        tags
        authorImg {
          childImageSharp {
            sizes(maxWidth: 120) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        thumbnail {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
