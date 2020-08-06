import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { isBrowserIE } from "../components/isBrowserIE"
import {
  Container,
  Row,
  Col,
} from "reactstrap";


class PrivacyPolicy extends React.Component {
  componentDidMount() {
    if (!isBrowserIE()) {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
    document.body.classList.add("reset-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("reset-page");
  }
  render() {
    const { data } = this.props
    const { title, description, pages, social } = data.site.siteMetadata;
    return (
      <Layout location={this.props.location} pages={pages} social={social} description={description} title={title}>
        <SEO title={title} />
        <div className="wrapper" ref="wrapper">
          <div className="space"></div>
          <div className="section">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="10">
                  <Row className="justify-content-between">
                    <Col>
                      <h1 className="h1 px-0">Privacy Policy</h1>
                      <h3 className="h3 px-0 text-muted">Effective date: 16 December 2019</h3>
                    </Col>
                    <Col xs="12" className="mx-auto">
                      <PrivacyPolicyContent />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Layout>
    )
  }
}

const PrivacyPolicyContent = () => {
  return (
    <div className="cookies-policy-topic-wrapper">
      <p className="pb-3">
        Your privacy is important to us. It is Silevis Software Sp. z. o.o.'s policy to respect your privacy
         regarding any information we may collect from you across our website,
         {' '}<a href="http://reactgrid.com">reactgrid.com</a>, and other sites we own and operate.
      </p>
      <p className="pb-3">
        We only ask for personal information when we truly need it to provide a service to you. We collect
        it by fair and lawful means, with your knowledge and consent. We also let you know why we’re
        collecting it and how it will be used.
       </p>
      <p className="pb-3">
        We only retain collected information for as long as necessary to provide you with your requested
        service. What data we store, we’ll protect within commercially acceptable means to prevent loss
        and theft, as well as unauthorized access, disclosure, copying, use or modification.
      </p>
      <p className="pb-3">We don’t share any personally identifying information publicly or with third-parties,
        except when required to by law.
      </p>
      <p className="pb-3">
        Our website may link to external sites that are not operated by us. Please be aware that
        we have no control over the content and practices of these sites, and cannot accept
        responsibility or liability for their respective privacy policies.
      </p>
      <p className="pb-3">
        You are free to refuse our request for your personal information, with the understanding that
        we may be unable to provide you with some of your desired services.
      </p>
      <p className="pb-3">
        Your continued use of our website will be regarded as acceptance of our practices around privacy
        and personal information. If you have any questions about how we handle user data and personal
        information, feel free to contact us.
      </p>
      <p className="pb-3">
        This policy is effective as of 16 December 2019.
      </p>
      <hr className="line-primary ml-auto" />
    </div>
  )
}

export default PrivacyPolicy

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
        social {
          description
          fontAwesomeIcon
          title
          url
        }
      }
    }
  }
`
