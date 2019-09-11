import React from "react"
import "../assets/css/nucleo-icons.css";
import "../assets/scss/blk-design-system-pro-react.scss?v1.0.0";
import "../assets/demo/demo.css";
import "../assets/demo/react-demo.css";
import "../assets/css/all.css";
import Footer from "./Footer";
import MainNavbar from "./MainNavbar";

class Layout extends React.Component {
  render() {
    const { title, social, pages, description, children} = this.props
    return (
      <div>
        <header>
          <MainNavbar pages={pages} title={title} description={description}/>
        </header>
        <main>{children}</main>
        <footer>
          <Footer pages={pages} social={social} title={title} description={description}/>
        </footer>
      </div>
    )
  }
}

export default Layout
