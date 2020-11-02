import React from "react";
import FooterNavLinks from "./FooterNavLinks";
import FooterExploreLinks from "./FooterExploreLinks";
import { Link } from "gatsby";
import {
  Button,
  Container,
  UncontrolledTooltip,
  Col,
  Row,
} from "reactstrap";
import CookieConsent from "react-cookie-consent";

const Footer = ({ title, social }) => {
  const socialLinks = social
    .filter(link => link.active)
    .map(({ fontAwesomeIcon, description, url, title }, idx) => {
      return <SocialLink key={idx} id={idx} fontAwesomeIcon={fontAwesomeIcon} description={description} url={url} title={title} />
    })
  return (
    <>
      <footer className="footer footer-simple px-md-0">
        <Container>
          <Row className="text-left pt-4">
            <Col xs="6" lg='3' className="pb-4 pb-sm-0">
              <h5 className="text-uppercase font-weight-bold">Information</h5>
              <ul className="links-vertical">
                <FooterNavLinks />
              </ul>
            </Col>
            <Col xs="6" lg='3' className="pb-4 pb-sm-0">
              <h5 className="text-uppercase font-weight-bold">Contact</h5>
              <address>
                <p style={{ lineHeight: '2.3' }} className="font-weight-light">
                  Silevis Software Sp. z o.o.<br />
                    Sienkiewicza Street 17/3<br />
                    25-007 Kielce<br />
                    Poland<br /><br />
                  <i className="far fa-envelope pr-1"></i> <a href="mailto:reactgrid@silevis.com" className="text-break">reactgrid@silevis.com</a>
                </p>
              </address>
            </Col>
            <Col xs="6" lg='3' className="pb-4 pb-sm-0">
              <h5 className="text-uppercase font-weight-bold">Explore</h5>
              <ul className="links-vertical">
                <FooterExploreLinks />
              </ul>
            </Col>
            <Col xs="6" lg='3' className="pb-4 pb-sm-0">
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
                Copyright © 2019-{new Date().getFullYear()}
                <a href='https://www.silevis.com/'> Silevis Software </a> Sp. z o.o., All Rights Reserved.
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

const SocialLink = ({ fontAwesomeIcon, description, url, id, title }) => {
  const tooltipId = 'tooltip-' + id;
  return (
    <li className="w-100">
      <Button className="btn-link d-flex align-items-center p-0 text-uppercase m-0 font-weight-light" id={tooltipId} href={url} rel="noreferrer"
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
