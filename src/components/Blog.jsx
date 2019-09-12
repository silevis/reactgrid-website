import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";
import bg from "../assets/img/serge-kutuzov.jpg";
import { Link } from 'gatsby';

  class BlogView extends React.Component {
    render() {
      const { posts, blogRoute } = this.props;
      const blogPosts = posts && posts.map( ({node}) => {
        return <BlogPost key={node.fields.slug} node={node} blogRoute={blogRoute} />
      });
      console.log(blogRoute);
      
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
}

const BlogPost = ({node, blogRoute}) => {
  console.log(node);
  return (
    <Card className="card-blog card-plain blog-horizontal">
      <Row>
        <Col lg="4">
          <div className="card-image">
            <Link to={blogRoute + node.fields.slug}>
              <img alt="..." className="img rounded" src={bg} />
            </Link>
          </div>
        </Col>
        <Col lg="8">
          <CardBody>
            <CardTitle tag="h3">
              <Link to={blogRoute + node.fields.slug}>{node.frontmatter.title}</Link>
            </CardTitle>
            <p className="card-description">
              {node.excerpt}{" "}
              <Link to={blogRoute + node.fields.slug}>Read more</Link>
            </p>
            <div className="author">
              <img alt="..." className="avatar img-raised" src={bg}/>
              <div className="text">
                <span className="name">Tom Hanks</span>
                <div className="meta">{node.frontmatter.date}</div>
              </div>
            </div>
          </CardBody>
        </Col>
      </Row>
    </Card>
  )
}

export default BlogView;