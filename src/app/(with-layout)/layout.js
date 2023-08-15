import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const WithLayout = ({ children }) => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="bg-[#EFF3F5]">
        <div className="">{children}</div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default WithLayout;
