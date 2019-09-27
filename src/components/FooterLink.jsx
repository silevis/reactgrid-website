import React from "react"
import { Link } from "gatsby";

const FooterLink = ({route, title}) => {
  return (
    <li>
      <Link to={route} activeStyle={{fontWeight: 600}} className="ml-1">{title}</Link>
    </li>
  )
}

export default FooterLink