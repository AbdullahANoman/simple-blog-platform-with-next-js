import React from "react";
import Navbar from "../components/Navbar/Navbar";

const WithLayout = ({ children }) => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="bg-[#EFF3F5]">
        <div className="">{children}</div>
      </div>
      <footer className="mt-10">This is footer</footer>
    </div>
  );
};

export default WithLayout;
