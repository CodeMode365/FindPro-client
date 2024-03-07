import Footer from "@/components/reusable/Footer";
import Navbar from "@/components/reusable/Navbar";
import TopScroller from "@/components/reusable/TopScroller";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <TopScroller />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
