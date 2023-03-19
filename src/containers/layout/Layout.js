import React from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div style={{ height: "calc(100vh - 120px)", overflow: "auto" }}>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
