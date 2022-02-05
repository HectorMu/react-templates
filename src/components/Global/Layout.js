import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
