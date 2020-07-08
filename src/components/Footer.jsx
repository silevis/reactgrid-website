import React from "react";
import FooterOnlyLinks from "../components/FooterOnlyLinks";
import { Link } from "gatsby";
import {
  Button,
  Container,
  UncontrolledTooltip,
  Col,
  Row,
} from "reactstrap";
import CookieConsent from "react-cookie-consent";

class Footer extends React.Component {
  render() {
    const { title, social } = this.props;
    const socialLinks = social.map((link, idx) => {
      return <SocialLink key={idx} id={idx} fontAwesomeIcon={link.fontAwesomeIcon} description={link.description}
        url={link.url} title={link.title} />
    })
    return (
      <>
        <footer className="footer footer-simple">
          <Container>
            <Row className="text-left pt-4">
              {/* <Col xs="6" sm="4" md="3" className="pb-4 pb-sm-0">
                  <h5>About</h5>
                  <ul className="links-vertical">
                    <CommonFooterLinks pages={pages} />
                  </ul>
                </Col> */}
              <Col xs="6" sm="6" md="3" className="pb-4 pb-sm-0">
                <h5 className="text-uppercase font-weight-bold">Information</h5>
                <ul className="links-vertical">
                  <FooterOnlyLinks />
                </ul>
              </Col>
              <Col xs="6" sm="6" md="6" className="pb-4 pb-sm-0">
                <h5 className="text-uppercase font-weight-bold">Contact</h5>
                <address>
                  <p>
                    Silevis Software Sp. z o.o.<br />
                    Sienkiewicza Street 17/3<br />
                    25-007 Kielce<br />
                    Poland<br /><br />
                    <i className="far fa-envelope pr-1"></i> <a href="mailto:reactgrid@silevis.com">reactgrid@silevis.com</a>
                  </p>
                </address>
              </Col>
              <Col xs="12" sm="12" md="3" className="pb-4 pb-sm-0">
                <h5 className="text-uppercase font-weight-bold">Social</h5>
                <ul className="links-horizontal">
                  {socialLinks}
                </ul>
              </Col>
            </Row>
            <Row className="py-3 justify-content-between justify-content-between align-items-center">
              <Col xs="12" sm="4">
                <h3 className="font-weight-bold mb-0 text-center text-sm-left text-primary" style={{ fontSize: '1.75rem' }}>
                  <Link to='/'>
                    <span className="font-weight-bold">{title}</span>
                  </Link>
                </h3>
              </Col>
              <Col xs="12" sm="8" className="d-flex justify-content-center justify-content-sm-end">
                <span className="text-center text-sm-right">
                  Copyright © 2019-{new Date().getFullYear()} Silevis Software Sp. z o.o., All Rights Reserved.
                </span>
              </Col>
            </Row>
            <CookieConsent
              location="bottom"
              buttonText="Allow cookies"
              containerClasses="cookie-container text-left"
              buttonStyle={{ backgroundColor: '#0683F9' }}
              buttonClasses="cookie-button"
            >
              This website uses cookies to ensure you get the best experience on our website.
        </CookieConsent>
          </Container>
        </footer>
      </>
    );
  }
}

const SocialLink = ({ fontAwesomeIcon, description, url, id, title }) => {
  const tooltipId = 'tooltip-' + id;
  return (
    <li className="w-100">
      <Button className="btn-simple d-flex align-items-center py-1 text-uppercase my-0" id={tooltipId} href={url}
        target="_blank" style={{ maxWidth: '160px' }}>
        <span className={`em-xs pr-3 p-0 icon-color-${title.toLowerCase()}`} style={{ width: '1.4em', fontSize: '1.75em' }}>
          <i className={fontAwesomeIcon} />
        </span>
        <span>{' '}{title}</span>
      </Button>
      <UncontrolledTooltip placement={'left'} delay={0} target={tooltipId}>{description}</UncontrolledTooltip>
    </li>
  )
}

export default Footer;
