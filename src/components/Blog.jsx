import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";
import Img from 'gatsby-image'
import { Link } from 'gatsby';

const BlogView = ({ posts, blogRoute }) => {
  const blogPosts = posts?.map(({ node }) => {
    return <BlogPost key={node.fields.slug} node={node} blogRoute={blogRoute} />
  });
  return (
    <section className="section">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="10">
            {blogPosts}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

const BlogPost = ({ node, blogRoute }) => {
  const linkUrl = blogRoute + node.fields.slug;
  return (
    <Card className="card-blog card-plain blog-horizontal">
      <Row>
        <Col lg="4">
          <div className="card-image h-100 img-raised">
            <Link to={linkUrl} className="h-100">
              <Img sizes={node.frontmatter.thumbnail.childImageSharp.sizes} className="img rounded h-100" />
            </Link>
          </div>
        </Col>
        <Col lg="8">
          <CardBody>
            <CardTitle tag="h3">
              <Link to={linkUrl}>{node.frontmatter.title}</Link>
            </CardTitle>
            <p className="card-description text-muted mb-0">
              {node.excerpt}{" "}
              <Link to={linkUrl}>read more</Link>
            </p>
            <div className="author">
              <Img sizes={node.frontmatter.authorImg.childImageSharp.sizes} className="avatar img-raised" />
              <div className="text" style={{ top: '-42px' }}>
                <span className="text-muted">Written by {node.frontmatter.author}</span>
                <div className="meta text-black">{node.frontmatter.date}</div>
              </div>
            </div>
          </CardBody>
        </Col>
      </Row>
    </Card>
  )
}

export default BlogView;