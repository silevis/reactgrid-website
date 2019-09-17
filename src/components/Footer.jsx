import React from "react";
import { Link } from "gatsby";

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
    const footerLinks = pages.map((page) => {
        return <FooterLink key={page.id} route={page.route} title={page.title}/> 
    })
    const socialLinks = social.map((link, idx) => {
        return <SocialLink key={idx} id={idx} fontAwesomeIcon={link.fontAwesomeIcon} description={link.description} 
                url={link.url} title={link.title}/> 
    })
    return (
        <footer className="footer" data-background-color="black">
            <Container>
                <Link to={pages[0].route} className="footer-brand"></Link>
                <div>
                    <Row>
                        <Col lg="3">
                            <div className="info info-hover pt-3">
                                <Row>
                                    <Col sm="3">
                                        <div className="icon icon-primary">
                                            <i className="tim-icons icon-square-pin" />
                                        </div>
                                    </Col>
                                    <Col sm="9" className="text-left">
                                        <h4>Address</h4>
                                        <p className="p-0 description">Sienkiewicza Street 17/3<br/>kod-pocztowy Kielce<br/></p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg="3">
                            <div className="info info-hover pt-3">
                                <Row>
                                    <Col sm="3">
                                        <div className="icon icon-primary">
                                            <i className="tim-icons icon-email-85" />
                                        </div>
                                    </Col>
                                    <Col sm="9" className="text-left">
                                        <h4>Email</h4>
                                        <p className="p-0 description">support@youremail.com</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg="3">
                            <div className="info info-hover pt-3">
                                <Row>
                                    <Col sm="3">
                                        <div className="icon icon-warning">
                                            <i className="tim-icons icon-mobile" />
                                        </div>
                                    </Col>
                                    <Col sm="9" className="text-left">
                                        <h4>Phone Number</h4>
                                        <p className="p-0 description">+48 (424) 535 3523</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg="3">
                            <div className="info info-hover pt-3">
                                <Row>
                                    <Col sm="3">
                                        <div className="icon icon-info">
                                            <i className="tim-icons icon-single-02" />
                                        </div>
                                    </Col>
                                    <Col sm="9" className="text-left">
                                        <h4>Contact</h4>
                                        <p className="p-0 description">Michał Matejko</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
                <hr className="w-100"/>
                <ul className="pull-left">
                    {footerLinks}
                </ul>
                <div class="copyright">
                    <ul className="social-buttons pull-left pr-3">
                        {socialLinks}
                    </ul>
                    Copyright © 2019 Silevis Software, All Rights Reserved.
                </div>
            </Container>
        </footer>
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
            <Button className="btn btn-link btn-neutral ml-1" color="link" 
                id={tooltipId} href={url} target="_blank">
                <i className={fontAwesomeIcon} />
            </Button>
            <UncontrolledTooltip delay={0} target={tooltipId}>{description}</UncontrolledTooltip>
        </li>
    )
}

export default Footer;
