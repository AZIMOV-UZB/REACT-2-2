import Footer from "../components/footer/footer";
import Header from "../components/header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-5">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
