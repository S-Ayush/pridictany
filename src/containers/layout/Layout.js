import React from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div style={{ height: "-webkit-fill-available", overflow: "auto" }}>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
