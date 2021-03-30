import React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { isBrowserIE } from "../functions/isBrowserIE"
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import { getId } from '../functions/getId'


class Cookies extends React.Component<PageProps<any>, {}> {
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
    const { data, location } = this.props;
    const { title, description, pages, social } = data.site.siteMetadata;


    const NavItems = [
      {
        title: 'What Are Cookies',
      },
      {
        title: 'How We Use Cookies',
      },
      {
        title: 'Disabling Cookies',
      },
      {
        title: 'The Cookies We Set',
      },
      {
        title: 'Third Party Cookies',
      },
      {
        title: 'More infomations',
      },
    ].map(item => {
      return (
        <NavItem className="success">
          <NavLink href={`#${getId(item.title, "-")}`} className="h4 d-flex h-100">
            <Button className="btn-simple h-100 w-100" color="primary">{item.title}</Button>
          </NavLink>
        </NavItem>
      )
    });

    return (
      <Layout pages={pages} social={social} description={description} title={title}>
        <SEO title={title} />
        <div className="space"></div>
        <div className="wrapper" ref="wrapper">
          <div className="section">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="10">
                  <Row className="justify-content-between">
                    <Col>
                      <h1 className="h1 px-3">This is the Cookie Policy for ReactGrid</h1>
                      <h3 className="h3 px-3 mb-0 text-muted">Effective date: 16 December 2019</h3>
                      <Nav justified className="mt-3 px-3 align-items-stretch">
                        {NavItems}
                      </Nav>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col xs="11" className="mx-auto">
                      <div className="cookies-policy-topic-wrapper">
                        <span className="anchor" id="what-are-cookies"></span>
                        <h2 className="h2">What Are Cookies</h2>
                        <p className="pb-3">As is common practice with almost all professional websites this site uses cookies,
                        which are tiny files that are downloaded to your computer, to improve your experience. This page describes
                        what information they gather, how we use it and why we sometimes need to store these cookies. We will also
                        share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements
                        of the sites functionality.
                        </p>
                        <p className="pb-3">For more general information on cookies see the Wikipedia article on HTTP Cookies.
                        </p>
                        <hr className="line-primary ml-auto" />
                      </div>
                      <div className="cookies-policy-topic-wrapper">
                        <span className="anchor" id="how-we-use-cookies"></span>
                        <h2 className="h2">How We Use Cookies</h2>
                        <p className="pb-3">We use cookies for a variety of reasons detailed below. Unfortunately in most cases there
                        are no industry standard options for disabling cookies without completely disabling the functionality and
                        features they add to this site. It is recommended that you leave on all cookies if you are not sure whether
                        you need them or not in case they are used to provide a service that you use.
                        </p>
                        <hr className="line-primary ml-auto" />
                      </div>
                      <div className="cookies-policy-topic-wrapper">
                        <span className="anchor" id="disabling-cookies"></span>
                        <h2 className="h2">Disabling Cookies</h2>
                        <p className="pb-3">You can prevent the setting of cookies by adjusting the settings on your browser
                        (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality
                        of this and many other websites that you visit. Disabling cookies will usually result in also disabling
                        certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.
                        </p>
                        <hr className="line-primary ml-auto" />
                      </div>
                      <div className="cookies-policy-topic-wrapper">
                        <span className="anchor" id="the-cookies-we-set"></span>
                        <h2 className="h2">The Cookies We Set</h2>
                        <ul className="pl-0">
                          <li>
                            <p>
                              Orders processing related cookies
                            </p>
                            <p>
                              This site offers e-commerce or payment facilities and some cookies are essential to ensure that your
                              order is remembered between pages so that we can process it properly.
                            </p>
                          </li>
                          <li>
                            <p>Surveys related cookies</p>
                            <p>From time to time we offer user surveys and questionnaires to provide you with interesting insights,
                            helpful tools, or to understand our user base more accurately. These surveys may use cookies to remember
                            who has already taken part in a survey or to provide you with accurate results after you change pages.
                            </p>
                          </li>
                          <li>
                            <p>Forms related cookies</p>
                            <p>When you submit data to through a form such as those found on contact pages or comment forms cookies
                            may be set to remember your user details for future correspondence.
                            </p>
                          </li>
                          <li>
                            <p>Site preferences cookies</p>
                            <p>In order to provide you with a great experience on this site we provide the functionality to set
                            your preferences for how this site runs when you use it. In order to remember your preferences we
                            need to set cookies so that this information can be called whenever you interact with a page is
                            affected by your preferences.
                            </p>
                          </li>
                        </ul>
                        <hr className="line-primary ml-auto" />
                      </div>
                      <div className="cookies-policy-topic-wrapper">
                        <span className="anchor" id="third-party-cookies"></span>
                        <h2 className="h2">Third Party Cookies</h2>
                        <p className="pb-3">In some special cases we also use cookies provided by trusted third parties.
                        The following section details which third party cookies you might encounter through this site.
                        </p>
                        <ul className="pl-0">
                          <li>
                            <p>
                              This site uses Google Analytics which is one of the most widespread and trusted analytics solution
                              on the web for helping us to understand how you use the site and ways that we can improve your experience.
                              These cookies may track things such as how long you spend on the site and the pages that you visit so we
                              can continue to produce engaging content.
                            </p>
                            <p>
                              For more information on Google Analytics cookies, see the official Google Analytics page.
                            </p>
                          </li>
                          <li>
                            <p>Third party analytics are used to track and measure usage of this site so that we can continue
                            to produce engaging content. These cookies may track things such as how long you spend on the
                            site or pages you visit which helps us to understand how we can improve the site for you.
                            </p>
                          </li>
                          <li>
                            <p>From time to time we test new features and make subtle changes to the way that the site is delivered.
                            When we are still testing new features these cookies may be used to ensure that you receive a consistent
                            experience whilst on the site whilst ensuring we understand which optimisations our users appreciate
                            the most.
                            </p>
                          </li>
                          <li>
                            <p>
                              We also use social media buttons and/or plugins on this site that allow you to connect with your
                              social network in various ways. For these to work the following social media sites including;
                              https://github.com/, https://www.facebook.com/, https://www.npmjs.com/, https://www.gitter.im/
                              will set cookies through our site which may be used to enhance your profile on their site or contribute
                              to the data they hold for various purposes outlined in their respective privacy policies.
                            </p>
                          </li>
                        </ul>
                        <hr className="line-primary ml-auto" />
                      </div>
                      <div className="cookies-policy-topic-wrapper">
                        <span className="anchor" id="more-infomations"></span>
                        <h2 className="h2">More Informations</h2>
                        <p className="pb-3">Hopefully that has clarified things for you and as was previously mentioned if there is
                        something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case
                        it does interact with one of the features you use on our site.
                        </p>
                        <p className="pb-3">
                          However if you are still looking for more information then you can contact us through
                          one of our preferred contact methods:
                        </p>
                        <ul className="pl-0">
                          <li>
                            <a href="mailto:reactgrid@silevis.com">reactgrid@silevis.com</a>
                          </li>
                        </ul>
                        <hr className="line-primary ml-auto" />
                      </div>
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

export default Cookies

export const pageQuery = graphql`
  query {
    site {
      ...SiteMetadata
    }
  }
`
