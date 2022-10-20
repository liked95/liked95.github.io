import React from "react";
import Header from "components/Header/index";
import { Outlet } from "react-router-dom";
import Footer from "components/Footer/index";
import Compare from "components/Compare/index";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Compare />
    </>
  );
}

export default Layout;
