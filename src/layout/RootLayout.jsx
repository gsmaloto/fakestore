import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="relative">
      <Header />
      <main className="min-h-[100vh] pt-[10vh] pb-[20vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
