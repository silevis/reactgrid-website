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

      <MainNavbar pages={pages} title={title} social={social} description={description} />
      <main className="layout-main-wrapper px-md-0">{children}</main>
      <Footer social={social} title={title} />
      <script src="https://klesun-misc.github.io/TypeScript/lib/typescriptServices.js"></script>
    </>
  )
}

export default Layout
