import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

import {
  Button,
  Container,
  UncontrolledTooltip,
  Col,
  Row
} from "reactstrap";

class Footer extends React.Component {
  render() {
    const { pages, social } = this.props;
    const socialLinks = social.map((link, idx) => {
      return <SocialLink key={idx} id={idx} fontAwesomeIcon={link.fontAwesomeIcon} description={link.description} 
              url={link.url} title={link.title}/> 
    })
    return (
      <>
      <footer className="footer footer-simple" data-background-color="black">
        <Container>
          {/* <Link to={'/'} className="footer-brand"></Link> */}
          <div className="content">
            <Row>
              <Col xs="6" sm="4" md="3" className="pb-4 pb-sm-0">
                <h5>Market</h5>
                <ul className="links-vertical">
                  <StaticQuery
                    query={graphql`
                      query {
                        site {
                          siteMetadata {
                            docsVersions {
                              slug
                              desc
                              index
                            }
                          }
                        }
                      }
                    `}
                    render={data => {
                      const docsVersions = data.site.siteMetadata.docsVersions[0];
                      return pages.filter(page => page.active).map(page => 
                          <FooterLink key={page.id} route={page.route === '/docs' ? `${page.route}${docsVersions.slug}${docsVersions.index}/` : page.route} title={page.title}/> 
                      )
                    }}
                  />
                </ul>
              </Col>
              <Col xs="6" sm="4" md="3" className="pb-4 pb-sm-0">
                <h5>Company</h5>
                <ul className="links-vertical">
                  <StaticQuery
                    query={graphql`
                      query {
                        site {
                          siteMetadata {
                            footerNav {
                              id
                              title
                              description
                              route
                              active
                            }
                          }
                        }
                      }
                    `}
                    render={data => {
                      const {footerNav} = data.site.siteMetadata;
                      return footerNav.filter(page => page.active).map(page => 
                          <FooterLink key={page.id} route={page.route} title={page.title}/> 
                      )
                    }}
                  />
                </ul>
              </Col>
              <Col xs="6" sm="4" md="3" className="pb-4 pb-sm-0"> 
                <h5>Contact</h5>
                <p>
                  Silevis Software<br/>
                  Sienkiewicza Street 17/3<br/>
                  25-007 Kielce<br/>
                  Poland<br/>
                  <br/>
                  +48 000 000 000<br/>
                </p>
              </Col>
              <Col xs="6" sm="4" md="3" className="pb-4 pb-sm-0">
                <h5>Social</h5>
                <ul className="links-horizontal">
                  {socialLinks}
                </ul>
              </Col>
            </Row>
          </div>
          <hr className="w-100"/>
          <div className="copyright">
            Copyright © 2019 Silevis Software, All Rights Reserved.
          </div>
        </Container>
      </footer>
      </>
    );
  }
}

const FooterLink = ({route, title}) => {
  return (
    <li>
      <Link to={route} activeStyle={{fontWeight: 600}} className="ml-1">{title}</Link>
    </li>
  )
}

const SocialLink = ({fontAwesomeIcon, description, url, id}) => {
  const tooltipId = 'tooltip' + id
  return (
    <li>
      <Button className="btn-icon btn-simple" id={tooltipId} href={url} target="_blank">
        <i className={fontAwesomeIcon} /> 
      </Button>
      <UncontrolledTooltip delay={0} target={tooltipId}>{description}</UncontrolledTooltip>
    </li>
  )
}

export default Footer;
