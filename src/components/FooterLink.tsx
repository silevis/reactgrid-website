import React from "react"
import { Link } from "gatsby";

const FooterLink = ({ route, title }) => <li><Link to={route} activeStyle={{ fontWeight: 600 }} >{title}</Link></li>


export default FooterLink