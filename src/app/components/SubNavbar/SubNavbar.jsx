import React from "react";

const SubNavbar = () => {
  return (
    <div className="flex justify-center gap-5 items-center mx-auto ">
      <p className="px-4 py-0 rounded-xl uppercase text-sm text-gray-500 bg-white mt-3 hover:shadow-xl duration-200 hover:text-[#FE7143]">
        Latest
      </p>
      <p className="px-4 py-0 rounded-xl uppercase text-sm text-gray-500 bg-white mt-3 hover:shadow-xl duration-200 hover:text-[#FE7143]">
        Trending
      </p>
      <p className="px-4 py-0 rounded-xl uppercase text-sm text-gray-500 bg-white mt-3 hover:shadow-xl duration-200 hover:text-[#FE7143]">
        Featured
      </p>
    </div>
  );
};

export default SubNavbar;
