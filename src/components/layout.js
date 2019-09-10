import React from "react"
import { Link } from "gatsby"

// import ColorNavbar from "../components/Navbars/ColorNavbar";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <div>
        <header>
          {/* <ColorNavbar /> */}
        </header>
        <main>{children}</main>
        <footer>
          // footer
        </footer>
      </div>
    )
  }
}

export default Layout
