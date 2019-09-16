import React from "react";
import { Link } from "gatsby";

import {
  Button,
  Container,
  UncontrolledTooltip
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
                <Link to={pages[0].route} className="footer-brand">Silevis Software | 2019</Link>
                <ul className="pull-center">
                    {footerLinks}
                </ul>
                <ul className="social-buttons pull-right">
                    {socialLinks}
                </ul>
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
