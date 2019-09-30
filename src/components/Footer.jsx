import React from "react";
import CommonFooterLinks from "../components/CommonFooterLinks"
import FooterOnlyLinks from "../components/FooterOnlyLinks"
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
      <footer className="footer footer-simple bg-darker" data-background-color="black">
        <Container>
          <div className="content">
            <Row>
              <Col xs="6" sm="4" md="3" className="pb-4 pb-sm-0">
                <h5>About</h5>
                <ul className="links-vertical">
                  <CommonFooterLinks pages={pages}/>
                </ul>
              </Col>
              <Col xs="6" sm="4" md="3" className="pb-4 pb-sm-0">
                <h5>Company</h5>
                <ul className="links-vertical">
                  <FooterOnlyLinks/>
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
