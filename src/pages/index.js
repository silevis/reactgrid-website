import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../assets/css/nucleo-icons.css";
import "../assets/scss/blk-design-system-pro-react.scss?v1.0.0";
import "../assets/demo/demo.css";
import "../assets/demo/react-demo.css";
// import ImageUpload from "../components/CustomUpload/ImageUpload";

// import Headers from "./SectionsSections/Headers.jsx";
// import Features from "./SectionsSections/Features.jsx";
// import Blogs from "./SectionsSections/Blogs.jsx";
// import Teams from "./SectionsSections/Teams.jsx";
// import Projects from "./SectionsSections/Projects.jsx";
// import Pricing from "./SectionsSections/Pricing.jsx";
// import Testimonials from "./SectionsSections/Testimonials.jsx";
// import ContactUs from "./SectionsSections/ContactUs.jsx";
// import Tables from "./SectionsSections/Tables.jsx";
// import Accordion from "./SectionsSections/Accordion.jsx";

// import ScrollNavbar from "../components/Navbars/ScrollNavbar.jsx";
// import DemoFooter from "../components/Footers/DemoFooter.jsx";


class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    // const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div style={{height: '2000px'}} className="wrapper" ref="wrapper">
          <div className="section-space" />
        </div>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
