import React from "react"
import "../assets/scss/customBLKStyling.scss";
import "../assets/scss/customStyles.scss";
import "../assets/scss/blk-design-system-pro-react.scss?v1.0.0";
import "../assets/demo/react-demo.css";
import "../assets/css/all.css";
import "../assets/demo/demo.css";
import Footer from "./Footer";
import MainNavbar from "./MainNavbar";


const Layout = ({ title, social, pages, description, children }) => {
  return (
    <>
      <header>
        <MainNavbar pages={pages} title={title} social={social} description={description} />
      </header>
      <main className="layout-main-wrapper">{children}</main>
      <Footer pages={pages} social={social} title={title} description={description} />
    </>
  )
}

export default Layout
