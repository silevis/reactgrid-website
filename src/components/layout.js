import React from "react"
import "../assets/css/nucleo-icons.css";
import "../assets/scss/blk-design-system-pro-react.scss?v1.0.0";
import "../assets/demo/demo.css";
import "../assets/demo/react-demo.css";
import "../assets/css/all.css";
import "../assets/scss/customStyles.scss";
import Footer from "./Footer";
import MainNavbar from "./MainNavbar";
import CookieConsent from "react-cookie-consent";

class Layout extends React.Component {
  render() {
    const { title, social, pages, description, children } = this.props;
    return (
      <>
        <header>
          <MainNavbar pages={pages} title={title} social={social} description={description} />
        </header>
        <main className="layout-main-wrapper">{children}</main>
        <footer>
          <Footer pages={pages} social={social} title={title} description={description} />
        </footer>
        <CookieConsent
          location="bottom"
          buttonText="Allow cookies"
          style={{ background: "rgb(44, 48, 107)" }}
          buttonStyle={{ color: "#4e503b", fontSize: "14px", backgroundColor: '#00f2c3' }}
        >
          This website uses cookies to ensure you get the best experience on our website.
        </CookieConsent>
      </>
    )
  }
}

export default Layout
